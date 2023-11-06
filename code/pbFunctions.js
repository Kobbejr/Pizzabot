// PIZZABOT 2.0

const vegetarian = "Vegetarian";
const hawaiian = "Hawaiian";
const pepperoni = "Pepperoni";

const pizzaPrice = 80;

// Funktion som kollar att användarens val finns på menyn
function checkOrderName(orderName) {
  return (
    orderName == vegetarian || orderName == hawaiian || orderName == pepperoni
  );
}

// Funktion som räknar ut priset genom att gångra antalet pizzor som användaren väljer
function totalCost(orderQuantity) {
  return orderQuantity * pizzaPrice;
}

// Funktion som tar fram beredningstiden i minuter baserat på antal pizzor
function cookingTime(orderQuantity) {
  if (orderQuantity >= 1 && orderQuantity <= 2) {
    return 10;
  } else if (orderQuantity >= 3 && orderQuantity <= 5) {
    return 15;
  } else {
    return 20;
  }
}

// Huvudfunktion som sköter hela orderprocessen
function handleOrder() {
  const message = `Hey! Happy to serve your pizza. On our menu we have ${vegetarian}, ${hawaiian}, and ${pepperoni}.`;
  alert(message);

  const orderName = prompt(
    "Enter the name of the pizza you want to order today."
  );

  if (checkOrderName(orderName)) {
    const orderQuantity = prompt(
      `How many of ${orderName} pizza(s) do you want?`
    );
    const total = totalCost(orderQuantity);
    const time = cookingTime(orderQuantity);

    alert(
      `You have ordered ${orderQuantity} ${orderName} pizza(s). Total cost is ${total} kr.`
    );
    alert(
      `Sit back and relax, we'll get started on your ${orderName} pizza(s) right away. The pizza(s) will be done in ${time} minutes. Thank you for your order!`
    );
  } else {
    alert("Sorry, the selected pizza is not on the menu. Please try again.");
  }
}

// Anropa huvudfunktionen för att starta orderprocessen
handleOrder();
