import React, { useState } from "react";

function WeatherDashboard() {
  const mockWeatherData = {
    "New York": { temperature: "22°C", humidity: "56%", windSpeed: "15 km/h" },
    "Los Angeles": { temperature: "27°C", humidity: "45%", windSpeed: "10 km/h" },
    London: { temperature: "15°C", humidity: "70%", windSpeed: "20 km/h" },
  };

  const [city, setCity] = useState("");
  const [searchList, setSearchList] = useState([]);
  const [searchResult, setSearchResult] = useState(null);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = () => {
    const normalizedCity = city.trim().toLowerCase();
    const matchedCity = Object.keys(mockWeatherData).find(
      key => key.toLowerCase() === normalizedCity
    );
    const result = matchedCity ? mockWeatherData[matchedCity] : null;

    setSearchList(prev => [...prev, city]);
    setSearchResult(result);
    setHasSearched(true);
    setCity("");
  };

  return (
    <div>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Search for a city..."
      />
      <button onClick={handleSearch} disabled={!city.trim()}>Search</button>

      <div id="weatherData">
        {hasSearched && (
          searchResult ? (
            <>
              <div>Temperature: {searchResult.temperature}</div>
              <div>Humidity: {searchResult.humidity}</div>
              <div>Wind Speed: {searchResult.windSpeed}</div>
            </>
          ) : (
            <div>City not found.</div>
          )
        )}
      </div>

      <div id="previousSearches">
        <h4>Previous Searches:</h4>
        {searchList.join(', ')}
      </div>
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>Weather Dashboard</h1>
      <WeatherDashboard />
    </div>
  );
}

export default App;