import React, { useState } from "react";

const countriesData = [
  {
    country: "USA",
    cities: ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"],
  },
  {
    country: "Canada",
    cities: ["Toronto", "Vancouver", "Montreal", "Calgary", "Ottawa"],
  },
  {
    country: "UK",
    cities: ["London", "Manchester", "Birmingham", "Leeds", "Glasgow"],
  },
  {
    country: "Australia",
    cities: ["Sydney", "Melbourne", "Brisbane", "Perth", "Adelaide"],
  },
  {
    country: "Germany",
    cities: ["Berlin", "Munich", "Hamburg", "Cologne", "Frankfurt"],
  },
];

function NestedMapFunction() {
  const [data, setData] = useState(countriesData);

  return (
    <ul>
      {data.map(({ country, cities }, key) => {
        return (
          <div key={key}>
            <li>
              <b>{country}</b>
            </li>
            <ol>
              {cities.length > 0 &&
                cities.map((city, id) => {
                  return <li key={id}>{city}</li>;
                })}
            </ol>
          </div>
        );
      })}
    </ul>
  );
}

export default NestedMapFunction;
