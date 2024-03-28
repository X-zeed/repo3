// Function to create a new todo item
function createNewTodo() {
    var todoText = prompt("Enter new task:");
    if (todoText !== null && todoText.trim() !== "") {
        var todoItem = document.createElement("div");
        todoItem.textContent = todoText;
        todoItem.classList.add("todo");
        todoItem.onclick = function() {
            var confirmDelete = confirm("Are you sure you want to delete this task?");
            if (confirmDelete) {
                this.remove();
                saveTodoList();
            }
        };
        var ftList = document.getElementById("ft_list");
        ftList.insertBefore(todoItem, ftList.firstChild);
        saveTodoList();
    }
}

// Function to save the todo list as a cookie
function saveTodoList() {
    var todoList = document.querySelectorAll(".todo");
    var todoArray = [];
    todoList.forEach(function(todo) {
        todoArray.push(todo.textContent);
    });
    document.cookie = "todoList=" + JSON.stringify(todoArray);
}

// Function to load the todo list from a cookie
function loadTodoList() {
    var cookies = document.cookie.split("; ");
    var todoCookie = cookies.find(function(cookie) {
        return cookie.startsWith("todoList=");
    });
    if (todoCookie) {
        var todoArray = JSON.parse(todoCookie.split("=")[1]);
        var ftList = document.getElementById("ft_list");
        todoArray.forEach(function(todoText) {
            var todoItem = document.createElement("div");
            todoItem.textContent = todoText;
            todoItem.classList.add("todo");
            todoItem.onclick = function() {
                var confirmDelete = confirm("Are you sure you want to delete this task?");
                if (confirmDelete) {
                    this.remove();
                    saveTodoList();
                }
            };
            ftList.appendChild(todoItem);
        });
    }
}

// Load todo list when the page loads
window.onload = loadTodoList;// Function to create a new todo item
function createNewTodo() {
    var todoText = prompt("Enter new task:");
    if (todoText !== null && todoText.trim() !== "") {
        var todoItem = document.createElement("div");
        todoItem.textContent = todoText;
        todoItem.classList.add("todo");
        todoItem.onclick = function() {
            var confirmDelete = confirm("Are you sure you want to delete this task?");
            if (confirmDelete) {
                this.remove();
                saveTodoList();
            }
        };
        var ftList = document.getElementById("ft_list");
        ftList.insertBefore(todoItem, ftList.firstChild);
        saveTodoList();
    }
}

// Function to save the todo list as a cookie
function saveTodoList() {
    var todoList = document.querySelectorAll(".todo");
    var todoArray = [];
    todoList.forEach(function(todo) {
        todoArray.push(todo.textContent);
    });
    document.cookie = "todoList=" + JSON.stringify(todoArray);
}

// Function to load the todo list from a cookie
function loadTodoList() {
    var cookies = document.cookie.split("; ");
    var todoCookie = cookies.find(function(cookie) {
        return cookie.startsWith("todoList=");
    });
    if (todoCookie) {
        var todoArray = JSON.parse(todoCookie.split("=")[1]);
        var ftList = document.getElementById("ft_list");
        todoArray.forEach(function(todoText) {
            var todoItem = document.createElement("div");
            todoItem.textContent = todoText;
            todoItem.classList.add("todo");
            todoItem.onclick = function() {
                var confirmDelete = confirm("Are you sure you want to delete this task?");
                if (confirmDelete) {
                    this.remove();
                    saveTodoList();
                }
            };
            ftList.appendChild(todoItem);
        });
    }
}

// Load todo list when the page loads
window.onload = loadTodoList;