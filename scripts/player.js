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
        this.hitPoints -= damage;
        if (this.hitPoints < 0){
            this.alive = false;
        }
    }

}

const player = new Creature('player', 50, 500);