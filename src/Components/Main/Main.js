import React, {useContext} from 'react';
import Title from '../Title/Title'
import CurrentWeather from '../CurrentWeather/CurrentWeather'
import WeeklyWeather from '../WeeklyWeather/WeeklyWeather'
import Context from '../../Context'
import HourlyWeather from '../HourlyWeather/HourlyWeather'
import './Main.css'
import WeatherDetails from '../WeatherDetails/WeatherDetails';

const Main = ({ location }) => {
    let data = useContext(Context)
    let dateOptions = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'}
    let date = new Date(data.location.localtime_epoch * 1000).toLocaleDateString('en-US', dateOptions)

    return (
            <main className="animated fadeInUp">
                <div className="container container-main">
                    <Title location={location}
                           data={date}/>
                    <CurrentWeather/>
                    <HourlyWeather data={data}/>
                    <WeeklyWeather data={data}/>
                    <WeatherDetails data={data}/>
                </div>
            </main>
    )
}

export default Main