import { useState } from "react";
import Header from "../header/Header";
import Sidebar from "../sidebar/Sidebar";

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
            <Header />
            <Sidebar />
            <p>Count : {count}</p>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
        </>
    )
}
 export default Counter;