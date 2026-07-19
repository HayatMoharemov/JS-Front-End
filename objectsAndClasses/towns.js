function towns (strArr) {


    for (let city of strArr) {
        let[town, latitude, longitude] = city.split('|').map(x => x.trim())
        
        let result = {
            town,
            latitude: Number(latitude).toFixed(2),
            longitude: Number(longitude).toFixed(2)
        }
        console.log(result)
    }
}

towns(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']
)