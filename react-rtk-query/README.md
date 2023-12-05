### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### RTK Query

- use-Query는 읽기전용
  - data(서버에서 가져온 데이터), isFetching(호출할때마다 실행), isLoading(한번만 실행) 중요
  - 자동실행
- use-Mutation은 쓰기전용
  - 첫번째 원소 함수{{name, value}}
  - isLoading중요!