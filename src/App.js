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
      <div id='randomChoice'>
        <div className='square'>
          <h3 className='rouletteWheel' id='rw1'> </h3>
        </div>
        <div className='square'>
          <p className='rouletteWheel' id='rw2'> </p>
        </div>
        <div className='square'>
          <p className='rouletteWheel' id='rw3'> </p>
        </div>
        <button className='spin' onClick={spinRoulette}>Spin</button>
      </div>
    </>
  );
}

export default App;