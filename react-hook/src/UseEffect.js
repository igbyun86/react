import {useEffect, useState} from "react";

function UseEffect() {
    const [count, setCount] = useState(0);
    const [printCount, setPrintCount] = useState(0);

    useEffect(() => {
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
        </div>
    );
}

export default UseEffect;