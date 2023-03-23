const toggleBox = document.querySelector(".toggle-box");
const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".overlay");

toggleBox.addEventListener("click", ()=>{
    toggle.classList.toggle("active");
    if(toggle.classList.contains("active")){
        menu.classList.add("active");
    }
    else{
        menu.classList.remove("active");
    }
});

menu.addEventListener("click", (e)=>{
    if(e.target !== menu && e.target !== toggle){
        menu.classList.add("active");
        toggle.classList.add("active");
    }
    else{
        menu.classList.remove("active");
        toggle.classList.remove("active");
    }
});