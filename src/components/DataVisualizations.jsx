import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie, Cell } from 'recharts';

function DataVisualizations({ countries }) {
  // Prepare data for population by region chart
  const populationByRegion = countries.reduce((acc, country) => {
    const region = country.region || 'Unknown';
    if (!acc[region]) {
      acc[region] = 0;
    }
    acc[region] += country.population;
    return acc;
  }, {});

  const populationData = Object.entries(populationByRegion).map(([region, population]) => ({
    region,
    population: Math.round(population / 1000000) // Convert to millions
  }));

  // Prepare data for countries per region chart
  const countriesPerRegion = countries.reduce((acc, country) => {
    const region = country.region || 'Unknown';
    acc[region] = (acc[region] || 0) + 1;
    return acc;
  }, {});

  const regionData = Object.entries(countriesPerRegion).map(([region, count]) => ({
    region,
    count
  }));

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8', '#82CA9D'];

  return (
    <div className="visualizations">
      <div className="chart-container">
        <h2>Population Distribution by Region (Millions)</h2>
        <BarChart width={600} height={300} data={populationData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="region" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="population" fill="#8884d8" />
        </BarChart>
      </div>

      <div className="chart-container">
        <h2>Number of Countries per Region</h2>
        <PieChart width={400} height={400}>
          <Pie
            data={regionData}
            cx={200}
            cy={200}
            labelLine={false}
            label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
            outerRadius={150}
            fill="#8884d8"
            dataKey="count"
          >
            {regionData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </div>
    </div>
  );
}

export default DataVisualizations; 