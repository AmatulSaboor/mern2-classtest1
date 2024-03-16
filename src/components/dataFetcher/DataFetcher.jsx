import { useEffect, useState } from "react";

let DataFetcher = () => {
    let [data, setData] = useState();
    useEffect (() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(json => setData(json))
        .catch(e => console.log(`This is the error : ` + e))
    }, [data])
    return(
        <>
            <h3>Following is the todo list :</h3>
            {data && data.map((data, i) => {
                return(
                    <li key={i}>
                        {data.id}<br />
                        {data.title}<br />
                        <hr />
                    </li>
                )
            })}
        </>
    )
}

export default DataFetcher;