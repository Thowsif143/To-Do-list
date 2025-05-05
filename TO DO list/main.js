const inputBox = document.getElementById('input-text');
const listCon = document.getElementById('list-container');


function addTask(){
    if(inputBox.value===''){
        alert('You Must write Something!');
    }else{
        let li = document.createElement("li")
        li.innerHTML = inputBox.value
        listCon.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value=" ";
    saveData();
}

listCon.addEventListener('click',function(e){
    if(e.target.tagName == "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName == "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);


function saveData(){
    localStorage.setItem('data',listCon.innerHTML);
}
function showList(){
    listCon.innerHTML= localStorage.getItem("data");
}
showList()