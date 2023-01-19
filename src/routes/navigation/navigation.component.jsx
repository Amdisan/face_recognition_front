import { Fragment } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Logo from "../../components/logo/logo.component";

import "./navigation.styles.css";

const Navigation = ({ appState, initialState, setAppState }) => {
  const navigate = useNavigate();

  return (
    <Fragment>
      <nav className="nav_container">
        {appState.isSignedIn ? (
          <Fragment>
            <p>{`Hi, ${appState.user.name}`}</p>
            <p
              onClick={() => {
                navigate("/");
                setAppState({ ...initialState });
              }}
            >
              Sign Out
            </p>
          </Fragment>
        ) : (
          <Fragment>
            <p
              onClick={() => {
                navigate("/");
              }}
            >
              Sign In
            </p>
            <p
              onClick={() => {
                navigate("register");
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
