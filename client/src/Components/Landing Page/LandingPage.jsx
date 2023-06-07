import { Link } from 'react-router-dom'
import styles from './LandingPage.module.css'

const LandingPage = () => {

    return (
        <div className={styles.divLanding}>
            <Link to='/home'>
                <h2 className={styles.button}>Start Adventure</h2>
            </Link>
        </div>
    )
}

export default LandingPage