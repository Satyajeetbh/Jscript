let countEl=document.getElementById("count-el");
let count=0;
function increment(){
    count++;
    console.log(count);
    countEl.textContent=count;
}



let saveEl=document.getElementById("save-el")
function save(){
    let history= count+" -  "
    saveEl.textContent+=history;
    count=0
    countEl.textContent=count
}