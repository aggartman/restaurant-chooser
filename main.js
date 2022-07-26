const restaurantList = [
  {name : 'Applebees', cuisine : 'American', price : '$$'},
  {name : 'Panda Express', cuisine : 'Chinese', price : '$'},
  {name : 'Panera', cuisine : 'Cafe', price : '$$'},
  {name : 'Maggianos', cuisine : 'Italian', price : '$$$'}, 
  {name : 'Nobu', cuisine : 'Japanese', price : '$$$$'},
]
var spin = document.getElementById('spinBtn');
spin.addEventListener('click', spinRoulette);

var lock1 = document.getElementById('lock1');
var lock2 = document.getElementById('lock2');
lock1.addEventListener('click', toggleLock);
lock2.addEventListener('click', toggleLock);

function randomChoice() {
  choice = restaurantList[Math.floor(Math.random() * restaurantList.length)];
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