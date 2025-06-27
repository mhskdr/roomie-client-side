import React, { useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../firebase/firebase.init';
import { AuthContext } from './AuthContext';

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const signInWithGoogle = () => {
        setLoading(true);
        const provider = new GoogleAuthProvider();
        return signInWithPopup(auth, provider);
    }

    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const updateUser = (updatedData) => {
        return updateProfile(auth.currentUser, updatedData);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                setLoading(false);
            } else {
                setUser(null);
                setLoading(false);
            }
        });
        return () => { unsubscribe(); }
    }, []);
    const signOutUser = () => {
        setLoading(true);
        return signOut(auth);
    }
    const forgetPassword = (email) => {
        return sendPasswordResetEmail(auth, email);
    }

    const authInfo = {
        user,
        setUser,
        createUser,
        signInUser,
        signOutUser,
        loading,
        setLoading,
        updateUser,
        signInWithGoogle,
        forgetPassword
    };

    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};
export default AuthProvider;