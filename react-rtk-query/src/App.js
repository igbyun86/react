import React, {useState} from 'react';
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

function Search() {
    let query = api.useGetCountQuery({ name: 'ig' });
    console.log(query.data)
    return (
        <div>
            <span>재조회!</span>
        </div>
    )
}

function App() {

    const [isClick, setIsClick] = useState(false);

    return (
        <>
            <Count name="ig" />
            <Count name="ig" />
            <Count name="jane" />
            <Count name="steve" />
            <button onClick={(e) =>{ setIsClick(!isClick)}}>ig 재조회</button>
            {
                isClick ? <Search/> : null
            }
        </>
    );
}

export default App;
