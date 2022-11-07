import { createContext, useContext, useState, useEffect } from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from "firebase/auth";
import { auth } from '../Firebase/Firebase';
const userlocalStorage = JSON.parse(localStorage.getItem('user'))
const userAuthContext = createContext();

export function UserAuthContextProvider({ children }) {
const [user, setUser] = useState(userlocalStorage);
useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user))
  }, [user])
    function signUp(email, password){
        return createUserWithEmailAndPassword(auth, email, password);
        
    }
    

    function logIn(email, password){
        return signInWithEmailAndPassword(auth, email, password);

    }
    
    function logout()
    {
        return signOut(auth)
    }
    
    useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser)
     });
      return () => {
        unsubscribe();
      } 
      
    }, []);
    

    return <userAuthContext.Provider value={{signUp, user, logIn, logout}}>{children}</userAuthContext.Provider>
}

export function useUserAuth() {
    return useContext(userAuthContext)
}