import { Title } from '../components/Title.js';
import { Selector } from '../components/Selector.js';
import { Result } from '../components/Result.js';

export const TopPage = ({ countries, setCountry, getCountryData, country, countryData }) => {
  return (
    <>
      <Title></Title>
      <Selector countries={countries} setCountry={setCountry} getCountryData={getCountryData} country={country}></Selector>
      <Result countryData={countryData}></Result>
    </>
  );
};
