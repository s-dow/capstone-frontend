import "./EventListingsPage.scss";
import { EventRow } from "./EventRow";
import { Link } from "react-router-dom";
import listingImage from "../assets/images/dining.jpeg";

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
          !
        </p>
        <section>
          <EventRow
            title={"Example Title"}
            url={"google.com"}
            image={listingImage}
            description={
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas nihil laudantium quaerat itque eaque adipisci atque, Quas nihil laudantium quaerat itque."
            }
          />
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
        </section>
      </div>
    </main>
  );
};
