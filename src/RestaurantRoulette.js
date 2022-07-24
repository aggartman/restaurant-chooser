import React from 'react'
import Restaurant from './Restaurant'

export default function restaurantRoulette({ restaurants }) {
  return (
    restaurants.map(restaurant => {
        return < Restaurant key={restaurant.name} restaurant={restaurant}/>
    })
  )
}
