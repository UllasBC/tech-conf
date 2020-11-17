import React from "react";
import { ConferenceItems } from "../ConferenceItems/ConferenceItems";
import "./Conferences.css";

export const Conferences = (props) => {
  return (
    <>
      <main className="conferences">
        <div className="conference__header">
          <h1>
            Conferences({props.conferenceData && props.conferenceData.length})
          </h1>
          <i class="fa fa-filter fa-2x" aria-hidden="true">
            {" "}
            Filter
          </i>
          <select
            onChange={(evt) => {
              props.setFilterCity(evt.target.value);
            }}
          >
            <option>City</option>
            {props.cities &&
              [...props.cities].map((city, index) => {
                return <option key={index}>{city}</option>;
              })}
          </select>
          <select
            onChange={(evt) => {
              props.setConfType(evt.target.value);
            }}
          >
            <option>Type</option>
            <option>Free</option>
            <option>Paid</option>
          </select>

          <select
            onChange={(evt) => {
              props.setFilterMonth(evt.target.value);
            }}
          >
            <option>Month</option>
            <option>Jan</option>
            <option>Feb</option>
            <option>Mar</option>
            <option>April</option>
            <option>May</option>
            <option>June</option>
            <option>July</option>
            <option>Aug</option>
            <option>Sept</option>
            <option>Oct</option>
            <option>Nov</option>
            <option>Dec</option>
          </select>

          <select
            onChange={(evt) => {
              props.setFilterCountry(evt.target.value);
            }}
          >
            <option>Country</option>
            {props.countries &&
              [...props.countries].map((country, index) => {
                return <option key={index}>{country}</option>;
              })}
          </select>
        </div>

        <div className="conference-block">
          <div className="conference__container">
            {props.conferenceData.map((item, index) => (
              <ConferenceItems conference={item} key={index} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
};
