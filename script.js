const inputBox = document.getElementById("input-box");
const listContainer = document.querySelector("#list-container");

const addTask = ()=> {
    if (inputBox.value === "") {
        alert("you must enter task!");
    } else {
        let li = document.createElement("li")
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span")
        span.innerHTML = "\u00d7"
        li.appendChild(span);
    }
    inputBox.value = "";
    saveTask()
}
inputBox.addEventListener('keypress',(e)=>{
    if(e.key==='Enter') addTask();
},false);

listContainer.addEventListener("click", (event) => {
    if (event.target.tagName === "LI") {
        event.target.classList.toggle("checked");
    }
    else if (event.target.tagName === "SPAN") {
        event.target.parentElement.remove();
    }
    saveTask()
}, false);

function saveTask() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();