import React, { useState } from 'react';
import SearchBar from './SearchBar';
import Filters from './Filters';
import CountryList from './CountryList';

const Dashboard = ({ countries }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [regionFilter, setRegionFilter] = useState('All');

  const filteredCountries = countries.filter(country => {
    const matchesSearch = country.name.common.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesRegion = regionFilter === 'All' || country.region === regionFilter;
    return matchesSearch && matchesRegion;
  });

  const totalCountries = countries.length;
  const averagePopulation = Math.round(
    countries.reduce((sum, c) => sum + c.population, 0) / totalCountries
  );
  const uniqueRegions = [...new Set(countries.map(c => c.region))];

  return (
    <div className="dashboard">
      {/* Stats */}
      <div className="summary-stats">
        <div className="stat-card">🌎 Total Countries: {totalCountries}</div>
        <div className="stat-card">👥 Avg. Population: {averagePopulation.toLocaleString()}</div>
        <div className="stat-card">🌐 Regions: {uniqueRegions.length}</div>
      </div>

      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <Filters regionFilter={regionFilter} setRegionFilter={setRegionFilter} regions={uniqueRegions} />

      <CountryList countries={filteredCountries} />
    </div>
  );
};

export default Dashboard;
