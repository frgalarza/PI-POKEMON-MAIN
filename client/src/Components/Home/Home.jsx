import { useEffect, useState } from "react"
import Card from "../Card/Card"
import { useSelector } from "react-redux"
import styles from './Home.module.css'

const Home = () => {
    const allCharacters  = useSelector(state => state.allCharacters)

    const CHARACTERS_PER_PAGE = 12
    const [ currentPage, setCurrentPage ] = useState(0)
    const [ charactersInPage, setCharactersInPage] = useState([...allCharacters].splice(0, CHARACTERS_PER_PAGE))

    const handlerNext = () => {
        const totalCharacters = allCharacters.length

        const nextPage = currentPage + 1

        const firstIndex = nextPage * CHARACTERS_PER_PAGE

        if(totalCharacters < firstIndex) return

        setCharactersInPage([...allCharacters].splice(firstIndex, CHARACTERS_PER_PAGE))
        setCurrentPage(nextPage)
    }

    const handlerPage = (event) => {
        if(event.target.value === currentPage) return

        const firstIndex = event.target.value * CHARACTERS_PER_PAGE

        setCharactersInPage([...allCharacters].splice(firstIndex, CHARACTERS_PER_PAGE))
        setCurrentPage(Number(event.target.value))
    }

    let buttonsPage = []
    let count = 0

    while (count*CHARACTERS_PER_PAGE < allCharacters.length) {
        buttonsPage.push(<button key={count} value={count} onClick={handlerPage} className={styles.buttonPageExact}>{count + 1}</button>)
        count++
    }

    const handlerPrev = () => {
        const prevPage = currentPage - 1

        if(prevPage < 0 ) return

        const firstIndex = prevPage * CHARACTERS_PER_PAGE

        setCharactersInPage([...allCharacters].splice(firstIndex, CHARACTERS_PER_PAGE))
        setCurrentPage(prevPage)
    }

    useEffect(()=>{
        setCharactersInPage([...allCharacters].splice(0, CHARACTERS_PER_PAGE))
    }, [allCharacters])

    return <div className={styles.containerPage}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnOddShJBphE6Jfdnqxi1afSJG9O-ocKADWA&usqp=CAU" alt="pokemonTitle" />
            <br />
            <div className={styles.divBtnPage}>
                <button onClick={handlerPrev} className={styles.buttonPage}>Prev</button>
                {buttonsPage}
                <button onClick={handlerNext} className={styles.buttonPage}>Next</button> 
            </div>
            <br />
            <div className={styles.containerCards}>
               {charactersInPage?.map(character => {
                return (<Card 
                key = {character.id}
                id = {character.id}
                name = {character.name}
                type = {character.types}
                life = {character.life}
                attack = {character.attack}
                defense = {character.defense}
                speed = {character.speed}
                image = {character.image}
                height = {character.height}
                weight = {character.weight}
                />
                )})} 
            </div>
            <br />
        </div>
}

export default Home