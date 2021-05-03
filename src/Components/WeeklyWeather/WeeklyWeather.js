import React from 'react'
import DayItem from '../DayItem/DayItem'
import './WeeklyWeather.css'

export const WeeklyWeather = ({ data }) => {
    return (
        <div className="weekly_weather">
            <h2>Next {data.forecast.forecastday.length} days</h2>
            <div className="weekly_weather_items">
                {data.forecast.forecastday.map((day, index) => {
                    return (
                        <DayItem
                            data={day}
                            key={index}/>
                    )
                })}
            </div>
        </div>
    )
}

export default WeeklyWeather
