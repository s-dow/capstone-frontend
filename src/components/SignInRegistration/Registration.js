import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faUser, faLock } from "@fortawesome/free-solid-svg-icons";

import "./Registration.scss";
import runtimeEnv from "@mars/heroku-js-runtime-env";

const env = runtimeEnv();

export const Registration = (props) => {
  const signUp = async (event) => {
    event.preventDefault();
    const email = event.target.emailReg.value;
    const password = event.target.passwordReg.value;
    const name = event.target.nameReg.value;
    const confirmPassword = event.target.confirmPassword.value;

    if (password !== confirmPassword) {
      alert("Passwords do not match. Please re-enter your password.");
    } else {
      const response = await fetch(env.REACT_APP_BACKEND_URL + "/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          email,
          name,
          password,
        },
      });
      const data = await response.json();
      for (const formField of event.target) {
        formField.value = "";
      }

      if (data.error) {
        alert(data.error);
      } else if (data.success) {
        window.location = "/account";
      }
    }
  };

  return (
    <section className="col-lg-4 register rightSide">
      <h2 className="accountTitle d-flex justify-content-center">Register</h2>
      <form id="registerForm" onSubmit={signUp}>
        <div className="form-group row">
          <label htmlFor="inputName3" className="col-sm-2 col-form-label">
            <Icon icon={faUser} />
          </label>
          <div className="col-sm-8">
            <input
              type="name"
              className="form-control"
              id="nameReg"
              placeholder="Name"
              required
            />
            <small></small>
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
            <Icon icon={faEnvelope} />
          </label>
          <div className="col-sm-8">
            <input
              type="email"
              className="form-control"
              id="emailReg"
              placeholder="Email"
              required
            />
            <small></small>
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">
            <Icon icon={faLock} />
          </label>
          <div className="col-sm-8">
            <input
              type="password"
              className="form-control"
              id="passwordReg"
              placeholder="Password"
              required
            />
            <small></small>
          </div>
        </div>
        <div className="form-group row">
          <label
            htmlFor="inputConfirmPassword3"
            className="col-sm-2 col-form-label"
          ></label>
          <div className="col-sm-8">
            <input
              type="password"
              className="form-control"
              placeholder="Confirm Password"
              id="confirmPassword"
              required
            />
            <small></small>
          </div>
        </div>
        <div className="form-group row">
          <div className="col-sm-2"></div>
          <div className="col-sm-10">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" />
              <label className="form-check-label" htmlFor="gridCheck1">
                Send me emails!
              </label>
            </div>
          </div>
        </div>
        <div className="form-group row">
          <div className="col-sm-12 d-flex justify-content-center">
            <button type="submit" className="btn btnCustom">
              Register
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};
