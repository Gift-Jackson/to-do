const addBtn = document.querySelector("#btn");
const listContainer = document.querySelector(".list-container");
const input = document.querySelector("#input");
const delBtn = document.querySelector("#delbtn");

addBtn.addEventListener("click", ()=>{
    if(input.value === ''){
        alert("You must write something first!")
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = input.value;
        listContainer.appendChild(li);
        listContainer.classList.add("active");

        // delete icon
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span); 
    }
    input.value = "";
    saveData();
});

listContainer.addEventListener("click", (e)=>{
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("active");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML)
}
function getData(){
    listContainer.innerHTML = localStorage.getItem("data");

    if(listContainer.classList.contains("active")){
        listContainer.classList.remove("active");
    }
    else{
        listContainer.classList.add("active");
    }
}
getData();






