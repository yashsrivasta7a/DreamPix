import { hourglass } from "ldrs";
import React, { useState, useEffect } from "react";
import { fal } from "@fal-ai/client";
import { PlaceholdersAndVanishInput } from "../Components/placeholders-and-vanish-input";
import { getDatabase, ref, set, update, get, push } from "firebase/database";
import { getAuth, onAuthStateChanged } from "firebase/auth";

fal.config({
  credentials: import.meta.env.VITE_FAL_AI_CREDENTIALS || "",
});

const placeholders = [
  "Imagine a futuristic cyberpunk city with neon lights",
  "Describe a majestic dragon soaring over a castle",
  "Create an ultra-realistic portrait of a medieval warrior",
  "Visualize a dreamlike floating island with waterfalls",
  "Design a sci-fi spaceship exploring a distant galaxy",
];

const ImageGenerator = () => {
  const [imageUrl, setImageUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const [logs, setLogs] = useState([]);
  const [prompt, setPrompt] = useState("");
  const [user, setUser] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      }
    });
  }, []);

  const databaseWrite = async (user, imageUrl) => {
    if (!user) return;

    const db = getDatabase();
    const userRef = ref(db, `users/${user.uid}`);
    try {
      const snapshot = await get(userRef);
      if (!snapshot.exists()) {
        await set(userRef, {
          username: user.displayName,
          email: user.email,
        });
        console.log("User details stored successfully!");
      }

      const imagesRef = ref(db, `users/${user.uid}/images`);
      await push(imagesRef, imageUrl);

      console.log("Image added successfully!");
    } catch (error) {
      console.error("Error writing to database:", error);
    }
  };

  const generateImage = async (userPrompt) => {
    if (!userPrompt.trim()) return;
    setLoading(true);
    setLogs([]);
    setImageUrl(null);

    try {
      
      const result = await fal.subscribe("fal-ai/minimax-image", {
        input: {
          prompt: userPrompt,
          aspect_ratio: "1:1",
          num_images: 1,
        },
        logs: true,
        onQueueUpdate: (update) => {
          if (update.status === "IN_PROGRESS") {
            setLogs((prevLogs) => [
              ...prevLogs,
              ...update.logs.map((log) => log.message),
            ]);
          }
        },
      });
      const generatedImageUrl = result.data?.images?.[0]?.url;
      


      if (generatedImageUrl) {
        setImageUrl(generatedImageUrl);
        if (user) {
          databaseWrite(user, generatedImageUrl);
        }
      } else {
        console.error("Error: No image URL returned from DALL·E API.");
      }
    } catch (error) {
      console.error("Error generating image:", error);
    }

    setLoading(false);
  };


//   const generateImage = async (userPrompt) => {
//   if (!userPrompt.trim()) return;
//   setLoading(true);
//   setLogs([]);
//   setImageUrl(null);

//   try {
//     // const response = await fetch(
//     //   "https://yash-mdzwxt2n-australiaeast.cognitiveservices.azure.com/openai/deployments/dall-e-3/images/generations?api-version=2024-02-01",
//     //   {
//     //     method: "POST",
//     //     headers: {
//     //       "Content-Type": "application/json",
//     //          Authorization: `Bearer ${import.meta.env.VITE_AZURE_OPENAI_API_KEY}`,
//     //     },
//     //     body: JSON.stringify({
//     //       model: "dall-e-3",
//     //       prompt: userPrompt,
//     //       size: "1024x1024",
//     //       style: "vivid",
//     //       quality: "standard",
//     //       n: 1,
//     //     }),
//     //   }
//     // );

//     const data = await response.json();
//     console.log("DALL·E API response:", data);

//     const generatedImageUrl = data?.data?.[0]?.url;

//     if (generatedImageUrl) {
//       setImageUrl(generatedImageUrl);
//       if (user) {
//         databaseWrite(user, generatedImageUrl);
//       }
//     } else {
//       console.error("Error: No image URL returned from DALL·E API.");
//     }
//   } catch (error) {
//     console.error("Error generating image:", error);
//   }

//   setLoading(false);
// };


  hourglass.register();

  const handleSubmit = (e) => {
    e.preventDefault();
    generateImage(prompt);
  };

  return (
    <div>
      {user ? (
        <div className="text-center  bg-[#09091e] pt-28 pb-28 ">
          <div className="flex items-center justify-center flex-col ">
            <div className="flex items-center justify-center pb-5">
              {loading ? (
                <p className="text-amber-50 font-bold p-60 bg-[#051d3d] rounded-4xl">
                  <l-hourglass
                    size="80"
                    bg-opacity="0.1"
                    speed="1.75"
                    color="white"
                  ></l-hourglass>
                </p>
              ) : (
                imageUrl && (
                  <img
                    key={imageUrl}
                    src={imageUrl}
                    alt="Generated AI Image"
                    className="w-md h- rounded-xl shadow-md shadow-blue-600"
                  />
                )
              )}
            </div>

            <div className="p-11">
              <PlaceholdersAndVanishInput
                placeholders={placeholders}
                onChange={(e) => setPrompt(e.target.value)}
                onSubmit={handleSubmit}
              />
            </div>
          </div>
        </div>
      ) : (
        <h1 className="text-white font-black pt-11 pb-11">
          ⚠️ You're Not logged in ⚠️
        </h1>
      )}
    </div>
  );
};

export default ImageGenerator;
