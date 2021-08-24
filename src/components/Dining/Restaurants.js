import "./Restaurants.scss";
import eventImage from "../assets/images/slide3.jpg";
import xoImg from "../assets/images/xo.jpg";
import wsbImg from "../assets/images/wsb.jpg";
import evergreenImg from "../assets/images/evergreen.jpg";
import edenImg from "../assets/images/eden.jpg";
import sakanayaImg from "../assets/images/sakanaya.jpg";
import { Pagination } from "../Pagination/Pagination";
import { useState, useEffect } from "react";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";
import runtimeEnv from "@mars/heroku-js-runtime-env";

const env = runtimeEnv();

export const Restaurants = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [eventsPerPage] = useState(9);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const response = await fetch(env.REACT_APP_BACKEND_URL + "/restaurants", {
        method: "GET",
        headers: {
          email: localStorage.email,
          password: localStorage.password,
        },
      });
      const data = await response.json();
      setRestaurants(data.restaurants);
      setLoading(false);
    })();
  }, []);

  const indexOfLastEvent = currentPage * eventsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
  const currentRestaurants = restaurants.slice(
    indexOfFirstEvent,
    indexOfLastEvent
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <div
        className="container-fluid justify-content-center"
        style={{ display: "flex", flexWrap: "wrap" }}
      >
        {currentRestaurants ? (
          currentRestaurants.map((restaurant) => {
            return (
              <div
                className="card"
                style={{ margin: "10px", minWidth: "150px" }}
                key={restaurant.restaurantID}
              >
                {restaurant.name === "Water Street Bagel Co." ? (
                  <img className="card-img-top" src={wsbImg}></img>
                ) : restaurant.name === "XO Taco" ? (
                  <img className="card-img-top" src={xoImg}></img>
                ) : restaurant.name === "The Evergreen" ? (
                  <img className="card-img-top" src={evergreenImg}></img>
                ) : restaurant.name === "Sakana-Ya Sushi Bar" ? (
                  <img className="card-img-top" src={sakanayaImg}></img>
                ) : restaurant.name === "Eden" ? (
                  <img className="card-img-top" src={edenImg}></img>
                ) : (
                  <img className="card-img-top" src={eventImage}></img>
                )}

                <div className="card-body">
                  <h4 className="card-title">{restaurant.name}</h4>
                  <p className="card-text">{restaurant.description}</p>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item" style={{ fontSize: "13px" }}>
                    {restaurant.hours}
                  </li>
                  <li className="list-group-item" style={{ fontSize: "13px" }}>
                    {restaurant.phoneNumber}
                  </li>
                  <li className="list-group-item" style={{ fontSize: "13px" }}>
                    {restaurant.address1}, {restaurant.city}, {restaurant.state}{" "}
                    {restaurant.zipCode}
                  </li>
                  {restaurant.outdoorDining ? (
                    <li
                      className="list-group-item"
                      style={{ fontSize: "13px" }}
                    >
                      <Icon
                        icon={faCheckCircle}
                        style={{ marginRight: "5px" }}
                      />
                      <span>Outdoor Dining </span>
                    </li>
                  ) : (
                    ""
                  )}
                </ul>
                <div className="card-body text-center">
                  <button className="siteLink">
                    <a href={restaurant.link} className="card-link">
                      Visit {restaurant.name}!
                    </a>
                  </button>
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
        totalEvents={restaurants.length}
      />
    </div>
  );
};
