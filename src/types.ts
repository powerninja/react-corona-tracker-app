//国ごとの感染状況にて使用する型情報を宣言
export type CountryDataType = {
  date: string;
  newConfirmed: number;
  totalConfirmed: number;
  newRecovered: number;
  totalRecovered: number;
};

type countriesJsonType = {
  Country: string;
  Slug: string;
}[];

export type TopPageType = {
  countries: countriesJsonType;
  setCountry: React.Dispatch<React.SetStateAction<string>>;
  countryData: CountryDataType;
  loading: boolean;
};

export type SelectorType = {
  countries: countriesJsonType;
  setCountry: React.Dispatch<React.SetStateAction<string>>;
};

export type ResultType = {
  countryData: CountryDataType;
  loading: boolean;
};

//allCountriesDataTypeが配列であることを宣言(Appで使用)
export interface AllCountriesDataTypeArray extends Array<SingleCountriesDataType> {}

//世界の感染状況の一覧の型を宣言
interface SingleCountriesDataType {
  Country: string;
  NewConfirmed: number;
  TotalConfirmed: number;
}

//allCountriesDataTypeが配列であることを宣言(WorldPageで使用)
export interface WorldPageType {
  allCountriesData: Array<SingleCountriesDataType>;
}

//allCountriesDataTypeが配列であることを宣言
export interface CardType {
  allCountriesData: Array<SingleCountriesDataType>;
}
