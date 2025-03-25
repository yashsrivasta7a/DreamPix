import { getAuth, onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { getDatabase, ref, child, get, onValue } from "firebase/database";
import Authentication from "../Components/Authentication";
function Profile() {
  const [user, setUser] = useState(null);
  const [images, setImages] = useState([]);
  const [title, setTitle] = useState(null);
  const auth = getAuth();

  useEffect(() => {
    const unsubscribeAuth = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        const db = getDatabase();
        const dbRef = ref(db, `users/${user.uid}/images`);

        const unsubscribeDb = onValue(
          dbRef,
          (snapshot) => {
            if (snapshot.exists()) {
              const imagesArray = Object.values(snapshot.val()); // Convert object to array
              setImages(imagesArray);
            } else {
              setImages([]);
              console.log("No data available");
            }
          },
          (error) => {
            console.error("Error fetching data:", error);
          }
        );
        return () => unsubscribeDb();
      } else {
        setUser(null);
        setImages([]);
      }
    });
    return () => unsubscribeAuth();
  }, [auth]);

  return (
    <div>
      {loading ? (
        <div className="text-white text-center mt-10">Loading...</div>
      ) : user ? (
        <div className="top-20 relative bg-[#0c0c32] rounded-2xl m-3 mb-3">
          <div className="pl-6">
            <h1 className="text-blue-300 font-extralight pt-2">Welcome</h1>
            <span className="text-white font-bold text-6xl">
              {user.displayName || "User"}
            </span>
          </div>
          <div className="max-w-full mx-auto">
            <div className="flex flex-wrap justify-center gap-4 mt-6 pb-3.5">
              {images.length > 0 ? (
                images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Image ${index}`}
                    className="w-72 h-96 object-cover rounded-lg"
                  />
                ))
              ) : (
                <p className="text-white">No images found</p>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="top-20 relative bg-[#0c0c32] rounded-2xl pb-9 flex gap-9 flex-col">
          <p className="text-white font-bold text-4xl items-center justify-center flex mt-9">
            User is not authenticated
          </p>
          <Authentication />
        </div>
      )}
    </div>
  );
}

export default Profile;
