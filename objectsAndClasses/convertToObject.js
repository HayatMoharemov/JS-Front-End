function objectConverter (jsonString) {
    let personObject = JSON.parse(jsonString)

    let entries = Object.entries(personObject)

    for(let [key, value] of entries) {
        console.log(`${key}: ${value}`)
    }
}