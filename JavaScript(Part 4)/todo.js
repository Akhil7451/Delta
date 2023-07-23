let todo = [];
let req = prompt('Please enter your request');
while(true) {
    if(req == "quit") {
        console.log("Quitting app.");
        break;
    }
    if(req == "list") {
        console.log("----------------");
        for(let i=0; i<todo.length; i++) {
            console.log(i+1, todo[i]);
        }
        console.log("----------------");
    } else if(req == "add") {
        let taskName = prompt(`Enter the Task you want to add : `);
        todo.push(taskName);
        console.log("Task added.");
    } else if(req == "delete") {
        let indexToDelete = prompt("Which item do you wish to delete?");
        todo.splice(indexToDelete, 1);
        console.log("Task deleted.");
    } else {
        console.log("Wrong request.");
    }
    req = prompt('Please enter your request');
}
console.log(req);