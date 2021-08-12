import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./EventRow.scss";
import { useState, useEffect } from "react";
import runtimeEnv from "@mars/heroku-js-runtime-env";

const env = runtimeEnv();

export const EventRow = (props) => {
  const [events, setEvents] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await fetch(env.REACT_APP_BACKEND_URL + "/restaurants", {
        method: "GET",
      });
      const data = await response.json();
      console.log(data.events);
      setEvents(data.events);
    })();
  }, []);

  return (
    <div>
      {events ? (
        events.map((event) => {
          return (
            <div
              key={event.eventID}
              className="container-fluid d-flex justify-content-around listingRow"
            >
              <div className="row d-flex justify-content-between">
                <div className="col-lg-4">
                  <img
                    className="listImg"
                    src={props.image}
                    alt="dinner table"
                  />
                </div>
                <div className="col-lg-6">
                  <h4>{event.title}</h4>
                  <p>{event.description}</p>
                  <p className="text-center">{event.date}</p>
                </div>
                <div className="col-lg-2 text-end">
                  <Link to="/event/:eventid" id="busLink">
                    More Information <Icon icon={faCaretUp} />
                  </Link>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <div>
          <p>Loading...</p>
        </div>
      )}
    </div>
  );
};
