import { useEffect, useRef, Fragment } from "react";

import { clarifyFetch } from "../../utility/clarify";

import ImageLinkForm from "../../components/imageLinkForm/imageLinkForm.component";
import FaceRecognition from "../../components/faceRecognition/faceRecognition.component";
import Rank from "../../components/rank/rank.component";

const Home = ({ appState, setAppState }) => {
  console.log("home");
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
      const fetchImgBox = clarifyFetch(appState.imgUrl, imgRef);

      const fetchRank = fetch("http://localhost:3001/image", {
        method: "put",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: appState.user.id,
        }),
      }).then((res) => res.json());

      Promise.all([fetchImgBox, fetchRank])
        .then(([box, rank]) => {
          setAppState({
            ...appState,
            box: box,
            user: { ...appState.user, entries: rank },
          });
        })
        .catch((err) => {
          throw err;
        });
      // console.log("fetch server clarify");
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
