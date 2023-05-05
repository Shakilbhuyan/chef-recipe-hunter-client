import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

// Create user 
  const createUser = (email, password) =>{
    setLoading(true)
     return createUserWithEmailAndPassword(auth, email, password);
  };
// Login user
const loginUser = (email, password) =>{
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
};
// SignOut
const logOut = ()=>{
    setLoading(true)
    return signOut(auth);
 }
//  Observer
    useEffect( ()=>{
   const unsubscribe = onAuthStateChanged(auth, currentUser =>{
           console.log(currentUser)
                setUser(currentUser)
                setLoading(false);
      })
      return ()=> unsubscribe();
    },[]);

    const authInfo ={
        user,
        createUser,
        loginUser,
        logOut,
        loading

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {
                children
            }
        </AuthContext.Provider>
    );
};

export default AuthProvider;