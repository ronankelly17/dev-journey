console.log("JS Connected");

let button = document.getElementById("submitButton");
let input = document.getElementById("taskInput");
let taskList = document.getElementById("taskList");

button.addEventListener("click", function() {
    

    if (input.value.trim() != "") {
        let newTask = document.createElement("li");
        newTask.textContent = input.value;
        taskList.appendChild(newTask);
        input.value = "";
        console.log("Button clicked");
        console.log(input.value);
    } else {
        console.log("Invalid input");
        return;
    }
    
});
