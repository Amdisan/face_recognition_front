const USER_ID = "amdiqplndn4qhvrt";
// Your PAT (Personal Access Token) can be found in the portal under Authentification
const PAT = "ac2a0fb725494fb4b0bc683349f528b4";
const APP_ID = "face_recognition";
// Change these to whatever model and image URL you want to use
const MODEL_ID = "face-detection";
const MODEL_VERSION_ID = "6dc7e46bc9124c5c8824be4822abe105";

export const clarifyFetch = async (
  imgUrl,
  displayFaceBox,
  calcFaceLocation
) => {
  const raw = JSON.stringify({
    user_app_id: {
      user_id: USER_ID,
      app_id: APP_ID,
    },
    inputs: [
      {
        data: {
          image: {
            url: imgUrl,
          },
        },
      },
    ],
  });

  const requestOptions = {
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: "Key " + PAT,
    },
    body: raw,
  };

  // NOTE: MODEL_VERSION_ID is optional, you can also call prediction with the MODEL_ID only
  // https://api.clarifai.com/v2/models/{YOUR_MODEL_ID}/outputs
  // this will default to the latest version_id
  try {
    const response = await fetch(
      "https://api.clarifai.com/v2/models/" +
        MODEL_ID +
        "/versions/" +
        MODEL_VERSION_ID +
        "/outputs",
      requestOptions
    );

    const data = await response.json();

    displayFaceBox(calcFaceLocation(data));
  } catch (error) {
    console.log("error", error);
  }
};
