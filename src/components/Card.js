export const Card = ({ getAllCountriesData, allCountriesData }) => {
  return (
    <div>
      <h2>Card</h2>
      <button onClick={getAllCountriesData}>get all data</button>
      {allCountriesData.map((singleData, index) => (
        <div key={index}>
          <h2>{singleData.Country}</h2>
          <p>新規感染者：{singleData.NewConfirmed}</p>
          <p>感染者総数：{singleData.TotalConfirmed}</p>
        </div>
      ))}
    </div>
  );
};
