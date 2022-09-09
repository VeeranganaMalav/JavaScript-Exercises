/* You are playing a game that contains multiple characters, and each of the characters has two main properties: attack and defense. You are given a 2D integer array properties where properties[i] = [attacki, defensei] represents the properties of the ith character in the game.

A character is said to be weak if any other character has both attack and defense levels strictly greater than this character's attack and defense levels. More formally, a character i is said to be weak if there exists another character j where attackj > attacki and defensej > defensei.

Return the number of weak characters. */

//Naive approach
function numberOfWeakCharacters(properties){
    let weakCharacters = 0;

    for(var k=0; k<properties.length; k++){
        for(var i=0; i<properties.length; i++){
            let attack = properties[i][0] - properties[k][0];
            let defense = properties[i][1] - properties[k][1];

            if( (attack>0 && defense>0)){
                weakCharacters++;
                break;
            }
        }
    }
    return weakCharacters;
}

var result = numberOfWeakCharacters([[7,7],[1,2],[9,7],[7,3],[3,10],[9,8],[8,10],[4,3],[1,5],[1,5]]);
console.log(result);


//Optimized approach
/* var numberOfWeakCharacters = function(properties) {
    let weakCharacters = 0;
    // 1st place in descending order
    // if the 1st position is the same, then sort according to the 2nd ascending order
    properties.sort((a, b) => b[0] - a[0] || a[1] - b[1]);
    
    let max = 0;
    
    for (let [attack, defense] of properties) {
        if (defense < max) {
            weakCharacters++;
            continue;
        }
        max = defense;
    }
    return weakCharacters;
}; */