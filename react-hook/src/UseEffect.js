import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

function UseEffect() {
    const [count, setCount] = useState(0);
    const [printCount, setPrintCount] = useState(0);

    //componentDidMount
    useEffect(() => {
        //컴포넌트 초기에 한번만 실행
        console.log("componentDidMount!");
        
        //unmount(componentWillUnmount)
        return () => {
            console.log("clean up!!");
        }
    }, []);


    //componentDidMount
    useEffect(() => {
        //componentDidUpdate(printCount)
        console.log(`You clicked ${printCount} times`);
    }, [printCount]);

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
            <p>console log print count: {printCount}</p>
            <button onClick={() => setPrintCount(printCount + 1)}>
                Click me
            </button>
            <p></p>
            <Link to="/useState"><p>useState</p></Link>
        </div>
    );
}

export default UseEffect;