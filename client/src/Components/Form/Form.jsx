import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addTypes, createPokemon } from "../../redux/action"
import validation from './Validation'
import styles from './Form.module.css'


const Form = ()=> {
    const dispatch = useDispatch()
    const types = useSelector(state => state.allTypes)

    useEffect(()=>{
        dispatch(addTypes())
    },[dispatch])
    
    const [ inputs, setInputs ] = useState({
        name: '',
        life: '',
        defense: '',
        attack: '',
        speed: '',
        weight: '',
        height: '',
        image: '',
        types: []
    })

    const [ errors, setErrors ] = useState({})

    const handleChange = (event) => {
        if(event.target.name === 'type1' ) {
            let types = [...inputs.types]
            types[0] = event.target.value
            setInputs ({...inputs, types: types})
        }
        else if(event.target.name === 'type2' ) {
            let types = [...inputs.types]
            types[1] = event.target.value
            setInputs ({...inputs, types: types})
        }
        else setInputs({
            ...inputs,
            [event.target.name] :  event.target.value
        })

        setErrors(validation(inputs))
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        if(Object.entries(errors).length === 0){
            dispatch(createPokemon(inputs))
            setInputs({
                name: '',
                life: '',
                defense: '',
                attack: '',
                speed: '',
                weight: '',
                height: '',
                image: '',
                types: []
            })  
        }
        
    }


    return <div className={styles.divPage}>
        <form onSubmit={handleSubmit} className={styles.divForm}>
            <h2 className={styles.title}>Create your Pokemon!!</h2>
            <label className={styles.label}>Name </label>
            <input type="text" name="name" onChange={handleChange} value={inputs.name} className={styles.input} placeholder="Enter name" autoComplete="off"/>
            {errors.name && <p className={styles.errors}>{errors.name}</p>}
            <label className={styles.label}>HP</label>
            <input type="number" name="life" onChange={handleChange} value={inputs.life} className={styles.input} placeholder="Enter HP"/>
            {errors.life && <p className={styles.errors}>{errors.life}</p>}
            <label className={styles.label}>Defense</label>
            <input type="number" name="defense" onChange={handleChange} value={inputs.defense} className={styles.input} placeholder="Enter defense"/>
            {errors.defense && <p className={styles.errors}>{errors.defense}</p>}
            <label className={styles.label}>Attack</label>
            <input type="number" name="attack" onChange={handleChange} value={inputs.attack} className={styles.input} placeholder="Enter attack"/>
            {errors.attack && <p className={styles.errors}>{errors.attack}</p>}
            <label className={styles.label}>Speed</label>
            <input type="number" name="speed" onChange={handleChange} value={inputs.speed} className={styles.input} placeholder="Enter speed"/>
            {errors.speed && <p className={styles.errors}>{errors.speed}</p>}
            <label className={styles.label}>Weight</label>
            <input type="number" name="weight" onChange={handleChange} value={inputs.weight} className={styles.input} placeholder="Enter weight"/>
            {errors.weight && <p className={styles.errors}>{errors.weight}</p>}
            <label className={styles.label}>Height</label>
            <input type="number" name="height" onChange={handleChange} value={inputs.height} className={styles.input} placeholder="Enter height"/>
            {errors.height && <p className={styles.errors}>{errors.height}</p>}
            <label className={styles.label}>Image url</label>
            <input type="text" name="image" onChange={handleChange} value={inputs.image} className={styles.input} placeholder="Enter image url"/>
            {errors.image && <p className={styles.errors}>{errors.image}</p>}
            <label className={styles.label}>Types <select  name="type1" onChange={handleChange} className={styles.select}>
                <option >Select Type</option>
                {
                    types?.map(type => {
                        return (
                            <>
                                <option key={type.id} value={type.name}>{type.name}</option>
                            </>                     
                        )
                    })
                }
            </select>
            <select name="type2" onChange={handleChange} className={styles.select}>
                <option >Select Type</option>
                {
                    types?.map(type => {
                        return (
                            <>
                                <option key={type.id} value={type.name}>{type.name}</option>
                            </>                     
                        )
                    })
                }
            </select>
            </label>
            
            {errors.types && <p className={styles.errors}>{errors.types}</p>}
            <button type="submit" name="submit" className={styles.btnSubmit}>Create Pokemon</button>
        </form>
    </div>
    
    
}

export default Form