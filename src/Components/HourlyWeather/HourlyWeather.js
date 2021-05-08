import React from 'react'
import HourItem from '../HourItem/HourItem'
import Carousel from 'react-elastic-carousel'
import './HourlyWeather.css'

const HourlyWeather = ({ data }) => {
    // making 24-hours forecast array of data
    let currentHour = new Date(data.location.localtime).getHours()
    const hourlyForecastArray = data.forecast.forecastday[0].hour

    const currentHourWeather = [{
        time: data.location.localtime,
        condition: {
            icon: data.current.condition.icon
        },
        temp_c: data.current.temp_c
    }]

    const todayHourlyWeather = hourlyForecastArray.slice(++currentHour)
    let tomorrowHourlyWeather = []

    if (todayHourlyWeather.length < 24) {
        tomorrowHourlyWeather = data.forecast.forecastday[1].hour.slice(0, currentHour)
    }

    const hourlyWeather = currentHourWeather.concat(todayHourlyWeather, tomorrowHourlyWeather)

    // breakpoints for adaptive carousel
    const breakpoints = [
        {width: 600, itemsToShow: 3},
        {width: 900, itemsToShow: 5},
        {width: 1000, itemsToShow: 10}
    ]

    return (
        <div className="hourly_weather">
            <h2>24 hour forecast</h2>
            <Carousel showArrows={false}
                      pagination={false}
                      breakPoints={breakpoints}
                      className="carousel">
                {hourlyWeather.map((data, index) => {
                    return (
                        <HourItem
                            data={data}
                            key={index}/>
                    )
                })}
            </Carousel>
        </div>
    )
}

export default HourlyWeather