let messageEl=document.querySelector("#message-el")//#is used to twll the selctor that it is an id that is to be slected and "." is used to select a class
let sumEl=document.querySelector("#sum-el")
let cardsEl=document.querySelector("#cards-el")

let player={
    name:"Per",
    chips:145
}

let playerEl =document.getElementById("player-el")
playerEl.textContent=player.name+": $"+player.chips

let cards=[]
let sum=0
let hasBlackJack=false
let message=""
let isAlive=null

function startGame(){
    isAlive=true
    let firstCard=randomNumber();
    let secondCard=randomNumber();
    cards=[firstCard,secondCard]
    sum=firstCard+secondCard
    renderGame()
}
function renderGame(){
    sumEl.textContent="Sum: "+sum
    cardsEl.textContent="Cards: "
    for(let i=0;i<cards.length;i++){
        cardsEl.textContent+=cards[i]+" "
    } 
    if(sum<=20){
        message="Do you want to draw a new card?"
    }else if(sum==21){
        message="You've got Blackjack!"
        hasBlackJack=true
    } else{
        message="You are out of the game!"
        isAlive=false
    }
    messageEl.textContent=message
}
function randomNumber(){
    let num= (Math.floor(Math.random()*13)+1)
    if(num==1){
        return 11
    } else if(num>=11 & num<=13){
        return 10
    }else{
        return num
    }
}

function newCard(){
    if(isAlive===true && hasBlackJack===false){
        console.log("Drawing a new card")
        let card=randomNumber()
        sum+=card  
        cards.push(card)  
        renderGame()
    }
}