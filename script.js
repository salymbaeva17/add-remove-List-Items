const textInput = document.querySelector(".text-input")
const addBtn = document.querySelector(".add-btn")
const list = document.querySelector(".list")
const clearBtn = document.querySelector(".clear-all")

addBtn.addEventListener("click", () => {
    if (textInput.value.trim()) {
        let template = `<li> 
                            <span>
                             <label for="squaredFour"></label>
                            <input type="checkbox" value="None" id="squaredFour" name="check" class="done">
                                      ${textInput.value} 
                                </span>
                                <button class="del-btn">Удалить</button>
                        </li>`
        list.innerHTML += template
        textInput.value = ""
    }
})

textInput.addEventListener("keyup", (e) =>{
        let key = e.keyCode
        if (key === 13 && textInput.value.trim()){ // Клавиша Enter
            let template = `<li>
                               <span>
                                    <input type="checkbox" class="done">
                                     ${textInput.value}
                               </span>
                               <button class="del-btn">Удалить</button>
                            </li>`
            list.innerHTML += template
            textInput.value = ""
        }
})

clearBtn.addEventListener("click", ()=>{
    list.innerHTML = ""
})


list.addEventListener("click", (event) => {
    if (event.target.classList[0] === "del-btn") {
        event.target.parentNode.remove()
    }
    if (event.target.classList[0] === "done") {
        event.target.parentNode.classList.toggle("line-through")
    }
})

clearBtn.addEventListener("click", () => {

})