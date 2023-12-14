const inputBox = document.getElementById("input-box");
const listContainer = document.querySelector("#list-container");
const ulBox = document.querySelector('ul');

function checkUlHeight(){
    if(ulBox.offsetHeight>=(window.innerHeight)/2)
    {
        ulBox.style.height=(window.innerHeight)/2+"px";
        ulBox.style.overflowY = "scroll"
    }
    if(ulBox.scrollHeight==ulBox.offsetHeight){
        ulBox.style.height=null;
        ulBox.style.overflowY=null;
    }
}
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
    checkUlHeight();
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
        checkUlHeight();
    }
    saveTask();
}, false);

function saveTask() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
