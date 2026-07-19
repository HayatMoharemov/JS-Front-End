function storeRevision(stocksArray, orderArray) {

    let inStockQty = {};
    let thresholdStocks = stocksArray.length
    let productOrderLength = orderArray.length

    for(let index = 0; index<thresholdStocks; index +=2){
        let currentValue = stocksArray[index]
        inStockQty[currentValue] = Number(stocksArray[index + 1])
    }
    
    for(let i = 0; i < productOrderLength; i+=2){
    let currentProduct = orderArray[i]

        if(!inStockQty.hasOwnProperty(currentProduct)){
            inStockQty[currentProduct] = 0
        }

        inStockQty[currentProduct] += Number(orderArray[i + 1])
    }

    let entries = Object.entries(inStockQty)

    for(let [key, value] of entries) {
        console.log(`${key} -> ${value}`)
    }
}

storeRevision(
    ['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
    ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']
)