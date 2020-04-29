items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

; (async function () {
    const promiseFunction = async (element) => {
        return new Promise((resolve, reject) => {
            return resolve(`${element} - promise`);
        });
    }

    const itemMapped = promiseFunction('x');
    console.log(await itemMapped);

    const itemsMappedPromise = items.map(promiseFunction);
    const itemMapped2 = await Promise.all(itemsMappedPromise);
    console.log(itemMapped2);
})();