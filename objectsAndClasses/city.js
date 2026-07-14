function city (obj){
    let entries = Object.entries(obj);
    
    for (let [key, value] of entries) {
        console.log(`${key} -> ${value}`)
    }
}

