import { createContext, useContext, useState, useEffect } from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from "firebase/auth";
import { auth } from '../Firebase/Firebase';

const userAuthContext = createContext();

export function UserAuthContextProvider({ children }) {
const [user, setUser] = useState("");

    function signUp(email, password){
        return createUserWithEmailAndPassword(auth, email, password);
        console.log(email)
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