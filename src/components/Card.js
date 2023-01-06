import React from "react";

const Card = (props) => {
  //   console.log(props);
  const { country } = props;
  //   console.log(country);
  return (
    <li className="card">
      <img src={country.flag} />
      <div className="data-container">
        <ul>
          <li> {country.name} </li>
          <li> {country.capital} </li>
          <li> pop. {country.population} </li>
        </ul>
      </div>
    </li>
  );
};

export default Card;
