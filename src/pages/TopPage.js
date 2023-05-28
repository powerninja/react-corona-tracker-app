import { Title } from '../components/Title.js';
import { Selector } from '../components/Selector.js';
import { Result } from '../components/Result.js';
import { Header } from '../components/Header.js';

export const TopPage = ({ countries, setCountry, country, countryData, loading }) => {
  return (
    <div className="top-page-container">
      <div>
        <Header></Header>
        <Title></Title>
        <Selector countries={countries} setCountry={setCountry}></Selector>
        <Result countryData={countryData} loading={loading}></Result>
      </div>
    </div>
  );
};
