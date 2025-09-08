const toDoLists = {
    tasks: [{
        id: 324234,
        title: "Купить хлеб",
        priority: 1,
    }],
    findTask: function(id) {
        const task = this.tasks.find(task => task.id === id);
        if (!task) {
            console.log("Задача не найдена");
            return null;
        }
        return task;
    },
    addTask: function(task) {
        const id = new Date().getTime();
        this.tasks.push({...task, id});
    },
    deleteTask: function(id) {
        this.tasks = this.tasks.filter(task => task.id !== id);
    },
    updateTask: function(id, task) {
        const index = this.tasks.findIndex(task => task.id === id);
        if (index === -1) {
            console.log("Задача не найдена");
            return;
        }
        this.tasks[index] = {...this.tasks[index], ...task};
    },
    sortTaskToPriority: function() {
        this.tasks.sort((a, b) => a.priority - b.priority);
    }
}