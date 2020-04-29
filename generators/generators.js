//generators
//funções com pausa e volta de valores
function* hello() {
    console.log('hello');
    yield 1;
    console.log('from');
    yield 2;
    console.log('function');
}

const it = hello();
console.log(it.next());

function* naturalNumbers() {
    let i = 0;
    while (true) {
        yield i;
        i++;
    }
}

const natural = naturalNumbers();
for (let index = 0; index <= 10; index++) {
    console.log(natural.next());
}

const objIterator = {
    values: [1, 2, 3, 4],
    *[Symbol.iterator]() {
        for (let index = 0; index < this.values.length; index++) {
            yield this.values[index];
            
        }
    }
}

for (let iterator of objIterator) {
    console.log(iterator);
}