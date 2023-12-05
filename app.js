// Write your code on this file. Please don't change the existing code
// unless absolutely needed.

//Initial price of the burger
var wholeWheatBun = 10;

//Ingredients of the burger along with the price
// Clue: the name is same as the textcontent of the button. Will be useful later on :)
var ingredients = {
  Patty: 80,
  Cheese: 10,
  Tomatoes: 20,
  Onions: 20,
  Lettuce: 20
};

//Current state of the ingredients in the burger
var state = {
  Patty: true,
  Cheese: true,
  Tomatoes: true,
  Onions: true,
  Lettuce: true
};

// This function renders the entire screen everytime the state changes accordingly
function renderAll() {
  renderPatty();
  renderCheese();
  renderTomatoes();
  renderOnions();
  renderLettuce();
  renderButtons();
  renderIngredientsBoard();
  renderPrice();
}

const patty = document.querySelector("#patty");
const cheese = document.querySelector("#cheese");  
const tomatoes = document.querySelector("#tomato"); 
const onions = document.querySelector("#onion"); 
const lettuce = document.querySelector("#lettuce");
function renderPatty() {
  //you can also use getElementById
  if (state.Patty) {
    patty.style.display = "block";
  } else {
    patty.style.display = "none";
  }
}

function renderCheese() {
  //Trial 1 - Change the visibility of cheese based on state by manipulating the DOM
  if (state.Cheese) {
    cheese.style.display = "block";
  } else {
    cheese.style.display = "none";
  }
}

function renderTomatoes() {
  //Trial 1 - Change the visibility of Tomatoes based on state by manipulating the DOM
  if (state.Tomatoes) {
    tomatoes.style.display = "block";
  } else {
    tomatoes.style.display = "none";
  }
}

function renderOnions() {
  //Trial 1 - Change the visibility of Onions based on state by manipulating the DOM
  if (state.Onions) {
    onions.style.display = "block";
  } else {
    onions.style.display = "none";
  }
}

function renderLettuce() {
  //Trial 1 - Change the visibility of Lettuce based on state by manipulating the DOM
  if (state.Lettuce) {
    lettuce.style.display = "block";
  } else {
    lettuce.style.display = "none";
  }
}
const pattyItem= document.getElementById("item1")
const cheeseItem= document.getElementById("item2")
const tomatoesItem= document.getElementById("item3")
const onionsItem= document.getElementById("item4")
const lettuceItem= document.getElementById("item5")

document.querySelector(".btn-patty").onclick = function () {
  state.Patty = !state.Patty;
  toggleClass(pattyButton)
  ingredientDisplay(state.Patty, pattyItem) 
  updatePrice(state.Patty,ingredients.Patty)
  renderAll();
};

// Trial 2 - Setup event listener for the cheese button
document.querySelector(".btn-cheese").onclick = function () {
  state.Cheese = !state.Cheese;
  toggleClass(cheeseButton)
  ingredientDisplay(state.Cheese, cheeseItem)
  updatePrice(state.Cheese,ingredients.Cheese)
  renderAll();
};
// Trial 2 - Setup event listener for the tomatoes button
document.querySelector(".btn-tomatoes").onclick = function () {
  state.Tomatoes = !state.Tomatoes;
  toggleClass(tomatoesButton)
  ingredientDisplay(state.Tomatoes, tomatoesItem)
  updatePrice(state.Tomatoes,ingredients.Tomatoes)
  renderAll();
};

// Trial 2 - Setup event listener for the onion button
document.querySelector(".btn-onions").onclick = function () {
  state.Onions = !state.Onions;
  toggleClass(onionsButton)
  ingredientDisplay(state.Onions, onionsItem)
  updatePrice(state.Onions,ingredients.Onions)
  renderAll();
};

// Trial 2 - Setup event listener for the lettuce button
document.querySelector(".btn-lettuce").onclick = function () {
  state.Lettuce = !state.Lettuce;
  toggleClass(lettuceButton)
  ingredientDisplay(state.Lettuce, lettuceItem)
  updatePrice(state.Lettuce,ingredients.Lettuce)
  renderAll();
};

//Challenge 1 - Add/Remove the class active to the buttons based on state
var pattyButton=document.querySelector(".btn-patty")
function toggleClass(pattyButton) {
  pattyButton.classList.toggle("active"); 
}

var cheeseButton=document.querySelector(".btn-cheese")
function toggleClass(cheeseButton) {
  cheeseButton.classList.toggle("active");
}

var tomatoesButton=document.querySelector(".btn-tomatoes")
function toggleClass(tomatoesButton) {
  tomatoesButton.classList.toggle("active");
}

var onionsButton=document.querySelector(".btn-onions")
function toggleClass(onionsButton) {
  onionsButton.classList.toggle("active");
}

var lettuceButton=document.querySelector(".btn-lettuce")
function toggleClass(lettuceButton) {
  lettuceButton.classList.toggle("active");
}


//Challenge 2 - Render only the items selected in the ingredients board based on the state

function ingredientDisplay(state, pattyItem) {
if (state==false) {
  pattyItem.style.display="none"
} else {
  pattyItem.style.display="block"
}
}

function ingredientDisplay(state, cheeseItem) {
if (state==false) {
  cheeseItem.style.display="none"
} else {
  cheeseItem.style.display="block"
}
}

function ingredientDisplay(state, tomatoesItem) {
if (state==false) {
  tomatoesItem.style.display="none"
} else {
  tomatoesItem.style.display="block"
}
}

function ingredientDisplay(state, onionsItem) {
if (state==false) {
 onionsItem.style.display="none"
} else {
  onionsItem.style.display="block"
}
}

function ingredientDisplay(state, lettuceItem) {
if (state==false) {
  lettuceItem.style.display="none"
} else {
  lettuceItem.style.display="block"
}
}

//Judgement 1
//In the p element having price-details as the class, display the calculated
//price based on ingredients
var ingredientsPrice =150;
function updatePrice(state,ingredient) {
  if (state) {
    ingredientsPrice += ingredient;
  } else {
    ingredientsPrice -= ingredient;
  }
  
  currentOrder = wholeWheatBun + ingredientsPrice;
  document.querySelector(".price-details").innerHTML = "INR " + currentOrder;
  }