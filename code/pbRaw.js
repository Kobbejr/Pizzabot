// PIZZABOT 1.0

const vegetarian = "Vegetarian";
const hawaiian = "Hawaiian";
const pepperoni = "Pepperoni";

const pizzaPrice = 80;

// Bygger upp meddelandet med variabler
const message = `Hey! Happy to serve your pizza. On our menu we have ${vegetarian}, ${hawaiian}, and ${pepperoni}.`;

// Visa meddelandet
alert(message);

// Be användaren att skriva in vilken Pizza de vill ha
const orderName = prompt(
  "Enter the name of the pizza you want to order today."
);

// Kolla så att användarens val matchar ett alternativ som finns
if (
  orderName == vegetarian ||
  orderName == hawaiian ||
  orderName == pepperoni
) {
  // Be användaren att skriva in antalet pizzor
  const orderQuantity = prompt(
    `How many of ${orderName} pizza(s) do you want?`
  );

  // Visa användarens val av Pizza och antal
  alert(`You have ordered ${orderQuantity} ${orderName} pizza(s).`);

  // Räknar ut priset genom att gångra antalet Pizzor med styckepriset
  const orderTotal = orderQuantity * pizzaPrice;

  // Ta fram beredningstiden i minuter baserat på antalet pizzor
  let cookingTime;
  if (orderQuantity >= 1 && orderQuantity <= 2) {
    cookingTime = 10;
  } else if (orderQuantity >= 3 && orderQuantity <= 5) {
    cookingTime = 15;
  } else {
    cookingTime = 20;
  }

  // Visa totalkostnaden för användaren
  alert(
    `Great, we'll get started on your ${orderName} pizza(s) right away, it will cost ${orderTotal} kr. The pizza(s) will take ${cookingTime} minutes. Thank you for your order!`
  );
} else {
  // Detta meddelande visas om användaren skriver in ett alternativ som inte finns
  alert("Sorry, the selected pizza is not on the menu. Please try again.");
}
