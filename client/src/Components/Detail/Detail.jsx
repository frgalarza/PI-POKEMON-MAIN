import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Card from "../Card/Card"

const Detail = () => {
    const [ character, setCharacter ] = useState({})
    const { id } = useParams()

    useEffect(() => {
        axios(`http://localhost:3001/pokemons/${id}`).then(res => setCharacter(res.data)).catch(err => window.alert(err.message))
    }, [id])

    return (
        <>
        {
            character ? (
                <div>
                    <Card 
                        key = {character.id}
                        id = {character.id}
                        image = {character.image}
                        name = {character.name}
                        life = {character.life}
                        attack = {character.attack}
                        defense = {character.defense}
                        speed = {character.speed}
                        height = {character.height}
                        weight = {character.weight}
                        type = {character.types}
                    />
                </div>
            ) : ("")
        }
        </>

        
    )
}

export default Detail