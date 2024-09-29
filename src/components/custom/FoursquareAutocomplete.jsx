import axios from 'axios';
import React, { useState } from 'react';

function FoursquareAutocomplete({ onSelect }) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setQuery(value);

    if (value.length > 2) {
      // Call Foursquare Places API for autocomplete suggestions
      axios.get(`https://api.foursquare.com/v3/places/search?query=${value}`, {
        headers: {
          'Authorization': `Bearer ${import.meta.env.VITE_FOURSQUARE_API_KEY}`
        }
      }).then(response => {
        setResults(response.data.results);
      }).catch(error => console.error('Error fetching data:', error));
    }
  };

  const handleSelect = (place) => {
    setQuery(place.name);
    onSelect(place);
  };

  return (
    <div>
      <input 
        type="text" 
        value={query} 
        onChange={handleInputChange}
        placeholder="Search for a place"
      />
      <ul>
        {results.map((place) => (
          <li key={place.fsq_id} onClick={() => handleSelect(place)}>
            {place.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FoursquareAutocomplete;
