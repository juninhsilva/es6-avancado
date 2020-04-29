//cria um novo array com o mesmo número de itens q o anterior, transformando os dados
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

const transform = pets.map((pet) => {
    return pet.name;
});

console.log(transform);