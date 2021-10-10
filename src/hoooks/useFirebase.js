import { useState } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";
import initializeAuthentication from "../firebase/firebase.initialize";

initializeAuthentication();

const useFirebase= () => {
    const [user, setUser] = useState({});


    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInWithGoogle = () => {

        return signInWithPopup(auth, googleProvider)
           /*  
           .then(result => {
                console.log(result.user);
            })

            */
    }

    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({})
            })
    }
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
        });
    }, [auth])

    return {
        user,
        signInWithGoogle,
        logOut
    }

}

export default useFirebase;