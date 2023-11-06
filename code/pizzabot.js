// PIZZABOT 3.0

document
  .getElementById("pizzaForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const orderName = document.getElementById("pizzaType").value;
    const orderQuantity = parseInt(document.getElementById("quantity").value);

    // Kolla så att vald pizza finns på menyn
    if (checkOrderName(orderName)) {
      // Räkna ut pris och beredningstid baserat på antal pizzor
      const total = totalCost(orderQuantity);
      const time = cookingTime(orderQuantity);

      // Meddelande som används när alla val har gjorts av användaren
      const responseMessage = `You have ordered ${orderQuantity} ${orderName} pizza(s). The pizzas will take ${time} minutes. Total cost is ${total} kr.`;
      document.getElementById("response").textContent = responseMessage;

      // Meddelande som används om vald pizza inte finns på menyn
    } else {
      document.getElementById("response").textContent =
        "Sorry, the selected pizza is not on the menu. Please try again.";
    }
  });

// Funktion som kollar att användarens val finns på menyn
function checkOrderName(orderName) {
  return (
    orderName == "Vegetarian" ||
    orderName == "Hawaiian" ||
    orderName == "Pepperoni"
  );
}

// Funktion som räknar ut priset baserat på antalet pizzor
function totalCost(orderQuantity) {
  const pizzaPrice = 80;
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
