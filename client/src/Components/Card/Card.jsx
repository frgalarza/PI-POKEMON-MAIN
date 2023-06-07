import { Link, useLocation } from 'react-router-dom'
import styles from './Card.module.css'

const Card = (props) => {
    const { name, id, life, defense, attack, speed, weight, height, type, image } = props
    const location = useLocation()

    
    return (
        <Link to={`/detail/${id}`} >
            <div className={styles.divCard}>
                <h1 className={styles.info}>{name[0].toUpperCase() + name.slice(1)}</h1>
                <img src={image} alt={name} className={styles.image}/>
                <div className={styles.divTypes}>
                    {typeof type[0] === 'object' ? type.map(t => <h2 id='type' className={styles.info}>{t.name[0].toUpperCase() + t.name.slice(1)}</h2>) : type.map(t => <h2 id='type' className={styles.info}>{t[0].toUpperCase() + t.slice(1)}</h2>)}
                </div>
                {location.pathname === `/detail/${id}` &&
                <>
                <h2 className={styles.info}>Hp: {life}</h2>
                <h2 className={styles.info}>Defense: {defense}</h2>
                <h2 className={styles.info}>Attack: {attack}</h2>
                <h2 className={styles.info}>Speed: {speed}</h2>
                <h2 className={styles.info}>Weight: {weight}</h2>
                <h2 className={styles.info}>Height: {height}</h2>
                </>}
            </div>
        </Link>
    )
}

export default Card