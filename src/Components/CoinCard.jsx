import React from 'react'
import {Link} from "react-router-dom";
export const CoinCard = ({id, key, name, price, image, symbol, currencySymbol="₹"}) => {
  return (
    <Link to="/coin/${id}">
    <div key={key} className='productCard' >
        <img className="image" src={image} alt={name} />
        <div className='discription'>
            <p className='rank'><strong>{symbol}</strong></p>
            <h3 className='name'>{name}</h3>
            <p className='price'>{price ? `${currencySymbol}${price}` : "NA"}</p>
        </div>
    
    </div>
    </Link>
  )
}