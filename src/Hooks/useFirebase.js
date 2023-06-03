import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, updateProfile, getIdToken } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { initAuth } from "../Firebase/initAuth"

initAuth();

export const useFirebase = () => {
    const auth = getAuth();
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [token, setToken] = useState('');
    const [admin, setAdmin] = useState(false);
    const [order, setOrder] = useState({});
    const [reviewValue, setReviewValue] = useState(0);
    const [update, setUpdate] = useState(0);

    const userNewDataUpdate = (data) => {
        updateProfile(auth.currentUser, {
            ...data
        }).then(() => { setUpdate(update + 1) }).catch(error => console.log(error.message))
    }

    const userRegister = (name, email, password, location, history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                setError('');
                const newUser = { email, displayName: name };
                setUser(newUser);
                saveUser(email, name, "POST");
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => { }).catch(error => setError(error.message))
                const destination = location?.state?.from?.pathname || '/';
                history.push(destination);
            }).catch(error => setError(error.message)).finally(() => setIsLoading(false))
    }

    const logIn = (email, password, location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(result.user);
                setError('');
                const destination = location?.state?.from?.pathname || '/';
                history.push(destination);
            }).catch(error => setError(error.message)).finally(() => setIsLoading(false))
    }

    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => {
                setUser({});
                setError('');
                // history.push('/');
            }).catch((error) => setError(error.message)).finally(() => setIsLoading(false))
    }

    const saveUser = (email, displayName, method) => {
        const user = { email, displayName };
        fetch(`${process.env.REACT_APP_SERVER_URL}/users`, {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        }).then();
    }

    useEffect(() => {
        fetch(`${process.env.REACT_APP_SERVER_URL}/users/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setAdmin(data?.admin);
            })
    }, [user])

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                getIdToken(user)
                    .then(idToken => {
                        setToken(idToken);
                    })
            }
            else
                setUser({});
            setIsLoading(false);
        });
        return () => unsubscribe;
    }, [auth, update])

    return {
        user,
        logIn,
        admin,
        error,
        token,
        order,
        logOut,
        setOrder,
        isLoading,
        reviewValue,
        userRegister,
        setReviewValue,
        userNewDataUpdate
    }
}

// export default useFirebase;