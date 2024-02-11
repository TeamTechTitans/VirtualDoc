import { createContext } from 'react';

import { useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { useEffect } from 'react';
import auth from '../../firebase/firebase.init';
import Swal from 'sweetalert2';
import useAxiosPublic from '../../lib/hooks/useAxiosPublic';
import useApiLink from '../../lib/hooks/useApiLink';

export const AuthContext = createContext('null');
const axiosPublic = useAxiosPublic()
const apiLink = useApiLink()

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const provider = new GoogleAuthProvider();
    const [loading, setLoading] = useState(true);
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const logIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }
    const googleSignIn = () => {
        return signInWithPopup(auth, provider)
    }
    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }

    const logOut = () => {
        setLoading(true)
        signOut(auth)
            .then(() => {
                Swal.fire({
                    title: 'Logout successful',
                    text: "See you again",
                    confirmButtonColor: 'teal'
                })
            }).catch(() => {
                // An error mssge
            });
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            const userEmail = { email: currentUser?.email }
            axiosPublic.post(`${apiLink}/jwt`,userEmail)
                .then(res => {
                console.log(res.data)
            })
            console.log('user in the current state', currentUser);
            setLoading(false);
        })
        return () => {
            unSubscribe();
        }
    }, [])

    const authInfo = { user, createUser, logIn, googleSignIn, logOut, loading, updateUserProfile };
    return (
        <AuthContext.Provider value={authInfo}>

            {children}

        </AuthContext.Provider>
    );
};

export default AuthProvider;