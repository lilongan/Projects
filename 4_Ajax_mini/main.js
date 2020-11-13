import {makeCard} from "./modules/card.js"
import {ajax} from "./modules/ajax.js"

const start = () => {
    let main = getEl("#main")
    main.classList.add("main")
    let cardHolder = makeEl("div", {id:"card-holder"})

    let formHolder = makeEl("div", {id:"form-holder"});
    let form = makeEl("form", {id:"todo-form"});
    form.addEventListener("submit", (evt)=>{
        let formValues = formHandler(evt)
        console.log(formValues)

        let result = formValues
        .filter(v=>v.name != "priority"  || v.checked)
        
        cardHolder.append(card(result))       
    })

    //form elements
    form.append(
        input("todo", {placeholder:"Todo",label:"Todo"}),
        input("duedate", {type:"date",label:"Due Date"}),
        radioGroup("priority", ["High", "Medium", "low"]),
        button("Add Todo")
    )

    formHolder.append(form)
    
    main.append(formHolder, cardHolder)
}

document.addEventListener("DOMContentLoaded", start)