export const Selector = ({ countries, setCountry, getCountryData, country }) => {
  return (
    <div className="selector-container">
      {/* 選択リスト */}
      <select onChange={(event) => setCountry(event.target.value)}>
        <option>Select A Country</option>
        {countries.map((country, index) => (
          <option key={index} value={country.Slug}>
            {country.Country}
          </option>
        ))}
      </select>
      {country === '' ? <></> : <button onClick={() => getCountryData()}>Get Data</button>}
    </div>
  );
};
