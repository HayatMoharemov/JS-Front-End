function piccolo (input) {
    let parking = new Set();

    for (let commandLine of input) {
        let [command, carPlate] = commandLine.split(', ')

        if (command === 'IN') {
            parking.add(carPlate)
        } else if (command === 'OUT') {
            parking.delete(carPlate)
        }
    }
    let sortedParking = [...parking].sort()
    if (parking.size > 0) {
        console.log(sortedParking.join('\n'))
    } else {
        console.log('Parking Lot is Empty')
    }
        
}

piccolo(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'OUT, CA1234TA']
)
