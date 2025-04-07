import React from 'react';

const Filters = ({ regionFilter, setRegionFilter, regions }) => {
  return (
    <div className="filter-dropdown">
      <label className="filter-label">Filter by Region:</label>
      <select
        value={regionFilter}
        onChange={(e) => setRegionFilter(e.target.value)}
        className="filter-select"
      >
        <option value="All">All</option>
        {regions.map((region) => (
          <option key={region} value={region}>
            {region || "Unknown"}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filters;
