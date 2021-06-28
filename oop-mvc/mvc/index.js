const command = process.argv[2];
const params = process.argv.slice(3)
const TodoController = require('./controller/TodoController')
// console.log(command);
// console.log(params);

switch (command) {
    case 'help':
        TodoController.help()
        break;
    case 'show':
        TodoController.show()
        break;
    case 'add':
        TodoController.add(params)
        break;
    case 'update':
        TodoController.update(params)
        break;
    case 'delete':
        TodoController.delete(params)
        break;
    default:
        TodoController.message("Masukkan command yang sesuai, trims!")
        break;
}