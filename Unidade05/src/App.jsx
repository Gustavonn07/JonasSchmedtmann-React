/* eslint-disable react/prop-types */
import pizzaData from '../data.json';
import './index.css';

function App() {

  return (
    <>
      <div className="container">
        <Header />
        <Menu />
        <Footer />
      </div>
    </>
  )
}

function Header() {
  const style = {};

  return (
    <>
      <header className="header">
        <h1 style={style}>Fast React Pizza Co.</h1>
      </header>
    </>
  )
}

function Menu() {
  const numPizza = pizzaData.length;

  return (
    <>
      <main className="menu">
        <h2>Our menu</h2>

        {numPizza > 0 ? (
          <>
            <p>
              Authentic Italian cuisine. 6 creative dishes to choose from. All
              from our stone oven, all organic, all delicious.
            </p>

            <ul className='pizzas'>
              {
                pizzaData.map((pizza) => (
                  <Pizza pizzaObj={pizza} key={pizza.name}/>
                ))
              }
            </ul>
          </>
          ) : (
          <p>We`re still working on our menu. Please come back later!</p>
          )
        }

      </main>
    </>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;

  return (
    <>
      <footer>
            {hour >= openHour && hour < closeHour ? `We're currently open` : `We're currently closed`}
      </footer>
    </>
  )
}

function Pizza({pizzaObj}) {
  
  return (
    <>
      <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
        <img src={pizzaObj.photoName} alt={pizzaObj.name} />
        
        <div>
          <h3>{pizzaObj.name}</h3>
          <p>{pizzaObj.ingredients}</p>

          <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</span>
        </div>
      </li>
    </>
  )
}

export default App;
