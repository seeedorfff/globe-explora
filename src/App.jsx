import React from 'react';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import CountryDetail from './components/CountryDetail';
import DataVisualizations from './components/DataVisualizations';
import './App.css';

const App = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch('https://restcountries.com/v3.1/all');
        const data = await response.json();

        setCountries(data);
        setLoading(false);
        console.log(data);
      } catch (error) {
        console.error('Failed to fetch countries: ', error);
        setLoading(false);
      }
    };

    fetchCountries();
  }, []);

  if (loading) {
    return <div className="loading">Loading Countries...</div>;
  }

  return (
    <Router>
      <div className='app-container'>
        <h1 className='app-title'>Globe Explora</h1>
        <Routes>
          <Route path="/" element={
            <>
              <DataVisualizations countries={countries} />
              <Dashboard countries={countries} />
            </>
          } />
          <Route path="/country/:countryCode" element={<CountryDetail countries={countries} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;