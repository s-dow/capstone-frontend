import "./Footer.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faUser } from "@fortawesome/free-regular-svg-icons";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export const Footer = (props) => {
  return (
    <footer>
      <div className="container-fluid">
        <div className="row justify-content-around">
          <div className="col-md-6 container-fluid">
            <div className="row">
              <h5 className="regFont" style={{ marginBottom: "0px" }}>
                Hello
              </h5>
              <h5 className="boldFont">Syracuse</h5>
              <hr style={{ width: "70%", height: "4px" }}></hr>
              <div className="row">
                <div className="col-sm-5">
                  <div className="nav-item row">
                    <Link
                      to="/"
                      style={{ fontWeight: "bold", marginBottom: "20px" }}
                      className="nav-links"
                    >
                      Home
                    </Link>
                  </div>
                  <div className="nav-item row">
                    <Link
                      to="/events"
                      style={{ fontWeight: "bold" }}
                      className="nav-links"
                    >
                      Events
                    </Link>
                  </div>
                  <div className="nav-item row">
                    <Link to="/events" className="nav-links">
                      Calendar
                    </Link>
                  </div>
                  <div className="nav-item row">
                    <Link to="/events" className="nav-links">
                      Food Trucks
                    </Link>
                  </div>
                  <div className="nav-item row">
                    <Link
                      to="/events"
                      style={{ marginBottom: "20px" }}
                      className="nav-links"
                    >
                      Past Events
                    </Link>
                  </div>
                  <div className="nav-item row">
                    <Link
                      to="/about"
                      style={{ fontWeight: "bold", marginBottom: "20px" }}
                      className="nav-links"
                    >
                      About Us
                    </Link>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="nav-item row">
                    <Link
                      to="/"
                      style={{ fontWeight: "bold", marginBottom: "20px" }}
                      className="nav-links"
                    >
                      My Account
                    </Link>
                  </div>
                  <div className="nav-item row">
                    <Link to="/" className="nav-links">
                      Privacy Policy
                    </Link>
                  </div>
                  <div className="nav-item row">
                    <Link to="/" className="nav-links">
                      Terms and Conditions
                    </Link>
                  </div>
                </div>
              </div>
              <hr style={{ width: "70%", height: "4px" }}></hr>
            </div>
            <div className="row emailFooter">
              <div className="col">
                <span>
                  <Icon className="emailIcon" icon={faEnvelope} />
                  hello@hellosyr.com
                </span>
              </div>
              <div className="col">
                <span>
                  <Icon
                    icon={faInstagram}
                    style={{ marginRight: "15px", fontSize: "16px" }}
                  />
                  <Icon
                    icon={faFacebook}
                    style={{ marginRight: "15px", fontSize: "16px" }}
                  />
                  <Icon icon={faTwitter} style={{ fontSize: "16px" }} />
                </span>
              </div>
            </div>
          </div>
          <div className="col-md-6 contactFormFooter">
            <section>
              <h2 className="boxTitle d-flex justify-content-center">
                Get in Touch
              </h2>
              <p className=" d-flex justify-content-center submitMessage">
                Submit an event or send over your thoughts.
              </p>
              <form id="contactForm2">
                <div className="form-group row justify-content-center">
                  <label
                    htmlFor="inputName3"
                    className="col-sm-1 col-form-label"
                  >
                    <Icon icon={faUser} />
                  </label>
                  <div className="col-sm-9">
                    <input
                      type="name"
                      className="form-control"
                      id="inputName3"
                      placeholder="Name"
                    />
                    <small></small>
                  </div>
                </div>
                <div className="form-group row justify-content-center">
                  <label
                    htmlFor="inputEmail3"
                    className="col-sm-1 col-form-label"
                  >
                    <Icon icon={faEnvelope} />
                  </label>
                  <div className="col-sm-9">
                    <input
                      type="email"
                      className="form-control"
                      id="inputEmail3"
                      placeholder="Email"
                    />
                    <small></small>
                  </div>
                </div>
                <div className="form-group row justify-content-around">
                  <label htmlFor="textArea2" className="col-sm-1">
                    <Icon className="penIcon" icon={faPen} />
                  </label>
                  <textarea
                    className="form-control textArea2 col-sm-10"
                    placeholder="Write a message!"
                    rows="2"
                  ></textarea>
                </div>
                <div className="form-group row">
                  <div className="col-sm-12 d-flex justify-content-center">
                    <button type="submit" className="btn btnCustom">
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </section>
          </div>
        </div>
      </div>
    </footer>
  );
};
