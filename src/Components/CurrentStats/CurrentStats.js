import React, { useContext } from 'react';
import Context from '../../Context'
import './CurrentStats.css'

const CurrentStats = () => {
    const data = useContext(Context)

    let dateString = data.location.localtime
    let someDate = new Date(dateString)
    let currentHour = someDate.getHours()

    let rainChance = data.forecast.forecastday[0].hour[currentHour].chance_of_rain
    
    return (
        <div className="current_stats">
            <div className="first_row">
                <div className="stat_block feels_like">
                    <p className="desc">Feels</p>
                    <p className="value">{Math.round(data.current.feelslike_c)}°</p>
                </div>
                <div className=" stat_block wind">
                    <p className="desc">Wind</p>
                    <p className="value">{Math.round((data.current.wind_kph) * 0.28)}mps</p>
                </div>
                <div className="pressure">
                    <p className="desc">Pressure</p>
                    <p className="value">{Math.round((data.current.pressure_mb) * 0.75)}mm</p> {/*to transform hPa in mm*/}
                </div>
            </div>
            <div className="second_row">
                <div className="humidity">
                    <p className="desc">Humidity</p>
                    <p className="value">{Math.round(data.current.humidity)}%</p>
                </div>
                <div className="rain">
                    <p className="desc">Rain</p>
                    <p className="value">{rainChance}%</p>
                </div>
                <div className="visibility">
                    <p className="desc">Visibility</p>
                    <p className="value">{data.current.vis_km}km</p>
                </div>
            </div>
        </div>
    )
}

export default CurrentStats