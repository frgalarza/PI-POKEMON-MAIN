import styles from './Error404.module.css'

const Error404 = () => {
    return <div className={styles.divPage}>
        <div className={styles.divError}>
            <h1 className={styles.title}>Error 404</h1>
            <p className={styles.text}>Not found</p>
        </div>
        
    </div>
}

export default Error404