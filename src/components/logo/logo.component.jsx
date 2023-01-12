import Tilt from "react-parallax-tilt";

import brain from "../../assets/brain-6191.png";

import "./logo.styles.css";

const Logo = () => {
  return (
    <div className="logo_container">
      <Tilt>
        <div className="tilt_inner">
          <img src={brain} alt="brain" />
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
