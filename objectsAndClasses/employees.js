function employees(strArr) {
    strArr.forEach(name => {
        console.log(`Name: ${name} -- Personal Number: ${name.length}`)
    })
}

employees([
'Silas Butler',
'Adnaan Buckley',
'Juan Peterson',
'Brendan Villarreal'
]
)