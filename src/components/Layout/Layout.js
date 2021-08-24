import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { EventPage } from "../EventPage/EventPage";
import { EventListingsPage } from "../EventListingsPage/EventListingsPage";
import { About } from "../About/About";
import { AccountPage } from "../AccountPage/AccountPage";
import { HomePage } from "../HomePage/HomePage";
import { Calendar } from "../../Calendar/Calendar";
import { LiveMusic } from "../Music/LiveMusic";
import { Restaurants } from "../Dining/Restaurants";
import { Auth0Provider } from "@auth0/auth0-react";
import runtimeEnv from "@mars/heroku-js-runtime-env";

import "./Layout.scss";
import "../assets/images/bg.jpg";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const env = runtimeEnv();

export const Layout = (props) => {
  return (
    <Router>
      <div className="Layout">
        <Header />

        <Switch>
          <Route path="/events/:event">
            <EventPage />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/events">
            <EventListingsPage />
          </Route>
          <Route path="/restaurants">
            <Restaurants />
          </Route>
          <Route path="/livemusic">
            <LiveMusic />
          </Route>
          <Route path="/calendar">
            <Calendar />
          </Route>

          <Route path="/account">
            <Auth0Provider
              domain="hellosyr.us.auth0.com"
              clientId="9QtaZGHlzb3fhbBvkAve9Mrmuv1jpYef"
              redirectUri={env.REACT_APP_FRONTEND_URL + "/account"}
              audience="https://sara-capstone-backend.herokuapp.com"
              scope="read:current_user"
            >
              <AccountPage />
            </Auth0Provider>
          </Route>

          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};
