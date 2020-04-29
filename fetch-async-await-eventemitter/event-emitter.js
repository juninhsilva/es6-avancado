const EventEmitter = require('events');

class User extends EventEmitter {
    userLog(data) {
        setTimeout(() => {
            this.emit('User Log', data);
        }, 1000);
    }
}

const user = new User();
user.on('User Log', data => {
    console.log(data);
});

user.userLog({ user: 'Juninh Silva' });
user.userLog({ user: 'Dutinha' });