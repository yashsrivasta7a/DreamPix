import React, { useEffect, useState } from "react";
import {
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { app } from "../Firebase/FirebaseConfig";

function Authentication() {
  const auth = getAuth(app);
  auth.useDeviceLanguage();
  const provider = new GoogleAuthProvider();

  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
    return () => unsubscribe();
  }, [auth]);

  const googleAuth = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken;
      const user = result.user;
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

  const handleSignOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Error Code:", error.code);
      console.error("Error Message:", error.message);
    }
  };

  return (
    <div>
      {user ? (
        <div className="z-100 relative  flex justify-end right-5">
          <button className="bg-blue-800 p-3 rounded-xl font-extralight text-white hover:bg-blue-950 hover:scale-105" onClick={handleSignOut}>Sign Out</button>
        </div>
      ) : (
        <div className="flex flex-row items-center justify-center gap-3">
          <button className="bg-blue-800 p-2 rounded-xl font-extralight text-white hover:bg-blue-950 hover:scale-105 " onClick={googleAuth}>
            Sign in with Google
          </button>
        </div>
      )}
    </div>
  );
}

export default Authentication;
