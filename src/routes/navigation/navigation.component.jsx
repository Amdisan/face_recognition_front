import { Fragment } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Logo from "../../components/logo/logo.component";

import "./navigation.styles.css";

const Navigation = ({ isSignedIn, setIsSignedIn }) => {
  const navigate = useNavigate();
  //console.log(isSignedIn);
  return (
    <Fragment>
      <nav className="nav_container">
        {isSignedIn ? (
          <p
            onClick={() => {
              navigate("/");
              setIsSignedIn((prev) => (prev = false));
            }}
          >
            Sign Out
          </p>
        ) : (
          <Fragment>
            <p
              onClick={() => {
                navigate("/");
                setIsSignedIn((prev) => (prev = false));
              }}
            >
              Sign In
            </p>
            <p
              onClick={() => {
                navigate("register");
                setIsSignedIn((prev) => (prev = false));
              }}
            >
              Register
            </p>
          </Fragment>
        )}
      </nav>
      <Logo />
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
