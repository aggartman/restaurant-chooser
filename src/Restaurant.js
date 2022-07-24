import React from 'react'


export default function restaurant({ restaurant }) {
  return (
    <div>
        <label>
            <h3>{restaurant.name}</h3>
            <p>{restaurant.cuisine}  {restaurant.price}</p> 
        </label>
    </div>
  )
}
