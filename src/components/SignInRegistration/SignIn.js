import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import "./SignIn.scss";
import runtimeEnv from "@mars/heroku-js-runtime-env";

const env = runtimeEnv();

export const SignIn = (props) => {
  const logIn = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    const response = await fetch(env.REACT_APP_BACKEND_URL + "/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        email,
        password,
      },
    });

    const data = await response.json();

    if (data.error) {
      alert(data.error);
    } else if (data.success) {
      localStorage.email = email;
      localStorage.password = password;
      window.location = "/account";
    }
  };

  return (
    <section className="col-lg-4 signIn leftSide">
      <div className="row">
        <h2 className="accountTitle d-flex justify-content-center">Sign In</h2>
      </div>
      <form id="signUpForm" onSubmit={logIn}>
        <div className="form-group row">
          <label for="inputEmail2" className="col-sm-2 col-form-label">
            <Icon icon={faEnvelope} />
          </label>
          <div className="col-sm-8">
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Email"
              required
            />
            <small></small>
          </div>
        </div>
        <div className="form-group row">
          <label for="inputPassword2" className="col-sm-2 col-form-label">
            <Icon icon={faLock} />
          </label>
          <div className="col-sm-8">
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Password"
              required
            />
            <small></small>
          </div>
        </div>
        <div className="form-group row">
          <div className="col-sm-2"></div>
          <div className="col-sm-10">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="gridCheck1"
              />
              <label className="form-check-label" for="gridCheck1">
                Remember Me
              </label>
            </div>
          </div>
        </div>
        <div className="form-group row">
          <div className="form-group row">
            <div className="col-sm-12 d-flex justify-content-center">
              <button className="btn btnCustom signInBtn" type="submit">
                Sign In
              </button>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
};
