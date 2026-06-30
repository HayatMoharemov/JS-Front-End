function priceCalculator(day, age){
    let price;

    if (day === 'Weekday'){
        if (age >= 0 && age <= 18) {
            price = 12
        } else if (age > 18 && age <= 64) {
            price = 18
        } else if (age > 64 && age <= 122) {
            price = 12
        }
    } else if (day === 'Weekend') {
        if (age >= 0 && age <= 18) {
            price = 15
        } else if (age > 18 && age <= 64) {
            price = 20
        } else if (age > 64 && age <= 122) {
            price = 15
        }
    } else if (day === 'Holiday') {
        if (age >= 0 && age <= 18) {
            price = 5
        } else if (age > 18 && age <= 64) {
            price = 12
        } else if (age > 64 && age <= 122) {
            price = 10
        }
    }

    if (price !== undefined ) {
        console.log(`${price}$`)
    } else {
        console.log('Error!')
    }
}

priceCalculator('Weekday', 42)
priceCalculator('Holiday' -12)
priceCalculator('Holiday', 15)