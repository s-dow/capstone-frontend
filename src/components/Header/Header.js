import React from "react";
import "./Header.scss";
// import { useState } from "react";

import { Link } from "react-router-dom";
// import runtimeEnv from "@mars/heroku-js-runtime-env";

import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { faUserCircle, faGripLines } from "@fortawesome/free-solid-svg-icons";

// const env = runtimeEnv();

export const Header = (props) => {
  // const [search, setSearch] = useState("");

  // const searchEvents = async (event) => {
  //   event.preventDefault();
  //   const response = await fetch(env.REACT_APP_BACKEND_URL + "/search", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ searchQuery: search }),
  //   });
  //   const data = await response.json();
  //   // setEvents(data.events);
  // };

  return (
    <header>
      <nav className="navbar navbar-expand-lg stroke navbarColor">
        <div className="container-fluid">
          <div className="centerRow" id="mainNav">
            <div className="row titleRow">
              <div className="col-3"></div>
              <div className="col-6 text-center">
                <Link className="logo" to="/">
                  <span className="regFont">Hello</span>
                  <span className="boldFont">Syracuse</span>
                </Link>
              </div>
              <div className="col-3">
                <ul
                  d="navbarSupportedContent"
                  className="navbar-nav collapse navbar-collapse justify-content-end"
                >
                  <li className="iconRow">
                    <form
                      action="/"
                      role="search"
                      id="searchform"
                      className="search-form"
                      //onSubmit={searchEvents()}
                    >
                      <input type="submit" value="" className="search-submit" />
                      <input
                        type="search"
                        name="search"
                        //value={search}
                        className="search-text searchLogo"
                        placeholder="Search"
                        autoComplete="off"
                        //onChange={(evt) => {
                        //  setSearch(evt.target.value);
                        //}}
                      />
                    </form>
                  </li>
                  <li className="iconRow">
                    <Link className="accountLogo" to="/account">
                      <Icon icon={faUserCircle} />
                    </Link>
                    {/* {localStorage.email && localStorage.password ? (
                      <Link className="accountLogo" to="/account">
                        <Icon icon={faUserCircle} />
                      </Link>
                    ) : (
                      <Link className="accountLogo" to="/signin">
                        <Icon icon={faUserCircle} />
                      </Link>
                    )} */}
                  </li>
                </ul>
              </div>
            </div>
            <hr></hr>
            <div className="row">
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon">
                  <Icon icon={faGripLines} />
                </span>
              </button>
              <div className="col">
                <ul
                  id="navbarSupportedContent"
                  className="navbar-nav collapse navbar-collapse  mr-auto ml-auto justify-content-center"
                >
                  <li className="nav-item bottomLink mr-md-7 aboutLink">
                    <Link className="nav-link" to="/about">
                      About
                    </Link>
                  </li>
                  <li className="nav-item dropdown bottomLink mr-md-7 ml-md-7">
                    <a
                      className="nav-link"
                      href="!#"
                      id="navbarDropdown"
                      data-cy="eventNav"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Events
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a
                          className="dropdown-item"
                          data-cy="upcomingEvents"
                          href="/events"
                        >
                          Upcoming Events
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/calendar">
                          Events Calendar
                        </a>
                      </li>
                      <li>
                        <hr
                          className="dropdown-divider"
                          style={{ color: "#363636" }}
                        ></hr>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/pastevents">
                          Past Events
                        </a>
                      </li>
                    </ul>
                    {/* <Link className="nav-link" to="/events">
                      Events
                    </Link> */}
                  </li>
                  <li className="nav-item dropdown bottomLink ml-md-7">
                    <a
                      className="nav-link"
                      href="!#"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Dining
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="/restaurants">
                          Local Restaurants & Bars
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/foodtrucks">
                          Food Trucks
                        </a>
                      </li>
                    </ul>
                    {/* <Link className="nav-link" to="/dining">
                      Dining
                    </Link> */}
                  </li>
                  <li className="nav-item dropdown bottomLink ml-md-7">
                    <a
                      className="nav-link"
                      href="!#"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Music
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="/livemusic">
                          Live Music
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/festivals">
                          Festivals
                        </a>
                      </li>
                    </ul>
                    {/* <Link className="nav-link" to="/eventlistings">
                      Music
                    </Link> */}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
