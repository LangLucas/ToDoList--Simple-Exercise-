
const newTask = document.getElementById("newTask");
const add = document.getElementById("add");
const mainBox = document.querySelector("#mainBox");
let id = 0
const listTaks = [];


function addTask(task,id,deleteTask){
    if(deleteTask){return}

    const template = `<div class="box">
                        <div class="divLeft">
                            <input type="checkbox" name="ticket_type" value="checkbox" />
                            <label for="">${task}</label>
                        </div>
                        <div class="divRight">
                            <button class="trash"><i class="fa-solid fa-trash" data="delete" id="${id}"></i></button>
                        </div>
                    </div>`;
    
    mainBox.insertAdjacentHTML("afterbegin", template)
}

function deleteTask(element){
    const box = element.parentNode.parentNode.parentNode
    mainBox.removeChild(box)
    listTaks[element.id].deleteTask = true
}



add.addEventListener("click", () => {
    const task = newTask.value
    if(task){
        addTask(task,id,false)
        listTaks.push({
            nameTask: task,
            id : id,
            deleteTask: false
        })
    }
    newTask.value = ""
    id++
})

document.addEventListener("keyup", function(event){
    if(event.key=="Enter"){
        const task = newTask.value
        if(task){
            addTask(task,id,false)
            listTaks.push({
                nameTask: task,
                id : id,
                deleteTask: false
            })
        }
    newTask.value = ""
    id++

    }
    
})

mainBox.addEventListener("click",function(event){
    const element = event.target
    const elementData = element.attributes.data.value
    if(elementData ==="delete"){
        deleteTask(element)
    }
    
})



/* --------- */
const h4Date = document.querySelector("#date")
const time = new Date()
h4Date.innerHTML = time.toLocaleDateString("es-AR",{weekday:"long",month:"short",day:"numeric"})
/* --------- */