let useLocalStorage = (username) => {
    localStorage.setItem("username", username);
    return localStorage.getItem(username);
}

export default useLocalStorage;