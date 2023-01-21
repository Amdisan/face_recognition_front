import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { apiServer } from "../../urls/urls";

import "./signIn.styles.css";

const SignIn = ({ appState, setAppState }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(`${apiServer}signin`, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.id) {
          navigate("/home");
          setAppState({ ...appState, isSignedIn: true, user: data });
        }
      })
      .catch((err) => {
        throw err;
      });
  };

  return (
    <article className="mw6 center br3 pa3 pa4-ns mv3 ba b--black-10 shadow-5">
      <main className="pa4 black-80">
        <form className="measure center">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f1 fw6 ph0 mh0 center">Sign In</legend>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="email-address">
                Email
              </label>
              <input
                onChange={handleEmailChange}
                value={email}
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="email"
                name="email-address"
                id="email-address"
              />
            </div>
            <div className="mv3">
              <label className="db fw6 lh-copy f6" htmlFor="password">
                Password
              </label>
              <input
                onChange={handlePasswordChange}
                value={password}
                className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="password"
                name="password"
                id="password"
              />
            </div>
          </fieldset>
          <div className="">
            <input
              className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
              type="submit"
              value="Sign in"
              onClick={handleSubmit}
            />
          </div>
          <div className="lh-copy mt3">
            <a
              href="#0"
              className="f6 link dim black db"
              onClick={() => navigate("register")}
            >
              Register
            </a>
          </div>
        </form>
      </main>
    </article>
  );
};

export default SignIn;
