//old style
//functions
var sumOldStyle = function (a, b) { return a + b };
console.log(sumOldStyle(1, 2));

var objContext = {
    showContext: function showContext() {
        setTimeout(function () {
            console.log(this);
        }, 1000);
    },
    log: function log(value) {
        console.log(value);
    }
}

objContext.showContext();

//objects
var obj = {
    id: 1,
    name = 'Juninh Silva'
};
console.log(obj.id + obj.name);

//constructor functions
function Car() {
    this.color = 'Red';
    this.ports = 2;
}

console.log(new Car());

//hoishing
log('Testando hoishing');
function log(value) {
    console.log(value);
}

//es6 style
//arrow functions
var sumArrowStyle = (a, b) => a + b;
console.log(sumArrowStyle(2, 3));

var show = a => a;
console.log(show('Oi'));

//objects
var createObject = () => ({
    id: 1,
    name: 'Gilmar'
});
console.log(createObject().id + createObject().name);

//constructor functions
var Moto = () => {
    this.color = 'Gray';
    this.wheelSize = 17;
}
//não consegue instanciar com new

//arrow functions não aceitam hoishing
logArrow('Teste com Arrow');
var logArrow = value => console.log(value);

var objContextArrow = {
    showContext: function showContext() {
        setTimeout(() => {
            this.log('after time')
        }, 1000);
    },
    log: function log(value) {
        console.log(value);
    }
}