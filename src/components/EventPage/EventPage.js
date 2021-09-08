import "./EventPage.scss";
import eventImage from "../assets/images/slide3.jpg";
import bikeImg from "../assets/images/bike.jpg";
import museumImg from "../assets/images/museum.jpg";

import { Link } from "react-router-dom";
import { Popup } from "./Popup";
import { useState, useEffect } from "react";
import runtimeEnv from "@mars/heroku-js-runtime-env";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { faLink, faShare } from "@fortawesome/free-solid-svg-icons";
import {
  faClock,
  faCalendar,
  faCheckCircle,
  faHeart,
} from "@fortawesome/free-regular-svg-icons";
import {
  EmailShareButton,
  FacebookShareButton,
  TwitterShareButton,
  RedditShareButton,
} from "react-share";
import { EmailIcon, FacebookIcon, TwitterIcon, RedditIcon } from "react-share";

const env = runtimeEnv();
const dateFormat = require("dateformat");
export const EventPage = (props) => {
  const [events, setEvents] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    (async () => {
      const path = window.location.pathname;
      console.log(path);
      const response = await fetch(env.REACT_APP_BACKEND_URL + `${path}`, {
        method: "GET",
      });
      const data = await response.json();
      setEvents(data.events);
    })();
  }, []);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const shareClicked = (props) => {
    const path = window.location.pathname;

    return (
      <div>
        <TwitterShareButton
          url={`hellosyr.com${path}`}
          quote={"Check this out!"}
          hashtag="#hellosyr"
        >
          <TwitterIcon className="shareIcon" size={36} />
        </TwitterShareButton>
        <FacebookShareButton
          url={`hellosyr.com${path}`}
          quote={"Check this out!"}
          hashtag="#hellosyr"
        >
          <FacebookIcon className="shareIcon" size={36} />
        </FacebookShareButton>
        <EmailShareButton
          url={`hellosyr.com${path}`}
          quote={"Check this out!"}
          hashtag="#hellosyr"
        >
          <EmailIcon className="shareIcon" size={36} />
        </EmailShareButton>
        <RedditShareButton
          url={`hellosyr.com${path}`}
          quote={"Check this out!"}
          hashtag="#hellosyr"
        >
          <RedditIcon className="shareIcon" size={36} />
        </RedditShareButton>
      </div>
    );
  };

  return (
    <main className="content">
      <div className="mainContent container-fluid d-flex justify-content-around flex-wrap">
        <section className="feature col-xs-12 col-md-6 leftSide">
          {events.tag === "bike" ? (
            <img className="rowImg" src={bikeImg}></img>
          ) : events.tag === "museum" ? (
            <img className="rowImg" src={museumImg}></img>
          ) : (
            <img className="rowImg" src={eventImage}></img>
          )}
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
              <button onClick={togglePopup} className="userIntButton share">
                <Icon icon={faShare} /> &nbsp;&nbsp;Share
              </button>
              {isOpen && (
                <Popup
                  content={<>{shareClicked()}</>}
                  handleClose={togglePopup}
                />
              )}
            </div>
          </div>
        </section>
        <section className="productInfo col-xs-12 col-md-5">
          <div className="rightSide">
            <h1 className="eventName">{events.title}</h1>

            <div className="actionRow d-flex justify-content-between align-items-center"></div>
            <div className="description">
              <p>{events.description}</p>
            </div>
            <div className="dateTimeDetails">
              <div className="row dateInfo">
                <div className="col-3">
                  <div className="icon">
                    <Icon icon={faCalendar} />
                  </div>
                </div>
                <div className="col">
                  <div className="date">
                    {dateFormat(events.date, "fullDate")}
                  </div>
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
                      More Information
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div id="mapMap"></div>
          {/* <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2915.5917256446905!2d-70.15133198440972!3d43.05002097914671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d9f3ba261954d5%3A0x4cc7a48f9c974ef9!2sSyracuse%20City%20Hall!5e0!3m2!1sen!2sus!4v1619917692428!5m2!1sen!2sus"
              width="400"
              height="300"
              style={{ border: "0" }}
              allowfullscreen=""
              title="City Hall Map"
            ></iframe> */}
        </section>
      </div>
    </main>
  );
};
