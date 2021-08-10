import "./Restaurants.scss";
import eventImage from "../assets/images/slide3.jpg";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";
import runtimeEnv from "@mars/heroku-js-runtime-env";

const env = runtimeEnv();

export const Restaurants = () => {
  const [restaurants, setRestaurants] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await fetch(env.REACT_APP_BACKEND_URL + "/restaurants", {
        method: "GET",
        headers: {
          email: localStorage.email,
          password: localStorage.password,
        },
      });
      const data = await response.json();
      setRestaurants(data.restaurants);
    })();
  }, []);

  return (
    <div>
      <div
        className="container-fluid justify-content-center"
        style={{ display: "flex", flexWrap: "wrap" }}
      >
        {restaurants ? (
          restaurants.map((restaurant) => {
            return (
              <div
                className="card"
                style={{ margin: "10px" }}
                key={restaurant.restaurantID}
              >
                <img src={eventImage} className="card-img-top" alt="..."></img>
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
                      Visit the {restaurant.name} Website!
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
      <nav aria-label="Page navigation">
        <ul className="pagination justify-content-end">
          <li className="page-item">
            <Link className="page-link" to="/" tabIndex="-1">
              Previous
            </Link>
          </li>
          <li className="page-item">
            <Link className="page-link" to="/">
              1
            </Link>
          </li>
          <li className="page-item">
            <Link className="page-link" to="/">
              2
            </Link>
          </li>
          <li className="page-item">
            <Link className="page-link" to="/">
              3
            </Link>
          </li>
          <li className="page-item">
            <Link className="page-link" to="/">
              Next
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
