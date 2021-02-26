import React from 'react';
//added the weather component on its own .
//passing variables that have been declared in app.js
const Weather = ({city,tempreture,feels,description,country,error}) => {
    return (
      <div className="input">
            {city && country && <p>{city}, {country} </p>}
            {tempreture && <p>Tempreture: {tempreture}°C</p>}
            {feels && <p>It feels like: {feels}</p>}
            {description &&  <p>Description: {description} </p>}
            {error && <p>{error} </p>}
      </div>
    )
}

export default Weather