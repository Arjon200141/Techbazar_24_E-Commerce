import { 
    GoogleAuthProvider, 
    createUserWithEmailAndPassword, 
    onAuthStateChanged, 
    signInWithEmailAndPassword, 
    signInWithPopup, 
    signOut,
    updateProfile
  } from 'firebase/auth';
  import { createContext, useEffect, useState } from 'react';
import { auth } from '../../firebase.config';

  
  export const AuthContext = createContext(null);
  const googleProvider = new GoogleAuthProvider();
  
  const AuthProviders = ({ children }) => {
      const [user, setUser] = useState(null);
      const [loading, setLoading] = useState(true);
      const [isAdmin,setIsAdmin] = useState(false) // Changed initial loading to true
  
      const createUser = (email, password) => {
          setLoading(true);
          return createUserWithEmailAndPassword(auth, email, password);
      }
  
      const updateUserProfile = (name) => {
          setLoading(true);
          return updateProfile(auth.currentUser, {
              displayName: name,
          });
      }
  
      const logOut = () => {
          setLoading(true);
          return signOut(auth);
      }
  
      const signIn = (email, password) => {
          setLoading(true);
          return signInWithEmailAndPassword(auth, email, password);
      }
  
      const signInWithGoogle = () => {
          setLoading(true);
          return signInWithPopup(auth, googleProvider);
      }
  
      useEffect(() => {
          const unsubscribe = onAuthStateChanged(auth, currentUser => {
              setUser(currentUser);
              setLoading(false);
          });
          return () => {
              unsubscribe();
          }
      }, [])
      useEffect(()=>{
        if(user){
            fetch(`https://techbazar24-server.vercel.app/users/${user.email}`)
            .then(res=>res.json())
            .then(data=>{
                if(data.userRoll){
                    setIsAdmin(true)
                }
            })
        }

      },[user])
  
      const authinfo = {
          user,
          loading,
          isAdmin,
          createUser,
          updateUserProfile,
          logOut,
          signIn,
          signInWithGoogle
      }
  
      return (
          <AuthContext.Provider value={authinfo}>
              {children}
          </AuthContext.Provider>
      );
  };
  
  export default AuthProviders;