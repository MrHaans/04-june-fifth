const Todo = require('../model/Todo')
const TodoView = require('../view/TodoView')

class TodoController {
    static help(){
        TodoView.help()
    }
    static show(){
        let result = Todo.show()
        TodoView.show(result)
    }
    static add(todo){
        Todo.add(todo)
    }
    static update(todo){
        Todo.update(todo)
    }
    static delete(todo){
        Todo.delete(todo)
    }
    static message(msg){
        TodoView.message(msg)
    }
}

module.exports = TodoController