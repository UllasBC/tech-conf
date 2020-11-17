import React from "react";
import "./ConferenceItems.css";

export const ConferenceItems = (props) => {
  return (
    <ul>
      <li
        className="booking-card"
        style={{
          backgroundImage: `url(${props.conference.imageURL.replace(
            /(")/g,
            ""
          )})`,
        }}
      >
        <div className="book-container">
          <div className="content">
            <button className="btn" onClick={()=>{window.open(`${props.conference.confRegUrl}`)}}>Register</button>
          </div>
        </div>
        <div className="informations-container">
          <h2 className="title">{props.conference.confName}</h2>
          <i class="fa fa-credit-card" aria-hidden="true"></i>
          <h2>{props.conference.entryType}</h2>

          <div className="more-information">
            <div className="info-and-date-container">
              <div className="box info">
                <i class="fa fa-map-marker" aria-hidden="true"></i>
                <p>{props.conference.venue}</p>
              </div>
              <div className="box date">
                <i class="fa fa-calendar" aria-hidden="true"></i>
                <p>
                  {props.conference.confStartDate} --{" "}
                  {props.conference.confEndDate}
                </p>
              </div>
            </div>
          </div>
        </div>
      </li>
    </ul>
  );
};
