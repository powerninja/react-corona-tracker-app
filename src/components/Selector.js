import countries from '../countries';

export const Selector = () => {
  console.log(countries);

  return (
    <>
      {/* 選択リスト */}
      <select>
        {countries.map((country) => (
          <option>{country.Country}</option>
        ))}
      </select>
    </>
  );
};
