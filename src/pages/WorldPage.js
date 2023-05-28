import { Card } from '../components/Card';
import { Title } from '../components/Title';

export const WorldPage = ({ allCountriesData }) => {
  return (
    <div>
      <Title></Title>
      <Card allCountriesData={allCountriesData}></Card>
    </div>
  );
};
