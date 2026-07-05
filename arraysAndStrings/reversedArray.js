function reverseArray(n, elements) {
    let result = []

    for (let i=0; i<n; i++)
        result.unshift(elements[i])

    console.log(result.join(" "))
}

reverseArray(3, [10, 20, 30, 40, 50])