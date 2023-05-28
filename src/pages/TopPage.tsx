import { Title } from '../components/Title.js';
import { Selector } from '../components/Selector.js';
import { Result } from '../components/Result.js';
import { Header } from '../components/Header.js';

type TopPageType = {
  countries: {
    Country: string;
    Slug: string;
  }[];
  setCountry: React.Dispatch<React.SetStateAction<string>>;
  countryData: {
    date: string;
    newConfirmed: number;
    totalConfirmed: number;
    newRecovered: number;
    totalRecovered: number;
  };
  loading: boolean;
};

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
