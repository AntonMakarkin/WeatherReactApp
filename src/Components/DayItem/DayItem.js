import React from 'react'
import './DayItem.css'

const DayItem = ({ data }) => {
    //get the weather icon
    let icon = data.day.condition.icon
    let srcIcon = "http:" + icon

    //get the day name
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    let dateString = data.date
    let someDate = new Date(dateString)
    let day = someDate.getDay()
    let dayName = days[day]

    return (
        <a href="#" className="day_item">
            <p className="day_name">{dayName}</p>
            <div className="weather_icon">
                <img src={srcIcon} alt=""/>
            </div>
            <div className="temp">
                <p className="max_temp">{Math.round(data.day.maxtemp_c)}°</p>
                <p className="min_temp">{Math.round(data.day.mintemp_c)}°</p>
            </div>
        </a>
    )
}

export default DayItem
