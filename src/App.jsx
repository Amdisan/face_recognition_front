import { Fragment, useState } from "react";

import { Route, Routes } from "react-router-dom";

import ParticlesBg from "particles-bg";

import Navigation from "./routes/navigation/navigation.component";
import SignIn from "./components/signIn/signIn.component";
import Home from "./routes/home/home.component";
import Register from "./components/register/register.component";

const App = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  return (
    <Fragment>
      <ParticlesBg bg={true} type={"cobweb"} color={"#ffffff"} num={300} />
      <Routes>
        <Route
          path="/"
          element={
            <Navigation isSignedIn={isSignedIn} setIsSignedIn={setIsSignedIn} />
          }
        >
          <Route path="home" element={<Home />} />
          <Route index element={<SignIn setIsSignedIn={setIsSignedIn} />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </Fragment>
  );
};

export default App;
