import { Card } from '../components/Card';

export const WorldPage = ({ getAllCountriesData, allCountriesData }) => {
  return (
    <div>
      <Card getAllCountriesData={getAllCountriesData} allCountriesData={allCountriesData}></Card>
    </div>
  );
};
