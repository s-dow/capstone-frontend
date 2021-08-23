import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import listingImage from "../assets/images/dining.jpeg";
import { Pagination } from "../Pagination/Pagination";
import "./EventRow.scss";
import { useState, useEffect } from "react";
import runtimeEnv from "@mars/heroku-js-runtime-env";
const dateFormat = require("dateformat");

const env = runtimeEnv();

export const EventRow = (props) => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [eventsPerPage] = useState(5);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const response = await fetch(env.REACT_APP_BACKEND_URL + "/events", {
        method: "GET",
      });
      const data = await response.json();
      setEvents(data.events);
      setLoading(false);
    })();
  }, []);

  const indexOfLastEvent = currentPage * eventsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
  const currentEvents = events.slice(indexOfFirstEvent, indexOfLastEvent);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <div>
      <div>
        {currentEvents ? (
          currentEvents.map((event) => {
            return (
              <div
                key={event.eventID}
                className="container-fluid d-flex justify-content-around listingRow"
              >
                <div className="row d-flex justify-content-between">
                  <div className="col-lg-4">
                    <img
                      className="listImg"
                      src={listingImage}
                      alt="dinner table"
                    />
                  </div>
                  <div className="col-lg-6">
                    <h4>{event.title}</h4>
                    <p>{event.description}</p>
                    <p className="text-center">
                      {dateFormat(event.date, "fullDate")}
                    </p>
                  </div>
                  <div className="col-lg-2 text-end">
                    <Link to={`/event/${event.eventID}`} id="busLink">
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
      <Pagination
        paginate={paginate}
        eventsPerPage={eventsPerPage}
        totalEvents={events.length}
      />
    </div>
  );
};
