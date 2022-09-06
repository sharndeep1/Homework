// create two variables: pizzaPlace and numberOfToppings
//let pizzaPlace;
//let numberOfToppings;

//Have the variables reference the name of your Pizza Place and the number of toppings your Pizza Place offers.
 let pizzaPlace ="The House of Pizza";
 let numberOfToppings = 8;

//Print the variables and their types.
console.log(pizzaPlace + "  "  + typeof(pizzaPlace));
console.log(numberOfToppings + " " + typeof(numberOfToppings));

//Print a template literal that uses both variables to construct a short sentence about your Pizza Place.
//The House of Pizza string 8 number At The House of Pizza, we have 8 toppings. Quality, not quantity.

//console.log(`${pizzaPlace} string ${numberOfToppings} number At ${pizzaPlace}, We have ${numberOfToppings} toppings.Quality, not quantity.`);


//Construct an if statement that prints "Quality, not quantity." if you offer less than 10 toppings, or "A whole lot of pizza." if you offer 10 or more toppings.
 if(numberOfToppings < 10)
 {
  console.log(`${pizzaPlace} string ${numberOfToppings} number At ${pizzaPlace}, We have ${numberOfToppings} toppings. Quality, not quantity.`);
 }

else
  {
    console.log(`${pizzaPlace} string ${numberOfToppings} number At ${pizzaPlace}, We have ${numberOfToppings} toppings. A whole lot of pizza.`);

    }

    //Use a loop to print all of the even numbers from 1 to numberOfToppings (or 10)


    for( let i = 1 ;i <=numberOfToppings; i++)
    {
      if(i%2 === 0)
      {
      console.log(i);
    }
  }
