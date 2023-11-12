import pizzaData from '../data.json';

function App() {

  return (
    <>
      <Pizza
        num = {2}
      />
      <Pizza
        num = {0}
      />
    </>
  )
}

function Pizza({num}) {
  
  return (
    <>
      <img src={pizzaData[num].photoName} alt={pizzaData[num].name} />
      <h2>{pizzaData[num].name}</h2>
      <p>{pizzaData[num].ingredients}</p>
    </>
  )
}

export default App;
