import "./imageLinkForm.styles.css";

const ImageLinkForm = ({ onInputChange, onBtnSubmit, input }) => {
  return (
    <div className="Im_container">
      <p className="imageLinkForm_p">
        {"This Magic Brain will detect faces in your pictures."}
      </p>
      <div className="imageLinkForm_container">
        <input
          type="text"
          value={input}
          className="imageLinkForm_input"
          onChange={onInputChange}
        />
        <button
          type="submit"
          className="imageLinkForm_btn"
          onClick={onBtnSubmit}
        >
          Detect
        </button>
      </div>
    </div>
  );
};

export default ImageLinkForm;
