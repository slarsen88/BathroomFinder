import React from 'react'

const InfoWindowContent = (props) => {
  const directionsService = new window.google.maps.DirectionsService()
  const { title, name, lat, lng, amenities, hours } = props.bathroom

  const keys = Object.keys(amenities)
  const list = []
  keys.map((key) => {
    if (amenities[key]) {
      list.push(key + ' ')
    }
  })

  return (
    <div>
      <h1>{name}</h1>
      <hr />
      <p>Hours of Operation: {hours}</p>
      <p>Features: {list}</p>
      <button className='btn btn-primary'>Directions</button>
    </div>
  )
}

export default InfoWindowContent
