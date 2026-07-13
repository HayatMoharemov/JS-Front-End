function orderCalc(product, qty) {
    let prices = {
        coffee: 1.50,
        water: 1.00,
        coke: 1.40,
        snacks: 2.00
    }

    return (prices[product] * qty).toFixed(2)
}

console.log(orderCalc('coffee', 2))