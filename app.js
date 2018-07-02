new Vue({
    el: '#app',
    data: {
        todos: [],
        newTodo: '' 
    },
    
    created(){
        this.todos.push("Do not forget to call mommy!");
        this.todos.push("Buy some cereal!");
        this.todos.push("Get the car washed!");
    },

    methods: {
        addTodo(){
            let newTodo = this.newTodo;
            this.todos.push(newTodo);
            this.newTodo = '';
        },

        deleteTodo(index){
            this.todos.splice(index, 1);
        }
    }
})