import React, { Component } from 'react'
import './App.css'

class rouletteLock extends Component {
  constructor(props) {
    super(props)
    this.state = { isActive: false }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    let state = this.state;
    this.setState({isActive : !state.isActive});
    this.state.isActive ? this.innerText = 'open' : this.innerText = 'lock';
  }


  App() {
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
          <div className='lockContain' id='lC1'>
            <span className={`material-symbols-outlined ${this.state.isActive ? 'open' : 'lock'}`} id='lock1' onClick={ handleClick }>
              lock_open
            </span>
          </div>
          <div className='lockContain' id='lC2'>
            <span className="material-symbols-outlined" id='lock2' onClick={(e) => this.toggleLock.bind(this)}>
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
}

export default App;