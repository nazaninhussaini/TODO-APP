const contenier = document.getElementById("cont");
const AddButton = document.getElementById("addbtn");
const contModel = document.getElementById("cont-model");
const todoList = [];
AddButton.addEventListener("click",()=>{
    if(!contModel.classList.contains("toggleForm")){
        contModel.classList.add("toggleForm")
        AddButton.textContent = "Hide Todo"
    }
    else{
        contModel.classList.remove("toggleForm");
        AddButton.textContent = "Add Todo";
    }
})