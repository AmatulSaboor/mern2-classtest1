import { Link } from "react-router-dom";

let Sidebar = () => {
    let menuItems = [
        {
            name: 'task 1',
            link: '/task1'
        },
        {
            name: 'task 2',
            link: '/task2'
        },
        {
            name: 'task 3',
            link: '/task3'
        },
        {
            name: 'task 4',
            link: '/task4'
        },
        {
            name: 'task 5',
            link: '/task5'
        },
    ]
    return (
        <ul className="sidenav">
        <span>This is sidebar</span>
            {menuItems.map((item, i) => {
                return(
                    <li key={i}>
                        <Link to={item.link}>{item.name}</Link>
                    </li>
                )
            })}
        </ul>
    )
}

export default Sidebar;