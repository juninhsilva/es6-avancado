//cria um novo array com os itens q passam no teste
const pets = [
    {
        name: 'Leia',
        type: 'dog',
        age: 5
    },
    {
        name: 'Kiara',
        type: 'dog',
        age: 3
    }, {
        name: 'Yami',
        type: 'dog',
        age: 6
    },
    {
        name: 'Raí',
        type: 'dog',
        age: 19
    },
    {
        name: 'Meg',
        type: 'dog',
        age: 2
    },
    {
        name: 'Chen',
        type: 'cat',
        age: 14
    }
];

const fiveYears = pets.filter((pet) => {
    return pet.age <= 5;
});

const fiveYearsOrMore = pets.filter((pet) => {
    return pet.age >= 5;
});

console.log(fiveYears);
console.log(fiveYearsOrMore);