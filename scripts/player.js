class Player{
    constructor(name, attackPoints, hitPoints){
        this.name = name;
        this.attackPoints = attackPoints;
        this.hitPoints = hitPoints;
        this.alive = true
    }

    getUsername(){
        return this.name;
    }

    getAttackPoints(){
        return this.attackPoints;
    }

    getHitPoints(){
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