import React from 'react';
import { useParams, Link } from 'react-router-dom';

function CountryDetail({ countries }) {
  const { countryCode } = useParams();
  const country = countries.find(c => c.cca3 === countryCode);

  if (!country) {
    return <div>Country not found</div>;
  }

  return (
    <div className="country-detail">
      <Link to="/" className="back-button">← Back to Dashboard</Link>
      
      <div className="detail-header">
        <img 
          src={country.flags.png} 
          alt={`Flag of ${country.name.common}`}
          className="detail-flag"
        />
        <h1>{country.name.common}</h1>
      </div>

      <div className="detail-info">
        <div className="info-section">
          <h2>Basic Information</h2>
          <p>🌐 Region: {country.region}</p>
          <p>🏙️ Capital: {country.capital ? country.capital[0] : 'N/A'}</p>
          <p>👥 Population: {country.population.toLocaleString()}</p>
          <p>🗣️ Languages: {Object.values(country.languages || {}).join(', ') || 'N/A'}</p>
          <p>💰 Currencies: {Object.values(country.currencies || {}).map(curr => curr.name).join(', ') || 'N/A'}</p>
        </div>

        <div className="info-section">
          <h2>Geography</h2>
          <p>📍 Area: {country.area.toLocaleString()} km²</p>
          <p>🌍 Subregion: {country.subregion || 'N/A'}</p>
          <p>⏰ Timezone: {country.timezones?.join(', ') || 'N/A'}</p>
        </div>

        <div className="info-section">
          <h2>Additional Information</h2>
          <p>🎯 Status: {country.status || 'N/A'}</p>
          <p>🌐 TLD: {country.tld?.join(', ') || 'N/A'}</p>
          <p>🚩 Independent: {country.independent ? 'Yes' : 'No'}</p>
        </div>
      </div>
    </div>
  );
}

export default CountryDetail; 