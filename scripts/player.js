class Creature{
    constructor(username, attackPoints, hitPoints){
        this.username = username;
        this.attackPoints = attackPoints;
        this.hitPoints = hitPoints;
        this.alive = true
    }

    name(){
        return this.username;
    }

    attack(){
        return this.attackPoints;
    }

    health(){
        return this.hitPoints;
    }

    isAlive(){
        return this.alive;
    }

    updateHealth(damage) {
        this.health -= damage
        if (this.health < 0){
            this.alive = false;
        }
    }

}

const player = new Creature('player', 10, 25);