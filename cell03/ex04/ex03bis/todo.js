// Function to create a new todo item
function createNewTodo() {
    var todoText = prompt("Enter new task:");
    if (todoText !== null && todoText.trim() !== "") {
        var todoItem = $("<div>").text(todoText).addClass("todo");
        todoItem.on("click", function() {
            var confirmDelete = confirm("Are you sure you want to delete this task?");
            if (confirmDelete) {
                $(this).remove();
                saveTodoList();
            }
        });
        $("#ft_list").prepend(todoItem);
        saveTodoList();
    }
}

// Function to save the todo list as a cookie
function saveTodoList() {
    var todoArray = [];
    $(".todo").each(function() {
        todoArray.push($(this).text());
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
        var ftList = $("#ft_list");
        todoArray.forEach(function(todoText) {
            var todoItem = $("<div>").text(todoText).addClass("todo");
            todoItem.on("click", function() {
                var confirmDelete = confirm("Are you sure you want to delete this task?");
                if (confirmDelete) {
                    $(this).remove();
                    saveTodoList();
                }
            });
            ftList.append(todoItem);
        });
    }
}

// Load todo list when the page loads
$(document).ready(loadTodoList);
