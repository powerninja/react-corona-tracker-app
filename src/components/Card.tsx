//世界の感染状況の一覧の型を宣言
interface SingleCountriesDataType {
  Country: string;
  NewConfirmed: number;
  TotalConfirmed: number;
}

//allCountriesDataTypeが配列であることを宣言
interface WorldPageType {
  allCountriesData: Array<SingleCountriesDataType>;
}
export const Card = ({ allCountriesData }: WorldPageType) => {
  return (
    <div className="card-container">
      {/* APIで取得した195カ国分を表示する */}
      {allCountriesData.map((singleData, index) => (
        <div key={index} className="card">
          <div>
            <h2>{singleData.Country}</h2>
            <p>
              新規感染者: <span>{singleData.NewConfirmed.toLocaleString()}</span>
            </p>
            <p>
              感染者総数: <span>{singleData.TotalConfirmed.toLocaleString()}</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
