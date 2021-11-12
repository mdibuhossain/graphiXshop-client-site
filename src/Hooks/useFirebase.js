import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, updateProfile } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { initAuth } from "../Firebase/initAuth"

initAuth();

export const useFirebase = () => {
    const auth = getAuth();
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [order, setOrder] = useState({});

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
        console.log(location, history);
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
        fetch('http://localhost:5000/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        }).then(data => console.log(data));
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
            else
                setUser({});
            setIsLoading(false);
        });
        return () => unsubscribe;
    }, [auth])

    return {
        user,
        logIn,
        error,
        order,
        logOut,
        setOrder,
        isLoading,
        userRegister
    }
}

// export default useFirebase;