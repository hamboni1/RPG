class Creature{
    constructor(username, attackPoints, hitPoints){
        this.username = username;
        this.attackPoints = attackPoints;
        this.hitPoints = hitPoints;
        this.alive = true
    }

    get name(){
        return this.username;
    }

    get attack(){
        return this.attackPoints;
    }

    get health(){
        return this.hitPoints;
    }

    get isAlive(){
        return this.alive;
    }

    updateHealth(damage) {
        this.health -= damage
        if (this.health < 0){
            this.alive = false;
        }
    }

}


const player = new Creature('player', 10, 20);
const opponent = new Creature('enemy', 5, 10);



while (player.isAlive()){
    player.updateHealth(opponent.attack())
    opponent.updateHealth(player.damage())
}

console.log(`${player.}`)