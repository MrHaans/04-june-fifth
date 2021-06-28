class TodoView {
    static help(){
        console.log(`node index.js help`);
        console.log(`node index.js show`);
        console.log(`node index.js add <task_name>`);
        console.log(`node index.js delete <task_id>`);
        console.log(`node index.js update <task_id> <task_name>`);
    }
    static show(todos){
        console.log(`Todos List : `)
        todos.forEach(todo => {
            const {id, task, status} = todo;
            if(status){
                console.log(`${id}. [x] ${task} .`)
            }else {
                console.log(`${id}. [ ] ${task} .`)

            }
        })
    }
    static message(msg){
        console.log(msg)
    }
}

module.exports = TodoView;