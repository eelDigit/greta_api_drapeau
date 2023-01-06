import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";

const Countries = () => {
  const [data, setData] = useState([]);
  const [playOnce, setPlayOnce] = useState(true);
  const [sortedData, setSortedData] = useState([]);
  const [rangeValue, setRangeValue] = useState(40);
  const [selectedRadio, setSelectedRadio] = useState("");
  const radios = ["Africa", "America", "Asia", "Europe", "Oceania"];

  useEffect(() => {
    // if () {
    axios
      .get(
        "https://restcountries.com/v2/all?fields=name,population,region,capital,flag"
      )
      .then((res) => {
        setData(res.data);
        // console.log(data);
        setPlayOnce(false);
        const sortedCountry = () => {
          const countryObj = Object.keys(data).map((i) => data[i]);
          const sortedArray = countryObj.sort((a, b) => {
            return b.population - a.population;
          });
          // console.log(sortedArray);
          sortedArray.length = 30;
          setSortedData(sortedArray);
        };
        sortedCountry();
      });
    // }
  }, [data, rangeValue, playOnce]);
  return (
    <div className="countries">
      <div className="sort-container">
        <input
          type="range"
          min="1"
          max="250"
          value={rangeValue}
          onChange={(e) => setRangeValue(e.target.value)}
        />
        <ul>
          {radios.map((radio) => {
            return (
              <li key={radio}>
                <input
                  type="radio"
                  value={radio}
                  id={radio}
                  onChange={(e) => setSelectedRadio(e.target.value)}
                  checked={radio === selectedRadio}
                />
                <label htmlFor={radio}> {radio} </label>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="cancel">
        {selectedRadio && (
          <h5 onClick={() => setSelectedRadio("")}>Annuler la recherche</h5>
        )}
      </div>
      <ul className="countries-list">
        {sortedData.map((country) => (
          <Card country={country} key={country.name} />
        ))}
      </ul>
    </div>
  );
};

export default Countries;
