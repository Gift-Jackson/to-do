const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const four = document.querySelector(".four");
const bgTheme = document.querySelector(".bg-theme");
const trigBtn = document.querySelector("#trigbtn");
const body = document.body;

trigBtn.addEventListener("click", ()=>{
    bgTheme.style.transform = "scale(1)";
    trigBtn.style.transform = "scale(0)";
    saveTheme();
});
bgTheme.addEventListener("click", (e)=>{
    if(e.target !== bgTheme && e.target !== trigBtn){
        bgTheme.style.transform = "scale(0)";
        trigBtn.style.transform = "scale(1)";
        saveTheme();
    }
    else{
        bgTheme.style.transform = "scale(1)";
        saveTheme();
    }
});

two.addEventListener("click", ()=>{
    document.body.classList.add("green");
    document.body.classList.remove("default");
    document.body.classList.remove("red");
document.body.classList.remove("violet");
saveTheme();
});

one.addEventListener("click", ()=>{
    document.body.classList.add("default");
    document.body.classList.remove("red");
    document.body.classList.remove("green");
document.body.classList.remove("violet");
saveTheme();
});


three.addEventListener("click", ()=>{
    document.body.classList.add("red");
    
    document.body.classList.remove("violet");
    document.body.classList.remove("green");
    document.body.classList.remove("default");

saveTheme();
});

four.addEventListener("click", ()=>{
    document.body.classList.add("violet");
    document.body.classList.remove("green");
    document.body.classList.remove("default");
    document.body.classList.remove("one");
    saveTheme();
});


function saveTheme(){
    localStorage.setItem("theme", body.classList)
}
function getTheme(){
    body.classList = localStorage.getItem("theme");
}
getTheme();
