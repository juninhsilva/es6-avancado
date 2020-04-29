//callbacks
function doSomething(callback) {
    setTimeout(function () {
        callback('First data')
    }, 1000);
}

function doOtherSomething(callback) {
    setTimeout(function () {
        callback('Second data')
    }, 1000);
}

function execute() {
    try {
        doSomething(function (data) {
            var processedData = data.split('');

            try {
                doOtherSomething(function (data) {
                    var processedData2 = data.split('');
                    try {
                        setTimeout(function () {
                            console.log(processedData, processedData2);
                        }, 1000);
                    } catch (error) {
                        console.log(error);
                    }
                });
            } catch (error) {
                console.log(error);
            }
        });
    } catch (error) {
        console.log(error);
    }
}

execute();