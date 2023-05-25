import { useState } from 'react';
import countries from './countries.json';
import './App.css';
import { TopPage } from './pages/TopPage';

export const App = () => {
  const [country, setCountry] = useState('');

  const getCountryData = () => {
    fetch(`https://monotein-books.vercel.app/api/corona-tracker/country/${country}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  return (
    <div className="App">
      <>
        <TopPage countries={countries} setCountry={setCountry} getCountryData={getCountryData} country={country}></TopPage>
      </>
    </div>
  );
};

export default App;
