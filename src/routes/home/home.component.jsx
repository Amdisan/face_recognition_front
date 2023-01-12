import { useEffect, useState, useRef, Fragment } from "react";

import { clarifyFetch } from "../../utility/clarify";

import ImageLinkForm from "../../components/imageLinkForm/imageLinkForm.component";
import FaceRecognition from "../../components/faceRecognition/faceRecognition.component";
import Rank from "../../components/rank/rank.component";

const Home = () => {
  const [input, setInput] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [box, setBox] = useState({});

  const imgRef = useRef(null);

  const handleInputChange = (event) => {
    setInput(() => event.target.value);
  };

  const calcFaceLocation = (data) => {
    const clarifyFace =
      data.outputs[0].data.regions[0].region_info.bounding_box;
    const width = Number(imgRef.current.width);
    const height = Number(imgRef.current.height);

    //console.log(width, height);
    //console.log(clarifyFace);

    return {
      topRow: clarifyFace.left_col * height,
      leftCol: clarifyFace.left_col * width,
      bottomRow: height - clarifyFace.bottom_row * height,
      rightCol: width - clarifyFace.right_col * width,
    };
  };

  const displayFaceBox = (box) => {
    setBox(box);
    //console.log(box);
  };

  const handleBtnSubmit = (event) => {
    event.preventDefault();
    setImgUrl(input);
  };

  useEffect(() => {
    /*if (imgUrl && imgUrl.includes("jpg")) {
      clarifyFetch(imgUrl, displayFaceBox, calcFaceLocation);
      console.log("fetch");
    }*/
  }, [imgUrl]);

  return (
    <Fragment>
      <Rank />
      <ImageLinkForm
        onInputChange={handleInputChange}
        onBtnSubmit={handleBtnSubmit}
        input={input}
      />
      <FaceRecognition
        imgUrl={imgUrl}
        imgRef={(el) => (imgRef.current = el)}
        box={box}
      />
    </Fragment>
  );
};

export default Home;
