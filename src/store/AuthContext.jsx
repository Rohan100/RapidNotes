import { createContext, useContext,useEffect,useState } from "react";
import { GoogleAuthProvider,createUserWithEmailAndPassword,onAuthStateChanged,signInWithEmailAndPassword,signInWithPopup, signOut } from "firebase/auth";
import { auth, db } from "../firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";

const AuthContext = createContext({
    user : {},
    logOut : ()=>{},
    googleSignin : ()=>{},
    emailPasswordSignin : () => {},
    registerUser : ()=>{}
});

export const AuthContextProvider = ({children}) => {
    const [user,SetUser] = useState({});

    const logOut = () => {
        signOut(auth);
    }

    const googleSignin = async () => {
        const provider = new GoogleAuthProvider();
        const userCredential = await signInWithPopup(auth,provider);
        try{
            const ref = await doc(db,'users/'+userCredential.user.id);
            const d = await getDoc(ref)
            if(!d.exists()){
                const ref = doc(db,'users/'+userCredential.user.uid);
                await setDoc(ref,{
                    email : userCredential.user.email,
                    name : userCredential.user.displayName,
                    likedFiles : [],
                    savedFiles : [],
                })
            }

        }catch(error){
            console.log(error)
        }
    }

    const emailPasswordSignin = (email,password) => {
        signInWithEmailAndPassword(auth,email,password);
    }

    const registerUser =async (displayName,email,password) =>{
        try {
            const userCredential = await createUserWithEmailAndPassword(auth,email, password);
            const ref = doc(db,'users',userCredential.user.uid);
            await setDoc(ref,{
                email,
                name : displayName,
                likedFiles : [],
                savedFiles : [],
            })
            console.log(userCredential.user.uid);
          } catch (error) {
            console.error('Error creating user:', error.message);
          }
        
    }



    useEffect(() => {
        const unsub = onAuthStateChanged(auth,async (currentUser) => {
            
            if(currentUser){
                console.log(currentUser)
                const ref = doc(db,'users/' + currentUser.uid)
                const docSnap = await getDoc(ref);
                if(docSnap.exists()){ 
                    SetUser({...currentUser,userExtraInfo : docSnap.data()})
                    console.log({...currentUser,userExtraInfo : docSnap.data()})
                }
            }
            SetUser(currentUser)
            
            console.log(currentUser);
        })
        return () => {
            unsub();
        }
    },[])


    return <AuthContext.Provider value={{googleSignin,logOut,user,emailPasswordSignin,registerUser}}>
        {children}
    </AuthContext.Provider>
}

export const UserAuth =() => {
    return useContext(AuthContext)
}