import React from 'react';
import {api} from "./app/api";

const Count = ({ name }) => {
    console.log('api', api);

    const query = api.useGetCountQuery({ name: name }); //읽기전용 hook - 자동실행
    console.log('query', query);

    const mutation = api.useSetCountMutation(); //쓰기전용 hook - 첫번째 원소 함수로 수동실행
    const setCount = mutation[0];
    if (query.isLoading) {
      return <>Loading</>;
    }
    //
  return (
      <div>
        <button onClick={async () => {
            const result = await setCount({ name, value: query.data + 1 });
            console.log('result', result)
        }}>
            {mutation[1].isLoading ? "updating..." : ""}
            {query.isFetching ? "fetching..." : ""}
            {name} {query.data}
        </button>
      </div>
  );
};

function App() {
  return (
      <>
        <Count name="ig" />
        <Count name="ig" />
        <Count name="jane" />
        <Count name="steve" />
      </>
  );
}

export default App;
