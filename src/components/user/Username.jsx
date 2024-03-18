import Header from "../header/Header";
import Sidebar from "../sidebar/Sidebar";
import { useState } from "react";

let Username = () => {
    let [username, setUsername] = useState('');
    let handleEdit = (e) => {
        setUsername(localStorage.setItem("username", e.target.value));
        username = localStorage.getItem("username");
        console.log(username)
    } 

    // let handleEdit = (e) => {
    //     setUsername(e.target.value)
    // }
    return(
        <>
            <Header />
            <Sidebar />
            <p>Username : {username}</p>
            <label htmlFor="username">Edit : </label><input type="text" id="username" onChange={handleEdit}/> 
        </>
    )
}

export default Username;