//Create an array of pizzaToppings with at least four different toppings
const pizzaToppings =["onion","bell","peppers","corn","mushroom"];

//Create a greetCustomer function that prints a message that welcomes a guest, then informs them of the available toppings by looping over pizzaToppings (don't worry about perfect grammar here yet, i.e. "a, b, and c", see Bonus Challenge #9)
//i.e. "Welcome to Pizza House, our toppings are: a, b, c, ..."

function greetCustomer() {
  let greeting ="Welcome to Pizza House, our toppings are:";
  for (let topping of pizzaToppings) {
    greeting += `${topping}`;
  }
  console.log(greeting);
}
greetCustomer();

//Create a getPizzaOrder function that
//has the parameters size, crust, and an indefinite amount of toppings as inputs
//prints the order, i.e. "One large thick crust pizza with x, y, z, ... coming up!"
//outputs a list with the size, crust, and toppings

function getPizzaOrder(size,crust, ...toppings) {
  let pizzaOrder = `one ${size} , ${crust} pizza with`;
  for (let topping of toppings){
    pizzaOrder +=`${topping}`;
}
console.log(`${pizzaOrder} coming up!`);




return [size,crust,toppings];
}

 let customerOrder = getPizzaOrder("large","thick crust","onions","green peppers","olive");

//Create a preparePizza function that has an array as its parameter with three items: a size, a crust, and a list of toppings
//prints something like "...Cooking pizza..."outputs a pizza Object with appropriate key-value pairs for size, crust, and toppings

function preparePizza([orderSize,orderCrust,orderToppings]) {


 console.log("....cooking pizza ... one");

return {
  size: orderSize,
  crust: orderCrust,
  toppings: orderToppings
};
}

 let cookPizza = preparePizza(customerOrder);

//Create a servePizza function that has a parameter of a pizza Object logs a message that the pizza is ready and repeats the order, i.e. "Order up! Here's your large thick crust pizza with x, y, z, ... Enjoy!"
//outputs the same pizza Object that was passed in

function  servePizza(pizza){
  let serve = `Order up! ${pizza.size} ${pizza.crust} crust  pizza with  `;
  for(let topping of pizza.toppings){
    serve += `${topping}, `;
  }
  console.log(`${serve} coming up!`);

 return pizza;


}
servePizza(cookPizza);

greetCustomer();
const myPizza = servePizza(
  preparePizza(getPizzaOrder("large","pan","onions","greenPepper"))
);
console.log(myPizza);
