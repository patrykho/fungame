
import * as login from '../constants/login.constants'
const validateForm = (name, pass) => {

    let valid = false

    if (name === login.NAME && pass === login.PASSWORD) {
        valid = true
    }
    return valid

}


export default validateForm