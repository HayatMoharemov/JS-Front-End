function fruitShop(fruitType, fruitWeight, pricePerKg){
    console.log(`I need $${((fruitWeight/1000)*pricePerKg).toFixed(2)} to buy ${(fruitWeight / 1000).toFixed(2)} kilograms ${fruitType}.`)
}

fruitShop('apple', 1563, 2.35)