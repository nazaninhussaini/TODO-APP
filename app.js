const addBtn = document.getElementById("addBtn");

const saveBtn = document.getElementById("addTodo");
const contForm = document.getElementById("con");
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
})
function saveTodo(){
    const todo = document.getElementById("todo").value;
    const order = document.getElementById("order").value;
    if(todo!==""){


    const saveTodo = {
        myTodo: todo,
        importance: order
    }
    todoList.push(saveTodo);
}
else{
    message = "لطفا یک لیست اضافه نموده و دوباره تلاش کنید.."
}


}