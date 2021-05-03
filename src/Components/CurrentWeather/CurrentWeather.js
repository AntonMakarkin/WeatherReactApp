import React from 'react'
import CurrentTemp from '../CurrentTemp/CurrentTemp'
import CurrentStats from '../CurrentStats/CurrentStats'
import './CurrentWeather.css'

const CurrentWeather = () => {
    return (
        <div className="current_weather">
            <CurrentTemp/>
            <CurrentStats/>
        </div>
    )
}

export default CurrentWeather