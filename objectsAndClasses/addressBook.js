function adressBook (strArr) {
    let adresses = {};

    for(let person of strArr) {
        let [name, adress] = person.split(':')
        adresses[name] = adress
    }

    let entries = Object.entries(adresses).sort((a,b) => a[0].localeCompare(b[0]))

    for (let [key, value] of entries) {
        console.log(`${key} -> ${value}`)
    }
}

adressBook(
    ['Bob:Huxley Rd',
    'John:Milwaukee Crossing',
    'Peter:Fordem Ave',
    'Bob:Redwing Ave',
    'George:Mesta Crossing',
    'Ted:Gateway Way',
    'Bill:Gateway Way',
    'John:Grover Rd',
    'Peter:Huxley Rd',
    'Jeff:Gateway Way',
    'Jeff:Huxley Rd']

)