import { Link, useLocation } from "react-router-dom"
import SearchBar from "../SearchBar/SearchBar"

const Nav = () => {
    const location = useLocation()

    return (
        <div>
            {location.pathname === '/home' && <>
            <select >
                <option value="Originals">Originals</option>
                <option value="Created">Created for me</option>
            </select>
            <select >
                <option value="Ascendent"></option>
                <option value="Descendent"></option>
                <option value="Alfabeti"></option>
                <option value="Attack"></option>
            </select>   
            <SearchBar/>
            </> }
            <Link to='/home'>
                Home
            </Link>
        </div>
    )
}

export default Nav