import { Link } from "react-router-dom";

const Menus = () => {
    return (
        <nav>
            <ul>
            <li>
                <Link to="/add">Add Inventories</Link>
            </li>
            <li>
                <Link to="/update">Update Inventories</Link>
            </li>
            </ul>
        </nav>
    )
}

export default Menus;
