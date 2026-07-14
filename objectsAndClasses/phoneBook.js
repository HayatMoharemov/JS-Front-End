function phoneBook(strArry) {
    let contacts = {};

    for(let contactStr of strArry) {
        let[name, phoneNumber] = contactStr.split(' ');
        contacts[name] = phoneNumber;
    }

    let entries = Object.entries(contacts)

    for (let [key, value] of entries) {
        console.log(`${key} -> ${value}`)
    }
}

phoneBook([
    'Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344']
)