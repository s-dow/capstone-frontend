import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { faCaretUp } from "@fortawesome/free-solid-svg-icons";

import "./LiveMusic.scss";
import { Pagination } from "../Pagination/Pagination";
import musicImg from "../assets/images/music.jpg";
import { useState, useEffect } from "react";
import runtimeEnv from "@mars/heroku-js-runtime-env";
const dateFormat = require("dateformat");

const env = runtimeEnv();

export const LiveMusic = () => {
  const [music, setMusic] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [eventsPerPage] = useState(6);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const response = await fetch(env.REACT_APP_BACKEND_URL + "/livemusic", {
        method: "GET",
      });
      const data = await response.json();
      setMusic(data.music);
      setLoading(false);
    })();
  }, []);

  const indexOfLastEvent = currentPage * eventsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
  const currentMusic = music.slice(indexOfFirstEvent, indexOfLastEvent);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <div>
        {currentMusic ? (
          currentMusic.map((event) => {
            return (
              <div
                key={event.musicID}
                className="container-fluid justify-content-between listingRow"
              >
                <div className="row">
                  <div className="col-xs-1 col-md-3">
                    <img
                      className="listImg"
                      src={musicImg}
                      alt="dinner table"
                    />
                  </div>
                  <div className="col-xs-4 col-md-7">
                    <h4 className="eventTitle">{event.title}</h4>

                    <p className="text-center">
                      {dateFormat(event.date, "fullDate")}
                    </p>
                    <p className="text-center">{event.time}</p>
                    <p className="text-center">{event.location}</p>
                  </div>
                  <div className="col-xs-1 col-md-2">
                    <button className="siteLink">
                      <a href={event.link} className="show-link">
                        More Information <Icon icon={faCaretUp} />
                      </a>
                    </button>
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
        totalEvents={music.length}
      />
    </div>
  );
};
