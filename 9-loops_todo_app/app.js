const app = Vue.createApp({
    data() {
        return {
            todoList: [
                {id: 1, text: "First Todo Vue 1", completed:false},
                {id: 2, text: "First Todo Vue 2", completed:false},
                {id: 3, text: "First Todo Vue 3", completed:false},
                {id: 4, text: "First Todo Vue 4", completed:false},
                {id: 5, text: "First Todo Vue 5", completed:false},
                {id: 6, text: "First Todo Vue 6", completed:false},
            ],
            todo:""
        }
    },
    methods: {
        addToDo(event) {
            console.log("works")
            if(this.todo !== "") {
                this.todoList.push({
                    id: new Date().getTime(),
                    text: this.todo,
                    completed: false
                })
            }
        },
        deleteTodo(todo) {
            if(window.confirm(`Are you sure you want to delete ${todo.text}`)) {
                this.todoList = this.todoList.filter(item => item.id != todo.id)
            }
            console.log(todo)
        }
    },
    computed:{
        countCompleted() {
          return `Tamamlanmış: ${this.todoList.filter(item => item.completed).length}`
        },
        countUncompleted() {
          return `Tamamlanmamış: ${this.todoList.filter(item => !item.completed).length}`
        }
    }
}).mount("#app")