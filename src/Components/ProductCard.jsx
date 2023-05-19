import React from 'react'

export const ProductCard = ({id, key, name, rank, url, image}) => {
  return (
    <a href={url} target={"blank"}>
    <div key={id} className='productCard' >
        <img className="image" src={image} alt={name} />
        <div className='discription'>
            <p className='rank'>{rank}</p>
            <h3 className='name'>{name}</h3>
        </div>
    </div>
    </a>
  )
}


