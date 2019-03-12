// Two fighters, one winner

// from Codewars
// URL: https://www.codewars.com/kata/two-fighters-one-winner/train/javascript

// Create a function that returns the name of the winner
// in a fight between two fighters.

// Each fighter takes turns attacking the other
// and whoever kills the other first is victorious.
// Death is defined as having health <= 0.

// Each fighter will be a Fighter object/instance.
// See the Fighter class below in your chosen language.

// Both health and damagePerAttack (damage_per_attack for python)
// will be integers larger than 0. You can mutate the Fighter objects.

function Fighter(name, health, damagePerAttack) {
  this.name = name;
  this.health = health;
  this.damagePerAttack = damagePerAttack;
  this.toString = function() {
    return this.name;
  };
}

function declareWinner(fighter1, fighter2, firstAttacker) {
  return "Write your code here";
}

// Test block
console.log(
  declareWinner(new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4), "Harry")
);
console.log(
  declareWinner(
    new Fighter("Harald", 20, 5),
    new Fighter("Harry", 5, 4),
    "Harry"
  )
);
console.log(
  declareWinner(
    new Fighter("Harald", 20, 5),
    new Fighter("Harry", 5, 4),
    "Harald"
  )
);
