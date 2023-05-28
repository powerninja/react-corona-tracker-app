import { Loading } from './Loading';

type ResultType = {
  countryData: {
    date: string;
    newConfirmed: number;
    totalConfirmed: number;
    newRecovered: number;
    totalRecovered: number;
  };
  loading: boolean;
};

export const Result = ({ countryData, loading }: ResultType) => {
  const { date, newConfirmed, totalConfirmed, newRecovered, totalRecovered } = countryData;
  return (
    <div className="results-container">
      {/* API読み込み中の場合,Loadingコンポーネントを表示する */}
      {loading ? (
        <Loading></Loading>
      ) : (
        <div>
          <p>
            日付: <span>{date.slice(0, 10)}</span>
          </p>
          <p>
            新規感染者: <span>{newConfirmed.toLocaleString()}</span>
          </p>
          <p>
            感染者総数: <span>{totalConfirmed.toLocaleString()}</span>
          </p>
          <p>
            新規回復者: <span>{newRecovered.toLocaleString()}</span>
          </p>
          <p>
            回復者総数: <span>{totalRecovered.toLocaleString()}</span>
          </p>
        </div>
      )}
    </div>
  );
};
