const fs = require('fs');

class Todo {
    constructor(id, task, status) {
        this.id = id;
        this.task = task;
        this.status = status || false;
    }
    static getTodos() {
        let data = JSON.parse(fs.readFileSync('./data.json', 'utf8'))
        return data.map(el => {
            const { id, task, status } = el;
            return new Todo(id, task, status)
        })
    }
    static show() {
        let todos = this.getTodos();
        // console.log(todos);
        return todos
    }
    static add(todo) {
        let todos = this.getTodos();
        let id = todos[todos.length - 1].id + 1;
        const [task] = todo;

        todos.push(new Todo(id, task))
        // console.log(todos);
        this.save(todos)
        console.log(`"${task}" has been saved.`)
    }
    static update(todo) {
        let todos = this.getTodos()
        let id = Number(todo[0]);
        let task = todo[1];

        todos = todos.map(todo => {
            if (todo.id === id) {
                todo.task = task;
                return todo
            } else {
                return todo
            }
        })
        this.save(todos)
        console.log(`${id} has been updated`)
    }
    static delete(todo) {
        let todos = this.getTodos();
        let id = +todo[0]
        todos = todos.filter(todo => todo.id !== id)
        this.save(todos)

        console.log(`${id} has been removed`)
    }
    static save(data) {
        fs.writeFileSync('./data.json', JSON.stringify(data, null, 3))
    }
}
module.exports = Todo