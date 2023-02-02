// Class definition
class Recipe {
  constructor(name, calories) {
    this.name = name;
    this.calories = calories;
  }
   // your code
   isLowCaloric() {
    return this.calories <= 400;
   }

   isHighCaloric() {
    return this.calories >= 600;
   }
}


// Class usage
const pasta = new Recipe("Pasta", 700);
const salad = new Recipe("Salad", 350);
console.log(pasta.isLowCaloric())
console.log(pasta.isHighCaloric())
console.log(salad.isLowCaloric())
console.log(salad.isHighCaloric())