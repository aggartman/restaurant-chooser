const restaurantList = [
  {name : 'Applebees', cuisine : 'American', price : '$$'},
  {name : 'Panda Express', cuisine : 'Chinese', price : '$'},
  {name : 'Panera', cuisine : 'Cafe', price : '$$'},
  {name : 'Maggianos', cuisine : 'Italian', price : '$$$'}, 
  {name : 'Nobu', cuisine : 'Japanese', price : '$$$$'},
]
function populateSelectors() {
  var cuisineSelector = document.getElementById('cuisine');
  var priceSelector = document.getElementById('price');
  var cuisineSet = new Set();
  var cuisineList = [];
  var priceSet = new Set();
  var priceList = [];

  restaurantList.forEach( function(restaurant) {
    cuisineSet.add(restaurant.cuisine);
    cuisineList = [...cuisineSet].sort();
    priceSet.add(restaurant.price);
    priceList = [...priceSet].sort();
  })

  cuisineList.forEach( function(cuisine) {
    let cuisineOption = document.createElement('option');
    cuisineOption.innerText = cuisine;
    cuisineSelector.appendChild(cuisineOption);
  })

  priceList.forEach( function(price){
    let priceOption = document.createElement('option');
    priceOption.innerText = price;
    priceSelector.appendChild(priceOption);
  })
}

var spin = document.getElementById('spinBtn');
spin.addEventListener('click', spinRoulette);

var lock1 = document.getElementById('lock1');
var lock2 = document.getElementById('lock2');
lock1.addEventListener('click', toggleLock);
lock2.addEventListener('click', toggleLock);

function selectCategories(category) {
  if (category === 'cuisine') {
    var selectedCuisine = document.getElementById('cuisine');
    var selectedItem = [selectedCuisine.options[selectedCuisine.selectedIndex].value];
    return selectedItem
  } else if (category === 'price') {
    var selectedPrice = document.getElementById('price');
    var selectedItem2 = [selectedPrice.options[selectedPrice.selectedIndex].value];
    return selectedItem2
  } else if (category === 'both') {
    selectedCuisine = document.getElementById('cuisine');
    selectedPrice = document.getElementById('price');
    selectedItem = selectedCuisine.options[selectedCuisine.selectedIndex].value;
    selectedItem2 = selectedPrice.options[selectedPrice.selectedIndex].value;
    var selectedItems = [selectedItem, selectedItem2];
    return selectedItems
  }
} 
function filterList(id) { 
  var selected = selectCategories(id);
  var selectedList = [];
  restaurantList.forEach(function(restaurant) {
    if (id === 'both') {
      if (restaurant.cuisine === selected[0] && restaurant.price === selected[1]) {
        selectedList.push(restaurant);
      }
    } else if (id == 'cuisine') {
      if (restaurant.cuisine === selected[0]) {
        selectedList.push(restaurant);
      } 
    } else if (id == 'price') {
      if (restaurant.price === selected[0]) {
        selectedList.push(restaurant);
      }
    }
  })
  if (selectedList.length > 0) {
    return selectedList
  } else {
    var error = [{name : 'Error:', cuisine : 'No', price : 'Restaurant'}];
    return error
  }
}

function randomSelector(selectedList) {
  var choice = selectedList[Math.floor(Math.random() * selectedList.length)];
  return choice
}

function randomChoice() {
  var selectedList;
  if (lock1.innerText === 'lock' && lock2.innerText === 'lock') {
    selectedList = filterList('both');
    if(selectedList.name === 'Error:') {
      choice = selectedList[0];
    } else {
    choice = randomSelector(selectedList);
    }
  } else if (lock1.innerText === 'lock') {
    selectedList = filterList('cuisine');
    choice = randomSelector(selectedList);
  } else if (lock2.innerText === 'lock') {
    selectedList = filterList('price');
    choice = randomSelector(selectedList);
  } else {
    choice = randomSelector(restaurantList);
  }
  return choice
}
function spinRoulette() {
  choice = randomChoice();
  let rouletteTitle = document.getElementById('rw1');
  let rouletteCuisine = document.getElementById('rw2');
  let roulettePrice = document.getElementById('rw3');

  rouletteTitle.innerText = choice.name;
  rouletteCuisine.innerText = choice.cuisine;
  roulettePrice.innerText = choice.price;
}
function toggleLock(e) {
   if (e.target.innerText === 'lock') {
    e.target.innerText = 'lock_open';
    e.target.classList.add('open');
   } else {
    e.target.innerText = 'lock';
    e.target.classList.remove('open');
   }
}

populateSelectors();