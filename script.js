function addTask(){
    var taskText = document.getElementById("taskInput").value;
    if(taskText ===""){
        alert("Please enter a task!");
        return;
    }
    var taskList = document.getElementById("taskList");
    var li =document.createElement("li");
    li.innerHTML = taskText;
    li.onclick = function(){
        li.classList.toggle("completed");
    };
    var deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "Delete";
    deleteBtn.className = "delete-btn";

    deleteBtn.onclick = function(event){
        event.stopPropagation();
        taskList.removeChild(li);
    };
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
    document.getElementById("taskInput").value ="";
    document.getElementById("taskInput").focus();
}