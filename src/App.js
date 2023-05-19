
import React from 'react';
import {Routes, Route} from 'react-router-dom';
import {Home} from "./Pages/Home";
import {Header} from "./Components/Header"
import {Coins} from "./Pages/Coins";
import {About} from "./Pages/About";
import {Exchange} from "./Pages/Exchange";

import "./styles/app.scss";
import "./styles/utils.scss";
import "./styles/header.scss";
import "./styles/exchange.scss";
import "./styles/productCard.scss";
import "./styles/coins.scss";
import "./styles/loader.scss";
import "./styles/currencySelect.scss";


function App() {
  return (
    <div className="App">
      <Header/>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/coins" element={<Coins/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/exchange" element={<Exchange/>}/>
      </Routes>

    </div>
  );
}

export default App;
