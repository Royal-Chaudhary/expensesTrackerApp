import React from "react";

function YearList({ years }) {
    return (
      <ul>
        {years.map(year => (
          <li key={year}>{year}</li>
        ))}
      </ul>
    );
 }

export default YearList;