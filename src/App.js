import "./App.css";
import { useEffect, useState } from "react";
import Country from "./components/Country/Country";
import Cart from "./components/Country/Cart/Cart";

function App() {
  const [countries, setCountries] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
      .then((response) => response.json())
      .then((data) => setCountries(data));
  }, []);

  const handelAddCountry = (country) => {
    const newCart = [...cart, country];
    setCart(newCart);
  };
  return (
    <div className="App">
      <h1>All Country:{countries.length}</h1>
      <h4>Country Added:{cart.length}</h4>
      <Cart cart={cart}></Cart>
      <ul>
        {countries.map((country) => (
          <Country
            country={country}
            handelAddCountry={handelAddCountry}
            key={country.alpha3Code}
          ></Country>
        ))}
      </ul>
      <header className="App-header"></header>
    </div>
  );
}

export default App;
