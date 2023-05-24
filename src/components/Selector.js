import countries from '../countries';

export const Selector = () => {
  return (
    <>
      {/* 選択リスト */}
      <select>
        {countries.map((country, index) => (
          <option key={index} value={country.Slug}>
            {country.Country}
          </option>
        ))}
      </select>
    </>
  );
};
