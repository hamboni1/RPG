var opponent;
let monsters;

var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function() {
    if (xhr.readyState == 4){
        monsters = JSON.parse(xhr.responseText);
        console.log(monsters)
    }
}

xhr.open('GET', './scripts/monsters.JSON')
xhr.send()

const start = document.getElementById("start")
start.addEventListener("click", ()=> {
    let img = document.querySelector('.arena')
    let button = document.querySelector('#start')
    let message = document.querySelector('.message')
    let top = document.querySelector('.top')

    start.textContent = "LET'S BEGIN";
    console.log(monsters)
    setTimeout(()=>{
        start.remove()
        img.remove()
        button.remove()
        message.textContent = `Can you survive the ${opponent.name()}`;
        top.classList.add('in-game');
        setUpGame();
    }, 2000)
    opponent = createOpponent();

    message.textContent = `How far can you go?`;

    
})


function createOpponent(){
    let NumOfClasses = monsters.length
    let index = Math.floor(Math.random() * NumOfClasses) 
    const monster = {...monsters[index]};
    attackStat = statGenerator(monster.minAttack, monster.maxAttack)
    healthStat = statGenerator(monster.minHealth, monster.maxHealth)
   
    console.log( attackStat, healthStat)
    return new Creature(monster.class, attackStat, healthStat)
    
}




function statGenerator(low, high){
    let diff = high - low;
    console.log("HERE",Math.round(Math.random() * diff + low))
    let added = Math.round(Math.random() * diff)
    return added + low;
}




function setUpGame(){
    let stat = document.createElement('p')
    let top = document.querySelector('.top')
    stat.classList.add('stat')
  
    stat.textContent = `${player.name()}
        ${player.attack()}
        ${player.health()}`

    let stat1  = document.createElement('p');
    stat1.textContent = `${opponent.name()}
        ${opponent.attack()}
        ${opponent.health()}`;
    stat1.classList.add('stat');

    top.append(stat);
    top.append(stat1);
}