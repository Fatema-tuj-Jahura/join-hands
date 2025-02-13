import { createContext, useEffect } from 'react';
import { useState } from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from "../firebase/firebase.config";
export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    const createUser = (email, password) =>{
        // setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth , currentUser =>{
            setUser(currentUser);
            // setLoading(false);
            });
            return()=>{
                unsubscribe();
            }
    },[]);

    const userLogin = (email, password) =>{
        // setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    const logOut=()=>{
        // setLoading(true);
        return signOut(auth);
    }

    const userInfo = {
        user, 
        setUser,
        // loading,
        createUser,
        logOut,
        userLogin,
        // updateUserProfile
    } 
    return(
        <AuthContext.Provider value={userInfo}>
             {children}
        </AuthContext.Provider>
    );
};
export default AuthProvider;
