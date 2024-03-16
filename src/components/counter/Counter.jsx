import { useState } from "react";

let Counter = () => {
    let [count, setCount] = useState(0);
    let handleIncrement = () => {
        setCount(count+1);
    }
    let handleDecrement = () => {
        setCount(count-1);
    }
    return (
        <>
            <p>Count : {count}</p>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
        </>
    )
}
 export default Counter;