function passwordValidator(password) {
    let isValid = true
    let alNumOnly = /^[A-Za-z0-9]+$/
    let digits = password.match(/\d/g)

    if ((password.length < 6) || (password.length > 10)){
        console.log('Password must be between 6 and 10 characters')
        isValid = false
    }
    if (!alNumOnly.test(password)) {
        console.log('Password must consist only of letters and digits')
        isValid = false
    }
    if (!digits || digits.length < 2) {
        console.log('Password must have at least 2 digits')
        isValid = false
    } if (isValid) {

        console.log('Password is valid')

    }
}


passwordValidator('logIn')
passwordValidator('MyPass123')
passwordValidator('Pa$s$s')