let addTask = document.querySelector("#addTask");
let ul = document.querySelector("ul");
let input = document.querySelector("input");

// For adding task to Todo List.
addTask.addEventListener("click", function() {
    let taskNameInput = document.getElementById('task-name');
    if(taskNameInput) {
        let item = document.createElement("li");
        item.innerText = taskNameInput.value;
        let delBtn = document.createElement("button");
        delBtn.innerText = "Remove";
        delBtn.classList.add("delete");
        ul.append(item);
        item.append(delBtn);
        taskNameInput.value = "";
    }
});

// // for removing task;
// let delBtns = document.querySelectorAll(".delete");
// for(delBtn of delBtns) {
//     delBtn.addEventListener("click", function() {
//         this.parentElement.remove();
//     });
// }

// Event Delegation
ul.addEventListener("click", function(event) {
    if(event.target.nodeName == "BUTTON") {
        event.target.parentElement.remove();
    }
});