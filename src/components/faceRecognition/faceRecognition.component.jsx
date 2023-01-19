import "./faceRecognition.styles.css";

const FaceRecognition = ({ imgUrl, imgRef, box }) => {
  const { topRow, leftCol, bottomRow, rightCol } = box;

  return (
    <div className="face_recognition_container">
      <div className="img_container">
        <img src={imgUrl} ref={imgRef} alt="" />
        <div
          className="bounding-box"
          style={{
            top: topRow,
            left: leftCol,
            bottom: bottomRow,
            right: rightCol,
          }}
        ></div>
      </div>
    </div>
  );
};

export default FaceRecognition;
