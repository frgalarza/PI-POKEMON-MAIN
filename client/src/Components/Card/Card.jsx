import { Link, useLocation } from 'react-router-dom'

const Card = (props) => {
    const { name, id, life, defense, attack, speed, weight, height, type, image } = props
    const location = useLocation()
    console.log(location.pathname)
    
    return (
        <Link to={`/detail/${id}`} >
            <div>
                <img src={image} alt={name} />
                <h1>Name: {name}</h1>
                <h2>Type: {type}</h2>
                {location.pathname === `/detail/${id}` &&
                <>
                <h2>Hp: {life}</h2>
                <h2>Defense: {defense}</h2>
                <h2>Attack: {attack}</h2>
                <h2>Speed: {speed}</h2>
                <h2>Weight: {weight}</h2>
                <h2>Height: {height}</h2>
                </>}
            </div>
        </Link>
    )
}

export default Card