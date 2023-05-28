export const Card = ({ allCountriesData }) => {
  return (
    <div className="card-container">
      {allCountriesData.map((singleData, index) => (
        <div key={index} className="card">
          <h2>{singleData.Country.toLocaleString()}</h2>
          <p>新規感染者：{singleData.NewConfirmed.toLocaleString()}</p>
          <p>感染者総数：{singleData.TotalConfirmed.toLocaleString()}</p>
        </div>
      ))}
    </div>
  );
};
