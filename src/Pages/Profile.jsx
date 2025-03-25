import { getAuth, onAuthStateChanged } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { getDatabase, ref, child, get } from "firebase/database";
import Authentication from "../Components/Authentication"
function Profile() {

 const [user, setUser] = useState(null);
 const [images, setImages] = useState([]);
 const auth = getAuth();

 useEffect(() => {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            setUser(user);
            const dbRef = ref(getDatabase());
            get(child(dbRef, `users/${user.uid}/images`)).then((snapshot) => {
                if (snapshot.exists()) {
                    const imagesArray = Object.values(snapshot.val()); // object into array
                    setImages(imagesArray);
                } else {
                    console.log("No data available");
                }
            }).catch((error) => {
                console.error(error);
            });
        } else {
            setUser(null);
        }
    });
 }, [auth]);

  return (
    <div>
        {
        user ? (
            <><div className='top-20 relative bg-[#09091e] rounded-2xl m-3'>
            <div >
                <h1 className='text-blue-300 font-extralight pt-2'>Welcome </h1> <span className='text-white font-bold text-6xl'> {user.displayName} </span> 
            </div>
            <div className='flex mt-6 h-xl w-72 gap-16 pb-3.5'>
            {images.map((image, index) => (
                <img key={index} src={image} alt={`Image ${index}`} />
            ))}
            </div>
            </div>
            </>
        ) : (
            <>
            <p>User is not authenticated</p>
            <Authentication/>
            </>
        )}
    </div>
  )
}

export default Profile