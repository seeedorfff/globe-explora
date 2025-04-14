import React from "react";
import { Link } from "react-router-dom";

function CountryList({ countries }) {
  return (
    <div className="country-grid">
      {countries.map((country) => (
        <Link to={`/country/${country.cca3}`} key={country.cca3} className="country-link">
          <div className="country-card">
            <img 
              src={country.flags.png} 
              alt={`Flag of ${country.name.common}`}
              className="country-flag"
            />
            <h2 className="country-name">{country.name.common}</h2>
            <p>🌐 Region: {country.region}</p>
            <p>🏙️ Capital: {country.capital ? country.capital[0] : 'N/A'}</p>
            <p>👥 Population: {country.population.toLocaleString()}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default CountryList;
