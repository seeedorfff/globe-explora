import React from 'react';
import { useState, useEffect } from 'react';
import Dashboard from './components/Dashboard';
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

  return (
    <div className='app-container'>
      <h1 className='app-title'>Globe Explora</h1>
      {loading ? (
        <p>Loading Countries...</p>
      ) : (
        <Dashboard countries={countries} />
      )}
    </div>
  )
}

export default App;