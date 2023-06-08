import React, { useState, useEffect } from "react";
import useCounter from "./useCounter";

const MAX_CAPACITY = 10;

function Accomodate(props) {
    const [isFull, setIsFull] = useState(false);
    const [count, increaseCount, decreaseCount] = useCounter(0);

    useEffect(() => { //컴포넌트가 업데이트될 때마다 호출된다.
        console.log("=================");
        console.log("useEffect() is called");
        console.log(`is Full : ${isFull}`);
    });

    useEffect(() => {//첫 마운트시와 의존성 배열 내 count 변수가 업데이트될 때마다 호출됨.
        setIsFull(count >= MAX_CAPACITY);
        console.log(`current count value : ${count}`);
    }, [count]);

    return (
        <div style={{ padding: 16 }}>
            <p>{`총 ${count} 명 수용했습니다.`}</p>

            <button onClick={increaseCount} disabled={isFull}>
                입장
            </button>
            <button onClick={decreaseCount}>퇴장</button>

            {isFull && <p style={{ color: 'red' }}>정원이 가득찼습니다.</p>}
        </div>
    );
}

export default Accomodate;