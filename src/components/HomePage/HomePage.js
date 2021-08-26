import bannerImage from "../assets/images/bannerAlt.jpg";
import skylineImg from "../assets/images/skyline.jpg";
import "./HomePage.scss";
import { faDotCircle } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";

export const HomePage = () => {
  return (
    <main className="featuredContent">
      <div className="row">
        <div className="col-xs-12 col-md-8">
          <img
            src={bannerImage}
            alt="heart of syracuse"
            className="bannerImage"
          ></img>
        </div>
        <div className="bannerText col-xs-12 col-md-4">
          <p>Hi, Syracuse.</p>
        </div>
      </div>
      <div className="row text-center splitRow">
        <hr
          style={{
            width: "100%",
            height: "4px",
            color: "rgba(76, 84, 76, 1)",
          }}
        ></hr>
        <p>
          <a className="homeLink" href="https://www.cnyhistory.org/">
            Onondaga Historical Society
          </a>
          <Icon style={{ padding: "5px" }} icon={faDotCircle}></Icon>
          <a className="homeLink" href="http://www.syrgov.net/home.aspx">
            City of Syracuse
          </a>
        </p>
        <hr
          style={{
            width: "100%",
            height: "4px",
            color: "rgba(76, 84, 76, 1)",
          }}
        ></hr>
      </div>
      <div>
        <div className="row align-items-center">
          <div className="descriptionHome col-xs-12 col-md-8">
            <p className="homeDesc">
              Hello | Syr is a website dedicated to supporting local business,
              promoting community engagement, and finding you something fun to
              do this weekend!{" "}
            </p>
          </div>
          <div className="banner2 col-xs-12 col-md-4">
            <img style={{ width: "100%" }} src={skylineImg}></img>
          </div>
        </div>
      </div>
    </main>
  );
};
