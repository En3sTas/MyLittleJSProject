const inputDiv=document.querySelector('.screen');
const input=document.getElementById('main-list');
const btn=document.getElementById('btn');
const outputDiv=document.querySelector('.output');


btn.addEventListener('click',go);
outputDiv.addEventListener('click',removeBtn);
input.addEventListener('keyup',function(x){
    if(x.keyCode == 13){
        go()
    }
});

function removeBtn(e){
    if(e.target.tagName === ("LI")){    
        e.target.classList.toggle('checked');
        saveData()
    }
    else if(e.target.tagName ==="SPAN"){
        e.target.parentElement.remove();
        saveData()
    }
     
}
function go(){
    if(input.value !=''){
    let li=document.createElement('li');
    li.classList.add('li');
    li.innerHTML=input.value+'  ';
    outputDiv.appendChild(li);
    input.value='';
    let span = document.createElement("span")
    span.innerHTML="\u00d7"; 
    li.appendChild(span);
    saveData()
}}


function saveData(){
    localStorage.setItem("data",outputDiv.innerHTML);
}
function showData(){
    outputDiv.innerHTML =localStorage.getItem("data");
}
showData()



