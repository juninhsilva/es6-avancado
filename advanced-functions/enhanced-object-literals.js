var prop = "DIO";
var obj = {
    prop: prop
}

console.log(obj);

//com ecma6
//vale pra funções tbm
var objES6 = {
    prop
}
console.log(objES6);

var counting = {
    sum(a, b) {
        return a + b;
    }
}

console.log(counting.sum(1, 6));

var name = 'test';
var literal = {
    [name]: 'new'
};

console.log(literal);
