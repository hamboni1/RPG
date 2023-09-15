#include "creature.h"
#include <string>
#include <ctime> 
#include <cstdlib>
#include <iostream>


using namespace std;
namespace cs_creature{

Creature::Creature(){
	strength = 10;
	hitpoints = 10;
	
}

Creature::Creature(int newStrength, int newHitpoints)
{
	
	strength = newStrength;
	hitpoints = newHitpoints;
}


 


int Creature::getDamage() const {
	int damage;

    damage = (rand() % strength) + 1;
    cout << "The " << getSpecies() << " attacks for " << damage << " points!" << endl;
    return damage;
}


string Creature::getSpecies() const{
	return "Creature";
}     





void Creature::changeStrength(int updatedStrength){
	strength = updatedStrength;
}


void Creature::changeHitpoints(int updatedHitpoints){
	hitpoints = updatedHitpoints;
}


int Creature::getStrength() const {
 	return strength;
}



int Creature::getHitpoints() const {
	return hitpoints;
}

}
