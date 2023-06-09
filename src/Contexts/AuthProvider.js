import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import app from '../Firebase/Firebase.config';
import { GoogleAuthProvider } from "firebase/auth";


export const AuthContext = createContext();
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [displayId, setDisplayID] = useState('');
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    const updateUser = (name) => {
        return updateProfile(auth.currentUser, {
            displayName: name
        });
    };

    const googleSign = () => {
        return signInWithPopup(auth, googleProvider)

    };

    const logOut = () => {
        setLoading(true);
        localStorage.removeItem('accessToken');
        return signOut(auth);
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            // console.log('user observing');
            setUser(currentUser);
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    const authInfo = {
        createUser,
        signIn,
        googleSign,
        updateUser,
        logOut,
        setDisplayID,
        displayId,
        user,
        loading
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;