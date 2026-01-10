const addBtn = document.getElementById("addBtn");
const error = document.getElementById("error")
const saveBtn = document.getElementById("addTodo");
const contForm = document.getElementById("con");
const todoCont = document.getElementById("todoContanier")
const todoList =[];
let message = "";

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
saveBtn.addEventListener("click",(event)=>{
    event.preventDefault();
    saveTodo();
    todoList.map(todo =>{
        showTodo(todo);
    })
    
    if(message.length>0){
        const h1 = document.createElement("h1");
        h1.textContent = message;
        error.appendChild(h1);
    }
})
function saveTodo(){
    error.innerHTML = "";
    const todo = document.getElementById("todo").value;
    const order = document.getElementById("order").value;
    if(todo!==""){


    const saveTodo = {
        myTodo: todo,
        importance: order,
        completed :false
    }
    todoList.push(saveTodo);
    message = "";
}
else{
    message = "لطفا یک لیست اضافه نموده و دوباره تلاش کنید.."
}


}
function showTodo(todo){
    const div = document.createElement("div");
    contForm.appendChild(div);
    div.classList.add("todoCont");
    const h1 = document.createElement("h1");
    h1.textContent = todo.myTodo;
    const circle = document.createElement("div");
    div.append(circle,h1);
    if(todo.importance === "important"){
        circle.classList.add("im")
    }
    else if(todo.importance === "optional"){
        circle.classList.add("optional")
    }
    else{
        circle.classList.add("normal")
    }
}