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
  restaurantList.forEach( function(restaurant) {
    let cuisineOption = document.createElement('option');
    let priceOption = document.createElement('option');
    cuisineOption.innerText = restaurant.cuisine;
    priceOption.innerText = restaurant.price;
    cuisineSelector.appendChild(cuisineOption);
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
    var selectedItem = selectedCuisine.options[selectedCuisine.selectedIndex].value;
    return selectedItem
  } else if (category === 'price') {
    var selectedPrice = document.getElementById('price');
    var selectedItem2 = selectedPrice.options[selectedPrice.selectedIndex].value;
    return selectedItem
  } else if (category === 'both') {
    selectedCuisine = document.getElementById('cuisine');
    selectedPrice = document.getElementById('price');
    selectedItem = selectedCuisine.options[selectedCuisine.selectedIndex].value;
    var selectedItem2 = selectedPrice.options[selectedPrice.selectedIndex].value;
    var selectedItems = [selectedItem, selectedItem2];
    return selectedItems
  }
}

  
function filterList(id) { 
  selectCategories(id);
  var selectedList = [];
  restaurantList.forEach(function(restaurant) {
    if (id == 'cuisine') {
      if (restaurant.cuisine === selectedItem) {
        selectedList.push(restaurant);
      } 
    } else if (id == 'price') {
      if (restaurant.price === selectedItem) {
        selectedList.push(restaurant);
      }
    }
  })
  return selectedList
}
function randomChoice() {
  if (lock1.innerText === 'lock') {
    var selectedList = filterList('cuisine');
    choice = selectedList[Math.floor(Math.random() * selectedList.length)];
  } else if (lock2.innerText === 'lock') {
    var selectedList = filterList('price');
    choice = selectedList[Math.floor(Math.random() * selectedList.length)];
  } else if (lock1.innerText === 'lock' && lock2.innerText === 'lock') {
    var selectedList = filterList('both');
  }else {
    choice = restaurantList[Math.floor(Math.random() * restaurantList.length)];
  }
  return choice
}
function spinRoulette(e) {
  choice = randomChoice();
  let rouletteTitle = document.getElementById('rw1');
  let rouletteCuisine = document.getElementById('rw2');
  let roulettePrice = document.getElementById('rw3');

  rouletteTitle.innerText = choice.name;
  rouletteCuisine.innerText = choice.cuisine;
  roulettePrice.innerText = choice.price;
}
function toggleLock(e) {
   if (e.target.innerText == 'lock') {
    e.target.innerText = 'lock_open';
    e.target.classList.add('open');
   } else {
    e.target.innerText = 'lock';
    e.target.classList.remove('open');
   }
}

populateSelectors();