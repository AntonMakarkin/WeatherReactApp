import React from 'react'
import sunriseSVG from './sunrise.svg'
import sunsetSVG from './sunset.svg'
import moonriseSVG from './moonrise.svg'
import moonsetSVG from './moonset.svg'
import './WeatherDetails.css'


const WeatherDetails = ({ data }) => {
    //to convert time string
    const converTime12to24 = (time12h) => {
        const [time, modifier] = time12h.split(' ')
        let [hours, minutes] = time.split(':')

        if (hours === "12") {
            hours = "00"
        }

        if (modifier === "PM") {
            hours = parseInt(hours, 10) + 12
        }

        return `${hours}:${minutes}`
    }

    const sunriseTime = converTime12to24(data.forecast.forecastday[0].astro.sunrise)
    const sunsetTime = converTime12to24(data.forecast.forecastday[0].astro.sunset)
    const moonriseTime = converTime12to24(data.forecast.forecastday[0].astro.moonrise)
    const moonsetTime = converTime12to24(data.forecast.forecastday[0].astro.moonset)
    console.log(sunriseTime, sunsetTime, moonriseTime, moonriseTime)

    return (
        <div className="weather_details">
            <h2>Details</h2>
            <div className="weather_details_items">
                <div className="day_and_night detail_item">
                    <h3>Day</h3>
                    <p>Max temperature: {Math.round(data.forecast.forecastday[0].day.maxtemp_c)}°</p>
                    <h3>Night</h3>
                    <p>Min temperature: {Math.round(data.forecast.forecastday[0].day.mintemp_c)}°</p>
                </div>
                <div className="sun detail_item">
                    <h3>Sunrise</h3>
                    <div className="sunrise sun_and_moon_time">
                        <img src={sunriseSVG} alt="" />
                        <p>{sunriseTime}</p>
                    </div>
                    <h3>Sunset</h3>
                    <div className="sunset sun_and_moon_time">
                        <img src={sunsetSVG} alt="" />
                        <p>{sunsetTime}</p>
                    </div>
                </div>
                <div className="moon detail_item">
                    <h3>Moonrise</h3>
                    <div className="moonrise sun_and_moon_time">
                        <img src={moonriseSVG} alt="" />
                        <p>{moonriseTime}</p>
                    </div>
                    <h3>Moonset</h3>
                    <div className="moonset sun_and_moon_time">
                        <img src={moonsetSVG} alt="" />
                        <p>{moonsetTime}</p>
                    </div>
                </div>
                <div className="details detail_item">
                    <div className="subdetail_item">
                        <h3>Cloud</h3>
                        <p>{data.current.cloud}%</p>
                    </div>
                    <div className="subdetail_item">
                        <h3>Humidity</h3>
                        <p>{data.current.humidity}%</p>
                    </div>
                    <div className="subdetail_item">
                        <h3>UV-index</h3>
                        <p>{Math.round(data.current.uv)}</p>
                    </div>
                    <div className="subdetail_item">
                        <h3>Wind</h3>
                        <p>{Math.round((data.current.wind_kph) * 0.28)}mps ({data.current.wind_dir})</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WeatherDetails
