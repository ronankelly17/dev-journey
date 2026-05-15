console.log("JS Connected");

let button = document.getElementById("submitButton");
let input = document.getElementById("taskInput");
let taskList = document.getElementById("taskList");

button.addEventListener("click", function() {
    let newTask = document.createElement("li");
    newTask.textContent = input.value;
    taskList.appendChild(newTask);
    console.log("Button clicked");
    console.log(input.value);
});
