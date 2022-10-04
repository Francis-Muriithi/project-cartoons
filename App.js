import "./App.css";
import React, { useEffect, useState } from "react";
import CartoonCard from "./CartoonCard";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Favorites from "./Favorites";

function App() {
  const API_url = "http://localhost:3000/cartoons";
  const [cartoons, setCartoons] = useState([]);

  useEffect(() => {
    fetch(API_url)
      .then((res) => res.json())
      .then((cartoons) => setCartoons(cartoons));
  }, []);

  return (
    <>
      <div className="App">
        <NavBar />
        <h1 className="heading">My Cartoon App</h1>
      </div>
      <div className="search-nav">
        <form>
          <input />
          <button> Search</button>
        </form>
      </div>
      <Favorites />
      <div className="cartoons">
        {cartoons.map((cartoon) => {
          return <CartoonCard {...cartoon} />;
        })}
      </div>
      <Footer />
    </>
  );
}

export default App;
