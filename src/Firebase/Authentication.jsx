import React, { useEffect, useState } from "react";
import { getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { app } from "./FirebaseConfig";

function Authentication() {
  const auth = getAuth(app);
  auth.useDeviceLanguage();
  const provider = new GoogleAuthProvider();
  const gitProvider = new GithubAuthProvider();

  const [user,setUser] = useState(null);
  
  

  useEffect(()=>{
    const signOut = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
    return ()=>signOut();},[auth]);

  const googleAuth = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken;
    } catch (error) {
      console.error("Error Code:", error.code);
      console.error("Error Message:", error.message);
      console.error("Email:", error.email);
      
      const credential = GoogleAuthProvider.credentialFromError(error);
      console.log("Credential:", credential);

      if (error.code === "auth/account-exists-with-different-credential") {
        let pendingCred = error.credential;
        console.log("Pending Credential:", pendingCred);
      }
    }
  };

  const githubAuth = async()=>{
    try{
        const gitResult = await signInWithPopup(auth, gitProvider);
        const credential = GithubAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
    }
    catch(error){
        console.error("Error Code:", error.code);
        console.error("Error Message:", error.message);
        console.error("Email:", error.email);
        
        const credential = GithubAuthProvider.credentialFromError(error);
        console.log("Credential:", credential);

        if (error.code === "auth/account-exists-with-different-credential") {
            let pendingCred = error.credential;
            console.log("Pending Credential:", pendingCred);
          }
    }
  }

  const handleSignOut = async () => {
    try{
      await signOut(auth);
    }
    catch(error){
      console.error("Error Code:", error.code);
      console.error("Error Message:", error.message);
    }}

  
  return (
    <div >
      {user ? (
        <div className="flex flex-row items-center justify-center gap-3">Welcome, {user.displayName}
        <button  onClick={handleSignOut}>Sign Out</button>
        </div>
      ) : (
        <div className="flex flex-row items-center justify-center gap-3">
          <button className="bg-white" onClick={googleAuth}>Sign in with Google</button>
          <button className="bg-white" onClick={githubAuth}>Sign in with Github</button>
        </div>
      )}
    </div>
  );
}

export default Authentication;
