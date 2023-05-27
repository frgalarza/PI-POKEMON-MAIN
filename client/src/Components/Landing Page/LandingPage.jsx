import { Link } from 'react-router-dom'
import { useEffect } from 'react'

const LandingPage = () => {

    useEffect(()=>{
        console.log('Ya renderizo jeje')
    }, [])

    return (
        <div>
            <h1>Welcome to Pokemon World</h1>
            <Link to='/home'>
                <h2>Start Adventure</h2>
            </Link>
        </div>
    )
}

export default LandingPage