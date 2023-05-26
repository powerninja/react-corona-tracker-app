import { useState } from 'react';
import countries from './countries.json';
import './App.css';
import { TopPage } from './pages/TopPage';

export const App = () => {
  const [country, setCountry] = useState('');
  const [countryData, setCountryData] = useState({
    date: '',
    newConfirmed: '',
    totalConfirmed: '',
    newRecovered: '',
    totalRecovered: '',
  });

  const getCountryData = () => {
    fetch(`https://monotein-books.vercel.app/api/corona-tracker/country/${country}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data[data.length - 1]);
        setCountryData({
          date: data[data.length - 1].Date,
          newConfirmed: data[data.length - 1].Confirmed - data[data.length - 2].Confirmed,
          totalConfirmed: data[data.length - 1].Confirmed,
          newRecovered: data[data.length - 1].Recovered - data[data.length - 2].Recovered,
          totalRecovered: data[data.length - 1].Recovered,
        });
        console.log(countryData);
      });
  };
  return (
    <div className="App">
      <>
        <TopPage countries={countries} setCountry={setCountry} getCountryData={getCountryData} country={country}></TopPage>
        {/* {countryData} */}
      </>
    </div>
  );
};

export default App;
