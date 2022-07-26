import React from 'react'
import './App.css'

function App() {
  const restaurantList = [
    {name : 'Applebees', cuisine : 'American', price : '$$'},
    {name : 'Panda Express', cuisine : 'Chinese', price : '$'},
    {name : 'Panera', cuisine : 'Cafe', price : '$$'},
    {name : 'Maggianos', cuisine : 'Italian', price : '$$$'}, 
    {name : 'Nobu', cuisine : 'Japanese', price : '$$$$'},
  ]
  var choice = 0;
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
  var lock1 = document.getElementById('lock1');
  lock1.onclick = toggleLock('lock1');
  var lock2 = document.getElementById('lock2');
  lock2.onclick = toggleLock('lock2')
  function toggleLock(id) {
    var obj = document.getElementById(id);
     if (obj.innerText === 'lock') {
      obj.innerText = 'lock_open';
      obj.classList.add('open');
     } else {
      obj.innerText = 'lock';
      obj.classList.remove('open');
     }
  }
  return (
    <>
      <div className='container1'>
        <h1 className='title'>
          Restaurant Roulette
        </h1>
        <div className='about'>
          <p>
            Ever get stuck choosing a place to eat? 
            Indecisive much? 
          </p>
          <p>
            Well then spin the wheels and try your luck!
          </p>
        </div>
      </div>
      <div id='locks'>
        {/* <div className='lockContain' id='lC1'>
          <span class="material-symbols-outlined">
            lock_open
          </span>
        </div>
        <div className='lockContain' id='lC2'>
          <span class="material-symbols-outlined">
            lock
          </span>
        </div> */}
      </div>
      <div id='randomChoice'>
        <div className='lockContain' id='lC1'>
          <span className="material-symbols-outlined open" id='lock1'>
            lock_open
          </span>
        </div>
        <div className='lockContain' id='lC2'>
          <span className="material-symbols-outlined" id='lock2'>
            lock
          </span>
        </div>
        <div className='square' id='rw1'>
          <h3 className='rouletteWheel'> </h3>
        </div>
        <div className='square' id='rw2'>
          <p className='rouletteWheel'> </p>
        </div>
        <div className='square' id='rw3'>
          <p className='rouletteWheel'> </p>
        </div>
        <button className='spin' onClick={spinRoulette}>Spin</button>
      </div>
    </>
  );
}

export default App;