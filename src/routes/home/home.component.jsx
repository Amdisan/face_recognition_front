import { useEffect, useRef, Fragment } from "react";

import { apiServer } from "../../urls/urls";

import ImageLinkForm from "../../components/imageLinkForm/imageLinkForm.component";
import FaceRecognition from "../../components/faceRecognition/faceRecognition.component";
import Rank from "../../components/rank/rank.component";

const Home = ({ appState, setAppState }) => {
  const imgRef = useRef(null);
  const handleInputChange = (event) => {
    setAppState({ ...appState, input: event.target.value });
  };

  const handleBtnSubmit = (event) => {
    event.preventDefault();
    setAppState({ ...appState, imgUrl: appState.input });
  };

  useEffect(() => {
    if (appState.imgUrl && appState.imgUrl.includes("jpg")) {
      fetch(`${apiServer}image`, {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: appState.user.id,
          imgUrl: appState.imgUrl,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          const [imgBox, entries] = data;

          const width = Number(imgRef.current.width);
          const height = Number(imgRef.current.height);

          const box = {
            topRow: imgBox.left_col * height,
            leftCol: imgBox.left_col * width,
            bottomRow: height - imgBox.bottom_row * height,
            rightCol: width - imgBox.right_col * width,
          };

          return setAppState({
            ...appState,
            box: box,
            user: { ...appState.user, entries },
          });
        })
        .catch((err) => {
          throw err;
        });
    }
  }, [appState.imgUrl]);

  return (
    <Fragment>
      <Rank appState={appState} />
      <ImageLinkForm
        onInputChange={handleInputChange}
        onBtnSubmit={handleBtnSubmit}
        input={appState.input}
      />
      <FaceRecognition
        imgUrl={appState.imgUrl}
        imgRef={(el) => (imgRef.current = el)}
        box={appState.box}
      />
    </Fragment>
  );
};

export default Home;
