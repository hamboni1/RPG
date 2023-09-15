class Creature{
    constructor(username, attackPoints, hitPoints){
        this.username = username;
        this.attackPoints = attackPoints;
        this.hitPoints = hitPoints;
        this.alive = true
    }

    get attack(){
        return this.attackPoints;
    }

    get health(){
        return this.hitPoints;
    }

    get alive(){
        return this.alive;
    }

    updateHealth(damage) {
        this.health -= damage
        if (this.health < 0){
            this.alive = false;
        }
    }
    


}

