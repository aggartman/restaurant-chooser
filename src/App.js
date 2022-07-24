import './App.css'
// import restaurantScraper from './restaurantScraper';
// import RestaurantRoulette from './RestaurantRoulette';
import Restaurant from './Restaurant';

function App() {
  const restaurantList = [
    {name : 'Applebees', cuisine : 'American', price : '$$'},
    {name : 'Panda Express', cuisine : 'Chinese', price : '$'},
    {name : 'Panera', cuisine : 'Cafe', price : '$$'},
    {name : 'Maggianos', cuisine : 'Italian', price : '$$$'}, 
    {name : 'Nobu', cuisine : 'Japanese', price : '$$$$'},
  ]
  var choice = 0;
  function spinRoulette(e) {
    choice = Math.floor(Math.random() * restaurantList.length);
    console.log(choice);
    return choice
  }
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
          Well then spin the wheels and try your luck!
        </p>
      </div>
      <button className='spin' onClick={spinRoulette}>Spin</button>
      < Restaurant restaurant={restaurantList[choice]}/>
      {/* <div className='randomChoice'>
        <h3>{restaurantList[choice].name}</h3>
        <p>{restaurantList[choice].cuisine} {restaurantList[choice].price}</p>
      </div> */}
    </>
  );
}

export default App;