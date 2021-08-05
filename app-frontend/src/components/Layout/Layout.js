import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { EventPage } from "../EventPage/EventPage";
import { EventListingsPage } from "../EventListingsPage/EventListingsPage";
import { About } from "../About/About";
import { AccountPage } from "../AccountPage/AccountPage";
import { HomePage } from "../HomePage/HomePage";
import { Restaurants } from "../Dining/Restaurants";

import "./Layout.scss";
import "../assets/images/bg.jpg";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { SignInRegistration } from "../SignInRegistration/SignInRegistration";

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
          <Route path="/signin">
            <SignInRegistration />
          </Route>
          <Route path="/account">
            <AccountPage />
          </Route>
          <Route path="/restaurants">
            <Restaurants />
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
