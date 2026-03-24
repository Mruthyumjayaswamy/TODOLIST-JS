let inputBox=document.getElementById("input-box");
let addBtn =document.getElementById("add-btn");
let todoList=document.querySelector("ul");
let globalE;
function handleAdd(){
    let inputBoxValue=inputBox.value.trim();
    if(inputBoxValue.length>0){
        if(addBtn.innerHTML==="Save"){
            globalE.target.previousElementSibling.innerHTML=inputBoxValue;
            addBtn.innerHTML="Add";
        }else{
        let list=document.createElement("li");
        let task=document.createElement("p");
        task.innerHTML=inputBoxValue;

        let editBtn=document.createElement("button");
        editBtn.innerHTML="Edit";
        editBtn.id = "edit-btn";

        let deleteBtn=document.createElement("button");
        deleteBtn.innerHTML="Delete";
        deleteBtn.id = "delete-btn";

        list.append(task,editBtn,deleteBtn);
        todoList.append(list);
    }
}else{
    alert("Add a task....")
}
inputBox.value="";
}

function handleUpdate(e){
    if(e.target.innerHTML==="Delete"){
        e.target.parentElement.remove();
    }else if(e.target.innerHTML==="Edit"){
        inputBox.value = e.target.previousElementSibling.innerHTML;
        addBtn.innerHTML = "Save";
        globalE=e;
    }
}

addBtn.addEventListener("click", handleAdd);
todoList.addEventListener("click", handleUpdate);
// addBtn.addEventListener("click",handleUpdate);
// addBtn.addEventListener("click", handleAdd);