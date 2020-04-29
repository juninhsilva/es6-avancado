//symbols
const id = Symbol('123');
console.log(id);

const obj = {
    [id]: 'Hello'
}

console.log(obj);
console.log(Object.keys(obj));
console.log(Object.getOwnPropertySymbols(obj));

//well-known symbols
const obj2 = {
    [Symbol.iterator]() {

    }
}

const arr = [1, 2, 3, 4];
for (let value of arr) {
    console.log(value);
}

const arr2 = [...arr];
console.log(arr2);

console.log(arr[Symbol.iterator]().next());

const objIterator = {
    values: [1, 2, 3, 4],
    [Symbol.iterator]() {
        let i = 0;
        return {
            next: () => {
                i++;
                return {
                    value: this.values[i - 1],
                    done: i > this.values.length
                }
            },
        }
    }
}

for (const iterator of objIterator) {
    console.log(iterator);
}