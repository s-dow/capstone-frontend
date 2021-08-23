import "./EventListingsPage.scss";
import { EventRow } from "./EventRow";
import { Link } from "react-router-dom";

export const EventListingsPage = (props) => {
  return (
    <main className="content">
      <h1>Upcoming Events</h1>
      <div className="container-fluid d-flex justify-content-around flex-wrap">
        <p id="calLink" style={{ fontSize: "larger" }}>
          View the Events Calendar&nbsp;
          <Link
            to="/calendar"
            id="busLink"
            style={{ textDecoration: "underline" }}
          >
            here
          </Link>
        </p>
        <section>
          <EventRow />
        </section>
      </div>
    </main>
  );
};
