import { Fragment, useState } from "react";

import { Route, Routes } from "react-router-dom";

import ParticlesBg from "particles-bg";

import Navigation from "./routes/navigation/navigation.component";
import SignIn from "./components/signIn/signIn.component";
import Home from "./routes/home/home.component";
import Register from "./components/register/register.component";

const initialState = {
  input: "",
  imgUrl: "",
  box: {},
  isSignedIn: false,
  user: {},
};

const App = () => {
  const [appState, setAppState] = useState(initialState);

  return (
    <Fragment>
      <ParticlesBg bg={true} type={"cobweb"} color={"#ffffff"} num={300} />
      <Routes>
        <Route
          path="/"
          element={
            <Navigation
              appState={appState}
              initialState={initialState}
              setAppState={setAppState}
            />
          }
        >
          {appState.isSignedIn && (
            <Route
              path="home"
              element={<Home appState={appState} setAppState={setAppState} />}
            />
          )}
          <Route
            index
            element={<SignIn appState={appState} setAppState={setAppState} />}
          />
          <Route
            path="register"
            element={<Register appState={appState} setAppState={setAppState} />}
          />
        </Route>
      </Routes>
    </Fragment>
  );
};

export default App;
