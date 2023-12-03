import {useEffect, useMemo, useState} from "react";

/*
    메모이제이션 역할
 */
function UseMemo() {
    const [number, setNumber] = useState(0);
    const [isKorea, setIsKorea] = useState(true);
/*
    const location = {
        country: isKorea ? '한국' : '외국'
    };
*/
    const location = useMemo(() => {
        return {
            country: isKorea ? '한국' : '외국'
        }
    }, [isKorea]);

    //의존성배열에 객체(Object)타입이 있는 경우 주소값을 저장해주기 위해 useMemo를 사용해준다
    useEffect(() => {
        console.log('useEffect 호출');
    }, [location]);

    return (
        <div>
            <h2>하루에 몇끼 먹어요?</h2>
            <input
                type="number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
            />
            <hr />
            <h2>어느 나라에 있어요?</h2>
            <p>나라 : {location.country}</p>
            <button onClick={() => setIsKorea(!isKorea)}>비행기 타자</button>
        </div>
    );
}

export default UseMemo;