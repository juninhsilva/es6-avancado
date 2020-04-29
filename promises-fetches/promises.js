//promises
const doSomethingPromise = () => new Promise((resolve, reject) => {
    setTimeout(function () {
        resolve('First data')
    }, 1000);
});

const doOtherSomethingPromise = () => new Promise((resolve, reject) => {
    setTimeout(function () {
        resolve('Second data')
    }, 1000);
});

//pending, fulfilled, rejected
Promise.all([doSomethingPromise(), doOtherSomethingPromise()]).then((data) => {
    console.log(data[0].split(''));
    console.log(data[1].split(''));
}).catch(err => {
    console.log(err);
});

Promise.race([doSomethingPromise(), doOtherSomethingPromise()]).then(data => {
    console.log("Race: ", data);
});