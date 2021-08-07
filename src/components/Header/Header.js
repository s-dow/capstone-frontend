import React from "react";
import "./Header.scss";

import { Link } from "react-router-dom";

import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

export const Header = (props) => {
  return (
    <header>
      <nav className="navbar navbar-expand-md stroke navbarColor">
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
                <ul className="navbar-nav justify-content-end">
                  <li className="iconRow">
                    <form
                      action="/"
                      role="search"
                      id="searchform"
                      className="search-form"
                    >
                      <input type="submit" value="" className="search-submit" />
                      <input
                        type="search"
                        name="search"
                        className="search-text searchLogo"
                        placeholder="Search"
                        autoComplete="off"
                      />
                    </form>
                  </li>
                  <li className="iconRow">
                    {localStorage.email && localStorage.password ? (
                      <Link className="accountLogo" to="/account">
                        <Icon icon={faUserCircle} />
                      </Link>
                    ) : (
                      <Link className="accountLogo" to="/signin">
                        <Icon icon={faUserCircle} />
                      </Link>
                    )}
                  </li>
                </ul>
              </div>
            </div>
            <hr></hr>
            <div className="row">
              <div className="col">
                <ul className="navbar-nav mr-auto ml-auto justify-content-center">
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
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown"
                    >
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
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown"
                    >
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
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown"
                    >
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
                      <li>
                        <a className="dropdown-item" href="/openmic">
                          Open Mic
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
