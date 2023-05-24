import { useState } from 'react';
import countries from '../countries';

export const Selector = () => {
  const [country, setCountry] = useState('');

  const getCountryData = () => {
    fetch(`https://monotein-books.vercel.app/api/corona-tracker/country/${country}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <>
      {/* 選択リスト */}
      <select onChange={(event) => setCountry(event.target.value)}>
        <option>Select A Country</option>
        {countries.map((country, index) => (
          <option key={index} value={country.Slug}>
            {country.Country}
          </option>
        ))}
      </select>
      {country === '' ? <></> : <button onClick={() => getCountryData()}>Get Data</button>}
    </>
  );
};
