import { NavLink, useLocation } from "react-router-dom"
import { useDispatch } from 'react-redux'
import SearchBar from "../SearchBar/SearchBar"
import { addPokemon, filterPokemonsOrigin, filterPokemonsType, orderCharacters } from "../../redux/action"
import styles from './Nav.module.css'


const Nav = () => {
    const location = useLocation()
    const dispatch = useDispatch()

    const handleFilter = (event) => {
        if(event.target.value === 'Created' || event.target.value === 'Originals' || event.target.value === 'all origins') dispatch(filterPokemonsOrigin(event.target.value))
        else dispatch(filterPokemonsType(event.target.value))
    }

    const handleOrder = (event) => {
        dispatch(orderCharacters(event.target.value))
    }

    const resetPokemons = () => {
        dispatch(addPokemon())
    }

    if(location.pathname !== '/') return (
        <div className={styles.divContainer}>
            {location.pathname !== '/' && <NavLink to='/home' onClick={resetPokemons} className={styles.button}>
                Home
            </NavLink>}
            {location.pathname === '/home' && <>
            <NavLink to='/form' className={styles.button}>
                Create Pokemon
            </NavLink>
            <div className={styles.divSearch}>
               <SearchBar/> 
            </div>
            <div className={styles.containerSelect}>
                <select onChange={handleFilter} className={styles.select}>
                    <option value="all">All types</option>
                    <option value="normal">normal</option>
                    <option value="fighting">fighting</option>
                    <option value="flying">flying</option>
                    <option value="poison">poison</option>
                    <option value="ground">ground</option>
                    <option value="rock">rock</option>
                    <option value="bug">bug</option>
                    <option value="ghost">ghost</option>
                    <option value="steel">steel</option>
                    <option value="fire">fire</option>
                    <option value="water">water</option>
                    <option value="grass">grass</option>
                    <option value="electric">electric</option>
                    <option value="psychic">psychic</option>
                    <option value="ice">ice</option>
                    <option value="dark">dark</option>
                    <option value="unknown">unknown</option>
                    <option value="dragon">dragon</option>
                    <option value="shadow">shadow</option>
                    <option value="fairy">fairy</option>
                </select>
                <select onChange={handleFilter} className={styles.select}>
                    <option value="all origins">All origins</option>
                    <option value="Originals">Originals</option>
                    <option value="Created">Created for me</option>
                </select>
                <select onChange={handleOrder} className={styles.select}>
                    <option value="A-Z">A-Z</option>
                    <option value="Z-A">Z-A</option>
                    <option value="Strong">Strong to Weak</option>
                    <option value="Weak">Weak to Strong</option>
                </select> 
            </div>
            </> }
        </div>
    )
}

export default Nav