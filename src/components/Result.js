export const Result = ({ countryData }) => {
  console.log(countryData);
  return (
    <>
      <p>日付：{countryData.date.slice(0, 10)}</p>
      <p>新規感染者数：{countryData.newConfirmed.toLocaleString()}</p>
      <p>感染者総数：{countryData.totalConfirmed.toLocaleString()}</p>
      <p>新規回復者：{countryData.newRecovered.toLocaleString()}</p>
      <p>回復者総数：{countryData.totalRecovered.toLocaleString()}</p>
    </>
  );
};
