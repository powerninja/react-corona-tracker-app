import { useState, useEffect } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import countries from './countries.json';
import './App.css';
import { TopPage } from './pages/TopPage';

import { WorldPage } from './pages/WorldPage';

export const App = () => {
  const [country, setCountry] = useState('');
  const [countryData, setCountryData] = useState({
    date: '',
    newConfirmed: '',
    totalConfirmed: '',
    newRecovered: '',
    totalRecovered: '',
  });
  const [allCountriesData, setAllCountriesData] = useState([]);
  const [loading, setLoading] = useState(false);

  const getCountryData = () => {
    setLoading(true);
    fetch(`https://monotein-books.vercel.app/api/corona-tracker/country/${country}`)
      .then((res) => res.json())
      .then((data) => {
        setCountryData({
          date: data[data.length - 1].Date,
          newConfirmed: data[data.length - 1].Confirmed - data[data.length - 2].Confirmed,
          totalConfirmed: data[data.length - 1].Confirmed,
          newRecovered: data[data.length - 1].Recovered - data[data.length - 2].Recovered,
          totalRecovered: data[data.length - 1].Recovered,
        });
        setLoading(false);
      })
      .catch((error) => alert(`エラーが発生しました。${error}`));
  };

  useEffect(() => {
    fetch(`https://monotein-books.vercel.app/api/corona-tracker/summary`)
      .then((res) => res.json())
      .then((data) => setAllCountriesData(data.Countries))
      .catch((error) => alert(`エラーが発生しました。${error}`));
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <TopPage
              countries={countries}
              setCountry={setCountry}
              getCountryData={getCountryData}
              country={country}
              countryData={countryData}
              loading={loading}
            ></TopPage>
          }
        ></Route>
        <Route path="/world" element={<WorldPage allCountriesData={allCountriesData}></WorldPage>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
