const Validation = (inputs) => {
    let errors = {}

    const regexUrl = /^(ftp|http|https):\/\/[^ "]+$/
    const regexOnlyLetters = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/

    if(!inputs.name.length) errors.name = 'Name cannot be empty'
    else if(!regexOnlyLetters.test(inputs.name)) errors.name = 'Name can only have letters'

    if(inputs.attack <= 0 || inputs.attack > 200) errors.attack = 'Attack should be greater than 0 and less than 200'
    if(inputs.life <= 0 || inputs.life > 500) errors.life = 'Life should be greater than 0 and less than 500'
    if(inputs.defense <= 0 || inputs.defense > 150) errors.defense = 'Defense should be greater than 0 and less than 150'
    if(inputs.speed <= 0 || inputs.speed > 150) errors.speed = 'Speed should be greater than 0 and less than 150'
    if(inputs.weight <= 0 || inputs.weight > 1500) errors.weight = 'Weight should be greater than 0 and less than 1500'
    if(inputs.height <= 0 || inputs.height > 60) errors.height = 'Height should be greater than 0 and less than 60'

    if(!inputs.types.length) errors.types = 'Insert at least one type'

    if(!regexUrl.test(inputs.image)) errors.image = 'Insert a validate URL'

    return errors
}

export default Validation