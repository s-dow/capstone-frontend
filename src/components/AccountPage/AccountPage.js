import DefaultUser from "../assets/images/DefaultUser.jpg";
import "./AccountPage.scss";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faHeart,
  faUser,
} from "@fortawesome/free-regular-svg-icons";
import { faCog, faSignOutAlt, faPen } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { UserInfo } from "./UserInfo";

export const AccountPage = (props) => {
  return (
    <div className="container-fluid account">
      <div className="row justify-content-around">
        <section className="accountOptions">
          <div className="col">
            <div className="row text-center">
              <h3 className="accountTitle">My Account</h3>
            </div>
            <div className="row">
              <ul className="userOptionList">
                <li className="listItem">
                  <span>
                    <Link className="nav-acct myInfo active" to="/account">
                      <Icon className="accountNavIcon" icon={faUser} />
                      My Information
                    </Link>
                  </span>
                </li>
                <li className="listItem">
                  <span>
                    <Link className="nav-acct" to="/account/favorites">
                      <Icon className="accountNavIcon" icon={faHeart} />
                      Favorites
                    </Link>
                  </span>
                </li>
                <li className="listItem">
                  <span>
                    <Link className="nav-acct" to="/account/attending">
                      <Icon className="accountNavIcon" icon={faCheckCircle} />
                      Attending
                    </Link>
                  </span>
                </li>
                <li className="listItem">
                  <span>
                    <Link className="nav-acct" to="/account/settings">
                      <Icon className="accountNavIcon" icon={faCog} />
                      Settings
                    </Link>
                  </span>
                </li>
              </ul>
            </div>
            <div className="row justify-content-center">
              <button
                className="logOut"
                onClick={() => {
                  delete localStorage.password;
                  delete localStorage.email;
                  window.location = "/";
                }}
              >
                <Icon icon={faSignOutAlt} />
                &nbsp;&nbsp;Log Out
              </button>
            </div>
          </div>
        </section>
        <section className="mainAcct">
          <div className="col">
            <div className="row userInfo">
              <div className="col-2">
                <div className="imgContainer">
                  <img
                    src={DefaultUser}
                    alt="default user"
                    className="rounded-circle userImg"
                  ></img>
                  <a href="/">
                    <Icon className="editButton" icon={faPen}></Icon>
                  </a>
                </div>
              </div>
              <div className="col-9">
                <UserInfo />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};