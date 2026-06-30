function cookingByNumbers(numAsStr, actionOne, actionTwo, actionThree, actionFour, actionFive){
    let actionList = [actionOne, actionTwo, actionThree, actionFour, actionFive];
    let num = Number(numAsStr);

    for (let action of actionList){
        if (action === 'chop'){
            num = num / 2
        } else if (action === 'dice'){
            num = Math.sqrt(num)
        } else if (action === 'spice') {
            num += 1
        } else if (action === 'bake') {
            num = num * 3
        } else if (action === 'fillet') {
            num = num * 0.8
        }
        
        console.log(num)
    }
}

cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet')