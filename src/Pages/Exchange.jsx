import React from "react";
import { useEffect, useState } from "react";
import { server } from "../index";
import axios from "axios";
import { ProductCard } from "../Components/ProductCard";
import { ErrorComponent } from "../Components/ErrorComponent";
import { Loader } from "../Components/Loader";

export const Exchange = () => {
  const [exchanges, setExchanges] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  useEffect(() => {
    const fetchExchange = async () => {
      try {
        const { data } = await axios.get(`${server}/exchanges`);
        setExchanges(data);
        setLoading(false);
      } catch (err) {
        setExchanges(true);
        setLoading(false);
        <ErrorComponent message={"Error while fetch the exchanges"} />;
      }
    };

    fetchExchange();
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="app-section">
            {exchanges.map((prod) => (
              <ProductCard
                id={prod.id}
                key={prod.id}
                name={prod.name}
                rank={prod.trust_score_rank}
                year={prod.year_established}
                url={prod.url}
                image={prod.image}
              />
            ))}
          </div>
        </>
      )}
    </>
  );
};
