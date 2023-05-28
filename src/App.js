import { useState, useEffect } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import countries from './countries.json';
import './App.css';
import { TopPage } from './pages/TopPage';

import { WorldPage } from './pages/WorldPage';

export const App = () => {
  //国ごとの感染状況ページの選択リスト値を保管
  const [country, setCountry] = useState('japan');
  //国ごとの感染状況ページにて、取得した国ごとのデータを保管
  const [countryData, setCountryData] = useState({
    date: '',
    newConfirmed: '',
    totalConfirmed: '',
    newRecovered: '',
    totalRecovered: '',
  });
  //世界の感染状況の一覧を保存
  const [allCountriesData, setAllCountriesData] = useState([]);
  //国ごとの感染状況を取得中にローディング画面を表示するフラグ trueの場合Loading画面が表示される
  const [loading, setLoading] = useState(false);

  //国ごとの感染状況を取得するAPIを呼び出す
  useEffect(() => {
    //APIを呼び出すため、Loadingにする
    setLoading(true);
    //選択リストによって選択された国の感染状況を取得する
    fetch(`https://monotein-books.vercel.app/api/corona-tracker/country/${country}`)
      .then((res) => res.json())
      .then((data) => {
        //情報を格納する
        setCountryData({
          //日付を格納
          date: data[data.length - 1].Date,
          //新規感染者数を格納(今日の感染者数-昨日の感染者数)
          newConfirmed: data[data.length - 1].Confirmed - data[data.length - 2].Confirmed,
          //これまでのトータルの感染者数を格納
          totalConfirmed: data[data.length - 1].Confirmed,
          //新規回復者数を格納(今日の回復者数-昨日の回復者数)
          newRecovered: data[data.length - 1].Recovered - data[data.length - 2].Recovered,
          //これまでの新規回復者数を格納
          totalRecovered: data[data.length - 1].Recovered,
        });
        //情報を取得できたため、Loading画面を外す
        setLoading(false);
      })
      .catch((error) => alert(`エラーが発生しました。${error}`));
    //country(選択リスト値)が更新された際に自動で、こちらの関数が実行される
  }, [country]);

  //世界の感染状況を取得するAPIを呼び出す
  useEffect(() => {
    fetch(`https://monotein-books.vercel.app/api/corona-tracker/summary`)
      .then((res) => res.json())
      //取得した世界の感染状況を格納する
      .then((data) => setAllCountriesData(data.Countries))
      .catch((error) => alert(`エラーが発生しました。${error}`));
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<TopPage countries={countries} setCountry={setCountry} countryData={countryData} loading={loading}></TopPage>}
        ></Route>
        <Route path="/world" element={<WorldPage allCountriesData={allCountriesData}></WorldPage>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
