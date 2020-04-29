//async-await
const asyncTimer = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Data');
    }, 1000);
});

const simpleFunction = async () => {
    const data = await asyncTimer();
    return data;
}

simpleFunction()
    .then(data => {
        console.log(data);
    }).catch(err => {
        console.log(err);
    });