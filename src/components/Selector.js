export const Selector = ({ countries, setCountry }) => {
  return (
    <div className="selector-container">
      {/* 選択リスト */}
      <select onChange={(event) => setCountry(event.target.value)}>
        {countries.map((country, index) => (
          <option key={index} value={country.Slug}>
            {country.Country}
          </option>
        ))}
      </select>
    </div>
  );
};
