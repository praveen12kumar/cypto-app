import React from "react";
import { useEffect, useState } from "react";
import { server } from "../index";
import axios from "axios";
import { ErrorComponent } from "../Components/ErrorComponent";
import { CoinCard } from "../Components/CoinCard";
import { Loader } from "../Components/Loader";

export const Coins = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [currency, setCurrency] = useState("inr");

  const currencySymbol =
    currency === "inr" ? "₹" : currency === "eur" ? "€" : "$";
  const btn = Array(132).fill(1);
  useEffect(() => {
    const fetchExchange = async () => {
      try {
        const { data } = await axios.get(
          `${server}/coins/markets?vs_currency=${currency}&page=${page}`
        );
        setCoins(data);
        setLoading(false);
      } catch (err) {
        setLoading(false);
        <ErrorComponent message={"Error while fetch the coins"} />;
      }
    };

    fetchExchange();
  }, [currency, page]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="container">
          <div className="main">
            <div className="currencyContainer">
              <div className="currencyContainer">
                <p>Currency Selector</p>
                  
                <div className="currency  ">
                  <input
                    type="radio"
                    id="currency1"
                    name="currency"
                    onClick={() => setCurrency("inr")}
                    
                  ></input>
                  <label>Inr</label>
                </div>
                <div className="currency">
                  <input
                    type="radio"
                    id="currency2"
                    name="currency"
                    onClick={() => setCurrency("eur")}
                  ></input>
                  <label>Eur</label>
                </div>
                <div className="currency">
                  <input
                    type="radio"
                    id="currency3"
                    name="currency"
                    onClick={() => setCurrency("usd")}
                  ></input>
                  <label>Usd</label>
                </div>

              </div>
            </div>
            <div className="coins-app-section">
              {coins.map((prod) => (
                <CoinCard
                  id={prod.id}
                  key={prod.id}
                  name={prod.name}
                  price={prod.current_price}
                  image={prod.image}
                  symbol={prod.symbol}
                  currencySymbol={currencySymbol}
                />
              ))}
            </div>
          </div>
          <div className="btn-section">
            {btn.map((item, index) => {
              return (
                <button
                  key={index}
                  className="btn"
                  onClick={() => {
                    setPage(index + 1);
                  }}
                >
                  {index + 1}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};
