//Create an array of pizzaToppings with at least four different toppings
let pizzaToppings =['Onion',"Bell","peppers","Corn","Mushroom"];

//Create a greetCustomer function that prints a message that welcomes a guest, then informs them of the available toppings by looping over pizzaToppings (don't worry about perfect grammar here yet, i.e. "a, b, and c", see Bonus Challenge #9)
//i.e. "Welcome to Pizza House, our toppings are: a, b, c, ..."

function greetCustomer() {
  //for (let i = 0; i <  pizzaToppings.length ; i++) {
    console.log("Welcome to Pizza House, our toppings are:",pizzaToppings);
  }
//}
greetCustomer();

//Create a getPizzaOrder function that
//has the parameters size, crust, and an indefinite amount of toppings as inputs
//prints the order, i.e. "One large thick crust pizza with x, y, z, ... coming up!"
//outputs a list with the size, crust, and toppings
let pizzaOrder;
function getPizzaOrder(size,c, ...indefAmtToppings) {


    pizzaOrder = console.log("one", size , c," pizza with", indefAmtToppings, "coming up!");

  return   pizzaOrder;
}



getPizzaOrder("large","thick crust","onions","green peppers","olive");

//Create a preparePizza function that has an array as its parameter with three items: a size, a crust, and a list of toppings
//prints something like "...Cooking pizza..."outputs a pizza Object with appropriate key-value pairs for size, crust, and toppings
let pizza = {
  size: "large",
  crusts: "thick",
  listOfToppings:["onions","peppers","spinach"]
};
 let prepareThePizza;
function preparePizza(pizza) {

prepareThePizza = console.log("....cooking pizza ... one", pizza.size,pizza.crusts,pizza.listOfToppings);
return  prepareThePizza;
}

preparePizza(pizza);

//Create a servePizza function that has a parameter of a pizza Object logs a message that the pizza is ready and repeats the order, i.e. "Order up! Here's your large thick crust pizza with x, y, z, ... Enjoy!"
//outputs the same pizza Object that was passed in
let serve;
function  servePizza(pizza){
  serve = console.log(`Order up! ${pizza["size"]} ${pizza["crusts"]} crust  pizza with ${pizza["listOfToppings"]} Enjoy!`);
 return serve;


}
servePizza(pizza);
