function catsManager (strArr) {
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age
        }

        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
            
        }
    }

    for (let catStr of strArr) {
        let [name, age] = catStr.split(' ');
        let catObj = new Cat(name, age);
        catObj.meow()
    }
}

