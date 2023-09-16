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
    
    let top = document.querySelector('.top')
    button.disabled = true;

    start.textContent = "LET'S BEGIN";
    console.log(monsters)
    setTimeout(()=>{
        start.remove()
        img.remove()
        button.remove()
        
        top.classList.add('in-game');
        setUpGame(player, opponent);
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




function setUpGame(player, opponent){
    let message = document.querySelector('.message')
    message.textContent = `Can you survive the ${opponent.name()}`;
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
    
    let btn = document.createElement('button');
    let bottom = document.querySelector('.bottom');
    btn.textContent = "Attack";

    btn.addEventListener('click',()=>{
        battle(player, opponent);
        

    })

    bottom.append(btn);

}


function battle(player, opponent){
    player.updateHealth(opponent.attack());
    opponent.updateHealth(player.attack());
    updateStatUI(player, opponent);

}

function updateStatUI(player, opponent){
    let stats = document.querySelectorAll('.stat');
    console.log(stats)
    stats[0].textContent = `${player.name()}
    ${player.attack()}
    ${player.health()}`;
    stats[1].textContent = `${opponent.name()}
    ${opponent.attack()}
    ${opponent.health()}`;

    if (!player.isAlive()){
        alert("You are dead")
        location.reload();
    }
    else if(!opponent.isAlive()){
        alert("You have won!");
        opponent = createOpponent();
        let top = document.querySelector('.top')
        let bot = document.querySelector('.bottom')
        top.innerHTML = "";
        bot.innerHTML = "";
        setUpGame(player, opponent);
    }
}