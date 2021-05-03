import React, {useContext} from 'react';
import Title from '../Title/Title'
import CurrentWeather from '../CurrentWeather/CurrentWeather'
import WeeklyWeather from '../WeeklyWeather/WeeklyWeather'
import Context from '../../Context'
import './Main.css'

const Main = ({ location }) => {
    let data = useContext(Context)
    console.log(data)
    let dateOptions = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'}
    let date = new Date(data.location.localtime_epoch * 1000).toLocaleDateString('en-US', dateOptions)

    return (
            <main>
                <div className="container container-main">
                    <Title location={location}
                           data={date}/>
                    <CurrentWeather/>
                    <WeeklyWeather data={data}/>
                </div>
            </main>
    )
}

export default Main