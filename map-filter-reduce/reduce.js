//reduz o array
//cria um novo array com os itens q passam no teste
const pets = [
    {
        name: 'Leia',
        type: 'dog',
        age: 5,
        weight: 11
    },
    {
        name: 'Kiara',
        type: 'dog',
        age: 3,
        weight: 30
    }, {
        name: 'Yami',
        type: 'dog',
        age: 6,
        weight: 11
    },
    {
        name: 'Raí',
        type: 'dog',
        age: 19,
        weight: 14
    },
    {
        name: 'Meg',
        type: 'dog',
        age: 2,
        weight: 10
    },
    {
        name: 'Chen',
        type: 'cat',
        age: 14,
        weight: 4.5
    }
];

const reduced = pets.reduce((total, pet) => {
    return {
        totalAge: total.totalAge + pet.age,
        totalWeight: total.totalWeight + pet.weight
    }
}, {
    totalAge: 0, totalWeight: 0
});
console.log(reduced);