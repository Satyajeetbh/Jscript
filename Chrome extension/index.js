const inputBtn=document.getElementById("input-btn")
let myLeads=[]
const inputEl=document.getElementById("input-el")


inputBtn.addEventListener("click",function(){
    myLeads.push(inputEl.value) 
    for(let i=0;i<myLeads.length;i++){
        console.log(myLeads[i])
    }
})