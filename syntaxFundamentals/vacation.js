function vacation(groupSize, groupType, dayOfTheWeek){
    let discount = 0;
    let price = 0;
    let finalPrice = 0;

    if (groupType === 'Students'){
        if (groupSize >= 30){
            discount += 0.15
        } 
    } else if (groupType === 'Business'){
        if (groupSize >= 100) {
            groupSize -= 10
        }
    } else if (groupSize >= 10 && groupSize <= 20){
        discount += 0.05
    }

    if (dayOfTheWeek === 'Friday'){
        if (groupType === 'Students'){
            price = 8.45 * groupSize
        } else if (groupType === 'Business'){
            price = 10.90 * groupSize
        } else if (groupType === 'Regular'){
            price = 15 * groupSize
        }
    } else if (dayOfTheWeek === 'Saturday'){
        if (groupType === 'Students'){
            price = 9.80 * groupSize
        } else if (groupType === 'Business'){
            price = 15.60 * groupSize
        } else if (groupType === 'Regular'){
            price = 20 * groupSize
        }
    } else if (dayOfTheWeek === 'Sunday'){
        if (groupType === 'Students'){
            price = 10.46 * groupSize
        } else if (groupType === 'Business'){
            price = 16 * groupSize
        } else if (groupType === 'Regular'){
            price = 22.50 * groupSize
        }
    }

    finalPrice = price * (1 - discount)
    console.log(`Total price: ${finalPrice.toFixed(2)}`)
}
