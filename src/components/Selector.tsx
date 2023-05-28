import { SelectorType } from '../types';

export const Selector = ({ countries, setCountry }: SelectorType) => {
  return (
    <div className="selector-container">
      {/* 選択リストを選択した際に、値を格納する */}
      <select onChange={(event) => setCountry(event.target.value)}>
        {/* countries.jsonに記載された国を選択リストに表示させる */}
        {countries.map((country, index) => (
          <option key={index} value={country.Slug}>
            {country.Country}
          </option>
        ))}
      </select>
    </div>
  );
};
