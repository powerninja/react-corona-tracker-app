import { Card } from '../components/Card';
import { Title } from '../components/Title';
import { Header } from '../components/Header';

export const WorldPage = ({ allCountriesData }) => {
  return (
    <div className="world-page-container">
      <Header></Header>
      <Title></Title>
      <Card allCountriesData={allCountriesData}></Card>
    </div>
  );
};
