import { Title } from '../components/Title';
import { Selector } from '../components/Selector';
import { Result } from '../components/Result';
import { Header } from '../components/Header';
import { TopPageType } from '../types';

export const TopPage = ({ countries, setCountry, countryData, loading }: TopPageType) => {
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
