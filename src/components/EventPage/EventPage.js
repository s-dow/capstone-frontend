import "./EventPage.scss";
import eventImage from "../assets/images/slide3.jpg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { faLink, faShare } from "@fortawesome/free-solid-svg-icons";
import {
  faClock,
  faCalendar,
  faCheckCircle,
  faHeart,
} from "@fortawesome/free-regular-svg-icons";
// import {
//   EmailShareButton,
//   FacebookShareButton,
//   TwitterShareButton,
// } from "react-share";
// import { EmailIcon, FacebookIcon, TwitterIcon } from "react-share";

export const EventPage = (props) => {
  // const shareClicked = (props) => {
  //   return (
  //     <FacebookShareButton
  //       url={"http://www.google.com"}
  //       quote={"Hello Syr"}
  //       hashtag="#hellosyr"
  //     >
  //       {/* <FacebookIcon size={36} /> */}
  //     </FacebookShareButton>
  //   );
  // };

  return (
    <main className="content">
      <div className="mainContent container-fluid d-flex justify-content-around flex-wrap">
        <section className="feature col-lg-4 leftSide">
          <img
            className="featureImg img-fluid rounded"
            src={eventImage}
            alt="dinner plate with food"
          />

          <div className="dateTimeDetails">
            <div className="row dateInfo">
              <div className="col-3">
                <div className="icon">
                  <Icon icon={faCalendar} />
                </div>
              </div>
              <div className="col">
                <div className="date">Monday, May 3rd 2021</div>
              </div>
            </div>
            <div className="row timeInfo">
              <div className="col-3">
                <div className="icon">
                  <Icon icon={faClock} />
                </div>
              </div>
              <div className="col">
                <div className="time">8:00 AM - 9:00AM</div>
              </div>
            </div>
            <div className="row businessInfo">
              <div className="col-3">
                <div className="icon">
                  <Icon icon={faLink} />
                </div>
              </div>
              <div className="col">
                <div className="businessLink">
                  <Link to="www.syracuse.com" id="busLink">
                    Visit SyracuseEvent.com!
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="userInt">
            <div className="row">
              <div className="col text-center">
                <button className="userIntButton favorite">
                  <Icon icon={faHeart} /> &nbsp;&nbsp;Add to Favorites
                </button>
              </div>
            </div>
            <div className="col text-center">
              <button className="userIntButton rsvp">
                <Icon icon={faCheckCircle} /> &nbsp;&nbsp;Attending
              </button>
            </div>
            <div className="col text-center">
              <button className="userIntButton share">
                <Icon icon={faShare} /> &nbsp;&nbsp;Share with a Friend
              </button>
            </div>
          </div>
        </section>
        <section className="productInfo col-lg-4">
          <div className="rightSide">
            <h1 className="eventName">Event Name</h1>
            <h4>Business Name</h4>

            <div className="actionRow d-flex justify-content-between align-items-center"></div>
            <div className="description">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                asperiores veritatis, minus facilis itaque quod neque quasi sint
                est nobis officiis nemo architecto perspiciatis amet beatae
                molestiae magni deleniti provident.
              </p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Explicabo sequi et ea voluptates totam cumque magnam enim eius
                ut quam. Rem quas consectetur amet explicabo autem quam!
                Voluptatum, nihil quibusdam.
              </p>
            </div>
          </div>
          <div className="map-responsive">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2915.5917256446905!2d-76.15133198440972!3d43.05002097914671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d9f3ba261954d5%3A0x4cc7a48f9c974ef9!2sSyracuse%20City%20Hall!5e0!3m2!1sen!2sus!4v1619917692428!5m2!1sen!2sus"
              width="400"
              height="300"
              style={{ border: "0" }}
              allowfullscreen=""
              title="City Hall Map"
            ></iframe>
          </div>
        </section>
      </div>
    </main>
  );
};
