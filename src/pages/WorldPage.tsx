import { Card } from '../components/Card';
import { Title } from '../components/Title';
import { Header } from '../components/Header';
//世界の感染状況の一覧の型を宣言
interface SingleCountriesDataType {
  Country: string;
  NewConfirmed: number;
  TotalConfirmed: number;
}

//allCountriesDataTypeが配列であることを宣言
interface WorldPageType {
  allCountriesData: Array<SingleCountriesDataType>;
}

export const WorldPage = ({ allCountriesData }: WorldPageType) => {
  return (
    <div className="world-page-container">
      <Header></Header>
      <Title></Title>
      <Card allCountriesData={allCountriesData}></Card>
    </div>
  );
};
