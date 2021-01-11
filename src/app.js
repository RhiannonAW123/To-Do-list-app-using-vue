import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
    new Vue({
        el: "#app",
        data: {
            todos: [
                {taskName: 'Go Shopping', isPriority: true},
                {taskName: 'Wash Clothes', isPriority: false},
                {taskName: 'Clean Car', isPriority: false}
            ],
            newTask: ''
        },
        methods: {
            saveNewTask: function(){
                this.todos.push ({taskName: this.newTask, isPriority: "priority"});
                this.newTask = '';
            }
        }
    })
});