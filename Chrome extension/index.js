const inputBtn=document.getElementById("input-btn")
let myLeads=[]
const inputEl=document.getElementById("input-el")
const ulEl=document.getElementById("ul-el")


inputBtn.addEventListener("click",function(){
    myLeads.push(inputEl.value)
    inputEl.value=""
    renderLeads()
    
    
})
// function renderLeads(){
//     ulEl.innerHTML= ""//clears the list
// for(let i=0;i<myLeads.length;i++){
//     // ulEl.innerHTML+= "<li>"+myLeads[i]+"</li>" one way to it
//     const li=document.createElement("li")
//     li.textContent=myLeads[i]
//     ulEl.append(li)
// } }

function renderLeads(){
    let listItems=""
for(let i=0;i<myLeads.length;i++){
    // listItems+= "<li>"+"<a href='"+myLeads[i]+"' target='_blank'>" +myLeads[i]+"</a>"+"</li>"
    listItems+=`<li>
    <a target="_blank" href='${myLeads[i]}'>
    ${myLeads[i]}
     </a>
    </li>`
}
ulEl.innerHTML=listItems
}