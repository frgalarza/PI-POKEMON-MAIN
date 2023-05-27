import { useEffect } from "react"
import Card from "../Card/Card"
import { useSelector } from "react-redux"

const Home = () => {
    const allCharacters  = useSelector(state => state.allCharacters)
    console.log(allCharacters[0].type)

    useEffect(()=>{
        console.log('soy home')
    }, [])

    return <div>
            <h1>Meet our pokemons</h1>
            {allCharacters?.map(character => {
                return (<Card 
                key = {character?.id}
                id = {character?.id}
                name = {character.name}
                type = {character?.types}
                life = {character?.life}
                attack = {character?.attack}
                defense = {character?.defense}
                speed = {character?.speed}
                image = {character?.image}
                height = {character?.height}
                weight = {character?.weight}
                />
            )})}
        </div>
}

export default Home