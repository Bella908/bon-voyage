import { getAuth ,createUserWithEmailAndPassword, signInWithEmailAndPassword , signOut, GoogleAuthProvider,GithubAuthProvider, signInWithPopup, onAuthStateChanged } from "firebase/auth";
import { createContext, useState ,useEffect } from "react";
import app from "../../fireBase/FireBase.int";

const auth = getAuth(app)
export const AuthContext = createContext(null);


const AuthProvider = ({children}) => {
    const[user , setUser] = useState(null);
    const [loading , setLoading] = useState(true);
    const googleAuthProvider  = new GoogleAuthProvider(true);
    const githubAuthProvider = new GithubAuthProvider(true);


    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    
    
    const sighIn = (email , password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth , email , password);
    }

    const logOut = () =>{
        setLoading(true);
        return signOut(auth);

    }

    useEffect(() => {
        const unSubscribe =  onAuthStateChanged(auth, currentUser => {
             console.log('user is the auth state changed', currentUser);
             setUser(currentUser);
             setLoading(false);
         });
         return() =>{
            unSubscribe() ;
         }
     }, [])


    const googleLogin = () =>{
        setLoading(true);
        return signInWithPopup(auth,googleAuthProvider)
    }
    const githublogIn = () =>{
        setLoading(true);
            return signInWithPopup(auth, githubAuthProvider)
    }

    const userInfo ={
        user,
        setUser,
        loading,
        logOut,
        sighIn,
        googleLogin,
        githublogIn,
        createUser
    }
    return (
        <AuthContext.Provider value={userInfo}>
            ({children})
        </AuthContext.Provider>
    );
};

export default AuthProvider;