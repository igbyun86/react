import {useEffect, useRef, useState} from "react";

function UseRef() {
    const [count, setCount] = useState(0);
    const countRef = useRef(0);
  
    console.log("렌더링!");
    const increaseCountState = () => {
      setCount(count + 1);
    };

    //렌더링하지 않고 값만 수정 후 렌더링될때 화면에 업데이트 됨
    const increaseCountRef = () => {
      countRef.current = countRef.current + 1;
      console.log(`Ref: ${countRef.current}`);
    };
  
    //Html 요소에 접근
    const inputRef = useRef();
    useEffect(() => {
        console.log(inputRef);
        inputRef.current.focus();
    }, []);

    const login = () => {
        alert(`환영합니다. ${inputRef.current.value}님!`);
        inputRef.current.focus();
    };
    

    return (
        <div>
            <p>State: {count}</p>
            <p>Ref: {countRef.current}</p>

            <button onClick={increaseCountState}>State 올려</button>
            <button onClick={increaseCountRef}>Ref 올려</button>

            <hr />
            <input ref={inputRef} type="text" placeholder="username" />
            <button onClick={login}>로그인</button> 
        </div>
    );
}

export default UseRef;