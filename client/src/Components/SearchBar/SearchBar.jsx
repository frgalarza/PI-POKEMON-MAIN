import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { searchByName } from '../../redux/action'
import styles from './SearchBar.module.css'

const SearchBar = () => {
    const [ name, setName ] = useState('')
    const dispatch = useDispatch()
    const allCharacters = useSelector(state => state.findByName)

    const handleChange = (event) => {
        setName(event.target.value)
    }

    const handleEnter = (event) => {
        if(event.key === 'Enter'){
            findCharNameWhithOutRepeat()
        }
    }

    const findCharNameWhithOutRepeat = () => {
        const repeat = allCharacters.find(character => character.name === name)
        if(!repeat){
            dispatch(searchByName(name))
            setName('')
        }
        else setName('')
        
    }


    return <div>
        <input type="search" onChange={handleChange} value={name} onKeyUp={handleEnter} placeholder='Search pokemon...' className={styles.inputSearch}/>
    </div>
}

export default SearchBar