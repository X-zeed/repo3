// Function to create a new todo item
function createNewTodo() {
    var todoText = prompt("Enter new task:");
    if (todoText !== null && todoText.trim() !== "") {
        // Create a new todo item element
        var todoItem = $("<div>").text(todoText).addClass("todo");
        // Add click event listener to the todo item
        todoItem.on("click", function() {
            // Ask for confirmation before deleting the task
            var confirmDelete = confirm("Are you sure you want to delete this task?");
            if (confirmDelete) {
                // Remove the todo item if confirmed and save the updated list
                $(this).remove();
                saveTodoList();
            }
        });
        // Prepend the new todo item to the todo list
        $("#ft_list").prepend(todoItem);
        // Save the updated todo list
        saveTodoList();
    }
}

// Function to save the todo list as a cookie
function saveTodoList() {
    // Initialize an empty array to store todo items
    var todoArray = [];
    // Iterate over each todo item element
    $(".todo").each(function() {
        // Add the text of each todo item to the array
        todoArray.push($(this).text());
    });
    // Save the todo list as a cookie
    document.cookie = "todoList=" + JSON.stringify(todoArray);
}

// Function to load the todo list from a cookie
function loadTodoList() {
    // Split the document's cookies into an array
    var cookies = document.cookie.split("; ");
    // Find the todo list cookie
    var todoCookie = cookies.find(function(cookie) {
        return cookie.startsWith("todoList=");
    });
    // If todo list cookie exists
    if (todoCookie) {
        // Parse the todo list from the cookie
        var todoArray = JSON.parse(todoCookie.split("=")[1]);
        // Get the todo list container element
        var ftList = $("#ft_list");
        // Iterate over each todo item in the array
        todoArray.forEach(function(todoText) {
            // Create a new todo item element
            var todoItem = $("<div>").text(todoText).addClass("todo");
            // Add click event listener to the todo item
            todoItem.on("click", function() {
                // Ask for confirmation before deleting the task
                var confirmDelete = confirm("Are you sure you want to delete this task?");
                if (confirmDelete) {
                    // Remove the todo item if confirmed and save the updated list
                    $(this).remove();
                    saveTodoList();
                }
            });
            // Append the todo item to the todo list
            ftList.append(todoItem);
        });
    }
}

// Load todo list when the page loads
$(document).ready(loadTodoList);
