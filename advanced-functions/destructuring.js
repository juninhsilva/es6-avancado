//normal assignment
var arr = ['Apple', 'Banana', 'Orange', ['Tomato']];
var apple = arr[0];
console.log(arr);
console.log(apple);

//destructuring assignment
var [apple2, banana2, orange2, [tomato]] = ['Apple', 'Banana', 'Orange', ['Tomato']];
console.log(apple2, tomato);

var objPerson = {
    name: 'Juninh', age: 30, hair: { color: 'brown' }
}

var { name: name2, age: age2 } = objPerson;
var { hair: { color: hairColor } } = objPerson;
console.log(name2, age2, hairColor);

function sum([a, b] = [0, 0]) {
    var a;
    var b;
    return a + b;
}

console.log(sum([5, 3]));