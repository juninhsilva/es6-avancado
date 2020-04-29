class CustomError extends Error {
    constructor({
        message, data
    }) {
        super(message);
        this.data = data;
    }
}

try {
    const name = 'Juninh';
    const myError = new CustomError({
        message: 'Meu erro',
        data: {
            trype: 'Server error'
        }
    });
    throw myError;
} catch (error) {
    console.log('Error: ', error);
    console.log(error.message);
    console.log(error.data);
} finally {
    console.log('Keep going');
}