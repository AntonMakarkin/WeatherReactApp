import React, { useContext } from 'react';
import WeatherIcon from './sun.svg'
import Context from '../../Context'
import './CurrentTemp.css'

const CurrentTemp = () => {
    const data = useContext(Context)
    let date = new Date()
    let hours = date.getHours()
    let minutes = date.getMinutes()

    if (minutes < 10) {
        minutes = '0' + minutes
    }

    return (
        <div className="currentTemp">
            <div className="weather">
                <img src={WeatherIcon} className="weatherIcon" alt=""/>
            </div>
            <div className="temperature">
                <p className="temperature_value">{Math.round(data.current.temp_c)}°</p>
                <p className="description">{data.current.condition.text}</p>
                <p className="updatedTime">updated at {hours}:{minutes}</p>
            </div>
        </div>
    )
}

export default CurrentTemp