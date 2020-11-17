import React, { useState, useEffect } from "react";
import { Header } from "../../components/Header/Header";
import { Conferences } from "../../components/Conferences/Conferences";
import "./HomePage.css";
export const HomePage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [filterCity, setFilterCity] = useState("City");
  const [confType, setConfType] = useState("Type");
  const [filterMonth, setFilterMonth] = useState("Month");
  const [filterCountry, setFilterCountry] = useState("Country");
  // console.log(filterCity);

  useEffect(() => {
    const fetchData = async () => {
      const apiUrl =
        "https://o136z8hk40.execute-api.us-east-1.amazonaws.com/dev/get-list-of-conferences";
      const res = await fetch(apiUrl);
      const conferenceData = await res.json();
      console.log(conferenceData);
      if (conferenceData && conferenceData.paid) {
        setData([...conferenceData.paid, ...conferenceData.free]);
      }

      setLoading(false);
    };
    fetchData();
  }, []);

  let filterData = data.filter((data) => {
    return (
      data.confName.toLowerCase().includes(search.toLowerCase()) ||
      data.city.toLowerCase().includes(search.toLowerCase())
    );
  });

  if (filterCity !== "City") {
    filterData = filterData.filter((data) => {
      return data.city === filterCity;
    });
  }

  if (filterCountry !== "Country") {
    filterData = filterData.filter((data) => {
      return data.country === filterCountry;
    });
  }
  if (confType !== "Type") {
    filterData = filterData.filter((data) => {
      return data.entryType === confType;
    });
  }

  if (filterMonth !== "Month") {
    filterData = filterData.filter((data) => {
      return data.confStartDate.includes(filterMonth);
    });
  }

  let cities = data
    .map((data) => {
      return data.city;
    })
    .filter((data) => {
      return data.trim().length > 0;
    });

  cities = new Set(cities); //Duplicate values
  // console.log(cities);

  let countries = data
    .map((data) => {
      return data.country;
    })
    .filter((data) => {
      return data.trim().length > 0;
    });

  countries = new Set(countries);

  const searchInput = (value) => {
    setSearch(value);
  };

  return (
    <>
      <Header searchInput={searchInput} />
      {loading ? (
        <div className="spinner">
         
        </div>
      ) : (
        <Conferences
          conferenceData={filterData}
          cities={cities}
          countries={countries}
          setConfType={setConfType}
          setFilterCity={setFilterCity}
          setFilterMonth={setFilterMonth}
          setFilterCountry={setFilterCountry}
        />
      )}
    </>
  );
};
