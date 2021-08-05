import bannerImage from "../assets/images/banner.JPG";
import BandB from "../assets/images/BandB.jpg";
import "./HomePage.scss";

export const HomePage = () => {
  return (
    <main>
      <div className="bannerContent">
        <div className="banner" id="banner">
          <img
            src={bannerImage}
            alt="heart of syracuse"
            className="bannerImage"
          ></img>
        </div>
      </div>
      <div className="featuredContent row">
        <div className="col text-center featureInfo">
          <h3>New In Town</h3>
          <p>Board and Bar Charcuterie</p>
          <p>
            Check it out @{" "}
            <a
              className="featuredLink"
              href="https://www.boardandbarcharcuterie.com/"
            >
              boardandbarcharcuterie.com
            </a>
          </p>
        </div>
        <div className="col text-center feature">
          <img
            src={BandB}
            alt="Board and Bar Charcuterie restaurant"
            className="BandB"
          ></img>
        </div>
      </div>
    </main>
  );
};
