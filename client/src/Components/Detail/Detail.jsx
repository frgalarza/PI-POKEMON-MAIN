import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'
import axios from 'axios'
import styles from './Detail.module.css'

const Detail = () => {
    const [ character, setCharacter ] = useState({})
    const { id } = useParams()

    useEffect(() => {
        axios(`http://localhost:3001/pokemons/${id}`).then(res => setCharacter(res.data)).catch(err => window.alert(err.message))
    }, [id])

    return (
        <div className={styles.divPage}>
        {
            character ? (
                <div className={styles.character}>
                    <div className={styles.infoMain}>
                        <img src={character.image} alt={character.name} className={styles.img}/>      
                        <div className={styles.infoType}>
                            { character.types?.map(type => <h2>{type}</h2>) } 
                        </div>
                    </div>
                    <div className={styles.info}>
                        <h1 className={styles.title}>{character.name}</h1>
                        <h2>Attack: {character.attack}</h2>
                        <h2>Defense: {character.defense}</h2>
                        <h2>Weight: {character.weight}</h2>
                        <h2>Height: {character.height}</h2>
                        <h2>Speed: {character.speed}</h2>
                    </div>                    
                </div>
            ) : ("")
        }
        </div>

        
    )
}

export default Detail