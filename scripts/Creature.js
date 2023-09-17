class Creature{
    constructor(username, attackPoints, hitPoints){
        this.username = username;
        this.attackPoints = attackPoints;
        this.hitPoints = hitPoints;
        this.alive = true
    }

    getUsername(){
        return this.username;
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