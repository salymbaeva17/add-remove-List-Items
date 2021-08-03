const textInput = document.querySelector(".text-input")
const addBtn = document.querySelector(".add-btn")
const list = document.querySelector(".list")
const clearBtn = document.querySelector(".clear-all")

function view(){
    let todos = JSON.parse(localStorage.getItem("todos")) || []
    let allTasks = ""
    todos.forEach((item) => {
        allTasks = allTasks + `<li>
                                  <span>
                                        <label for="squaredFour"></label>
                                    <input type="checkbox" value="None" id="squaredFour" name="check" class="done">
                                    ${item.title}
                                  </span>
                                  <button class="del-btn">Удалить</button>
                                </li>`
    })
    list.innerHTML = allTasks
    deleteActionItem()
}
view()


addBtn.addEventListener("click", ()=>{
    let todos = JSON.parse(localStorage.getItem("todos")) || []
    todos = [...todos, {title: textInput.value, done: false}]
    localStorage.setItem("todos", JSON.stringify(todos))
    textInput.value = ""
    view()
})

clearBtn.addEventListener("click", () => {
    localStorage.removeItem("todos")
    view()
})

// list.addEventListener("click", (event) => {
//     if (event.target.classList[0] === "del-btn") {
//         event.target.parentNode.remove()
//     }
//     if (event.target.classList[0] === "done") {
//         event.target.parentNode.classList.toggle("line-through")
//         event.target.setAttribute("checked", "true")
//         event.target.checked ? event.target.setAttribute("checked", "true") :
//             event.target.removeAttribute("checked")
//     }
//
// })


function deleteActionItem(){
    const deleteButtons = document.querySelectorAll(".del-btn")
    deleteButtons.forEach((btn, idx) => {

        btn.addEventListener("click", () => {
            let todos = JSON.parse(localStorage.getItem("todos")) || []
            todos = todos.filter((todo, liIndex) => liIndex !== idx)
            localStorage.setItem("todos", JSON.stringify(todos))
            view()
        })
    })
}

// textInput.addEventListener("keyup", (e) =>{
//         let key = e.keyCode
//         if (key === 13){ // Клавиша Enter
//             addToDo()
//         }
// })

// function addToDo(){
//     if (textInput.value.trim()) {
//         let template = `<li>
//                             <span>
//                              <label for="squaredFour"></label>
//                             <input type="checkbox" value="None" id="squaredFour" name="check" class="done">
//                                       ${textInput.value}
//                                 </span>
//                                 <button class="del-btn">Удалить</button>
//                         </li>`
//         list.innerHTML += template
//         textInput.value = ""
//     }
// }
//
//
// addBtn.addEventListener("click", () => {
//     addToDo()
// })
//
// textInput.addEventListener("keyup", (e) =>{
//         let key = e.keyCode
//         if (key === 13){ // Клавиша Enter
//             addToDo()
//         }
// })
//
// clearBtn.addEventListener("click", ()=>{
//     list.innerHTML = ""
// })
//
//
// list.addEventListener("click", (event) => {
//     if (event.target.classList[0] === "del-btn") {
//         event.target.parentNode.remove()
//     }
//     if (event.target.classList[0] === "done") {
//         event.target.parentNode.classList.toggle("line-through")
//         event.target.setAttribute("checked", "true")
//         event.target.checked ? event.target.setAttribute("checked", "true") :
//             event.target.removeAttribute("checked")
//     }
//
// })

// CRUD
// localStorage.setItem("name", "Dima")
// console.log(localStorage.getItem("name"))
// localStorage.removeItem("name")