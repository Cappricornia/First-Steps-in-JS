class Cat {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    meow() {
        console.log(`${this.name}, age ${this.age} says Meow`);
    }
}

function createCats(catArr) {
    for (const catElement of catArr) {
        const [name, age] = catElement.split(' ');
        const cat = new Cat(name, parseInt(age));
        cat.meow();
    }
}

const catArray = ['Mellow 2', 'Tom 5', 'Candy 1', 'Poppy 3', 'Nyx 2'];
createCats(catArray);
