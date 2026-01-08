const addBtn = document.getElementById("addBtn");
const todo = document.getElementById("todo").value;
const order = document.getElementById("order").value;
const saveBtn = document.getElementById("addTodo");
const contForm = document.getElementById("con");
const todoList =[];

addBtn.addEventListener("click",()=>{
    if(contForm.classList.contains("hidden")){
        contForm.classList.remove("hidden");
        contForm.classList.add("flex");
    }
    else{
        contForm.classList.remove("flex");
        contForm.classList.add("hidden")
    }
})