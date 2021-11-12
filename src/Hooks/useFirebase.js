import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, updateProfile } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { initAuth } from "../Firebase/initAuth"

initAuth();

export const useFirebase = () => {
    const auth = getAuth();
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    const userRegister = (name, email, password, history, location) => {
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
            }).catch(error => setError(error.message)).finally(() => setIsLoading(false))
    }

    const logIn = (email, password, location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(result.user);
                setError('');
            }).catch(error => setError(error.message)).finally(() => setIsLoading(false))
    }

    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => {
                setUser({});
                setError('');
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
    }, [])

    return {
        user,
        logIn,
        error,
        logOut,
        isLoading,
        userRegister
    }
}

// export default useFirebase;