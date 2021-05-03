import React, { useEffect, useState } from 'react';
import Header from './Components/Header/Header'
import Main from './Components/Main/Main'
import Loader from './Components/Loader/Loader'
import Error from './Components/Error/Error'
import Context from './Context'
import './Index.css'

const App = () => {
    //const [lat, setLat] = useState('') //55.751244
    //const [long, setLong] = useState('') //37.618423
    const [data, setData] = useState([])
    const [city, setCity] = useState('Moscow')
    const [loading, setLoading] = useState(true) 
    const [error, setError] = useState(false)

    const setCityFromInput = (city) => {
        setCity(city)
    }



    useEffect(() => {
        /*try {
            navigator.geolocation.getCurrentPosition((position) => {
                setLat(position.coords.latitude);
                setLong(position.coords.longitude);
            })
        } catch(e) {
            console.log(e)
        }*/

        /*const fetchLocation = async () => {

            if (city === null) {
                return
            }
    
            await fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(city)}.json?access_token=pk.eyJ1IjoiYW50b25tYWthcmtpbiIsImEiOiJja20yMWNzNWIyOXRqMm5wbHh2ajgwdG1vIn0.DnpfvcJGfLZyNLTFY96k_Q&limit=1`)
                .then(response => response.json())
                .then(data => {
                    setLat(data.features[0].center[1])
                    setLong(data.features[0].center[0])
                })
                .catch(error => {
                    setError(true)
                    console.log(error)
                })
        }*/
        const fetchByLocation = `http://api.weatherapi.com/v1/forecast.json?key=33291c825fe24b35a93173152210205&q=${city}&days=5&aqi=no&alerts=no`

        setData([])
        setLoading(true)
        const fetchWeather = async () => {
            await fetch(fetchByLocation)
                .then(response => response.json())
                .then(data => {
                    setData(data)
                    setLoading(false)
                })
                .catch(error => {
                    setLoading(false)
                    setError(true)
                    console.log(error)
                })
            }
       
        //fetchLocation()
        fetchWeather()
        
    }, [city, error])

    return (
        <Context.Provider value={data}>
                <Header onAdd={setCityFromInput}/>

                {/*loading && <Loader/>*/}

                {(typeof data.current != 'undefined') ? (
                <Main location={data.location.name}/>
                ):(
                    loading ? <Loader/> : <Error/>
                )}
        </Context.Provider>   
    )
}

export default App