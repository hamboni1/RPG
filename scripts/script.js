
//Read the data from the JSON File
var monsterList;
var xhr = new XMLHttpRequest();
xhr.onload = function(){
    if (xhr.readyState == 4){
        monsterList = JSON.parse(xhr.responseText);
    }   
}
xhr.open('GET', './scripts/monsterClasses.JSON');
xhr.send();


var opponent;
const start = document.getElementById('start')
start.addEventListener('click', ()=>{
    start.disabled = true;
    let mainScreen = document.querySelector('.main-screen');
    setTimeout(()=>{
        mainScreen.innerHTML = null;
        //Set up second screen
        setUpGame(player, opponent);
    },2000)
    opponent = createOpponent();
})



function createOpponent(){
    let NumOfClasses = monsterList.length
    let index = Math.floor(Math.random() * NumOfClasses);
    const monster = {...monsterList[index]}
    let attackStat = statGenerator(monster.minAttack, monster.maxAttack)
    let healthStat = statGenerator(monster.minHealth, monster.maxHealth)
   
    return new Creature(monster.class, attackStat, healthStat)

}

function statGenerator(low, high) {
    let diff = high - low;
    return Math.round(Math.random() * diff) + low;
}


function setUpGame(player, opponent){
    ///Set up the second phase page

    let btn = document.createElement('button');
    btn.textContent = "Attack";
   
    let mainScreen = document.querySelector('.main-screen');
    
    btn.addEventListener('click', ()=>{
        battle(player,opponent)
    })
    console.log(btn);
    mainScreen.insertAdjacentElement('beforeend',btn);
}


function battle(player, opponent){
    opponent.updateHealth(player.getAttackPoints())
    updateHealthStat(opponent);
    if (!opponent.isAlive()){
        alert("You have won!");
        opponent = createOpponent();
        let mainScreen = document.querySelector(".main-screen");
        mainScreen.innerHTML = null;
        setUpGame(player,opponent);
        return
    }
    updateHealthStat(player);
    player.updateHealth(opponent.getAttackPoints())
    if(!player.isAlive()){
        alert("You are dead");
        location.reload();
    }

}

function updateHealthStat(opponent){
    //Update the Health Bar
    
}