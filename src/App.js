import './App.css'
import restaurantRoulette from './restaurantRoulette'

function App() {
  return (
    <>
      <h1 className='title'>
        Restaurant Roulette
      </h1>
      <div className='about'>
        <p>
          Ever get stuck choosing a place to eat? 
          Indecisive much? 
        </p>
        <p>
          Well then spin the wheels and try your luck
        </p>
      </div>
      <div id='rouletteWheels'>
        <p id='restaurantName'></p>
        <p id='AvgPrice'></p>
        <p id='cusine'></p>
      </div>
    </>
  );
}

export default App;
