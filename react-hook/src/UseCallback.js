import {useCallback, useEffect, useState} from "react";

function UseCallback() {
    const [number, setNumber] = useState(0);
    const [toggle, setToggle] = useState(true);

    /*
    const someFunction = () => {
        console.log(`someFunc: number: ${number}`);
    };
    */

    const someFunction = useCallback(() => {
        console.log(`someFunc: number: ${number}`);
    }, [number]);


    useEffect(() => {
        console.log("someFunction이 변경되었습니다.");
    }, [someFunction]);

    return (
        <div>
            <input
                type="number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
            />
            <button onClick={() => setToggle(!toggle)}>{toggle.toString()}</button>
            <br/>
            <button onClick={someFunction}>Call someFunc</button>
        </div>
    );
}

export default UseCallback;