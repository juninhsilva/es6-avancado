class app {
    constructor() {
        this.bind();
    }

    bind() {
        document.querySelector('.add-button').addEventListener('click', () => {
            this.handleClick(1);
        });

        document.querySelector('.sub-button').addEventListener('click', () => {
            this.handleClick(-1);
        });
    }

    handleClick(v) {
        const counterE1 = document.querySelector('.counter');
        const value = parseInt(counterE1.innerText);

        counterE1.innerText = value + v;
    }
}

new app();