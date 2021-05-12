import React, { useEffect, useState } from 'react';
import Header from './Components/Header/Header'
import Main from './Components/Main/Main'
import Loader from './Components/Loader/Loader'
import Error from './Components/Error/Error'
import Context from './Context'
import './Index.css'

const App = () => {
    const [lat, setLat] = useState('') //55.751244
    const [long, setLong] = useState('') //37.618423
    const [data, setData] = useState([])
    const [city, setCity] = useState('')
    const [loading, setLoading] = useState(true) 
    const [error, setError] = useState(false)

    const setCityFromInput = (city) => {
        setCity(city)
    }

    const getCoords = async () => {
        const pos = await new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject)
        })

        setLat(pos.coords.latitude)
        setLong(pos.coords.longitude)


        /*.then(data => {
            setLat(data.coords.latitude)
            setLong(data.coords.longitude)
        })
        .catch(error => {
            setLoading(false)
            console.log(error)
        })*/

        /*const location = {
            latitude: pos.coords.latitude,
            longitude: pos.coords.longitude
        }
        return location*/
        //const location = `${pos.coords.latitude},${pos.coords.longitude}`
    }

    // method for getLocation Button
    const fetchLocation = async () => {
        await getCoords()
        
        await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${long}&localityLanguage=en`)
            .then(response => response.json())
            .then(data => {
                console.log(data.city)
                setCity(data.city)
            })
            .catch(err => {
                console.log(err)
                setLoading(false)
                setError(true)
            })
    }

    const fetchWeather = async (apiString) => {
        const fetchByLocation = apiString 
        await fetch(fetchByLocation)
            .then(response => response.json())
            .then(data => {
                setData(data)
                setLoading(false)
            })
            .catch(error => {
                console.log(error)
                setLoading(false)
                setError(true)
        })
    } 

    const refreshData = () => {
        const fetchByLocation = `https://api.weatherapi.com/v1/forecast.json?key=33291c825fe24b35a93173152210205&q=${city}&days=5&aqi=no&alerts=no`
        setData([])
        setLoading(true)
        fetchWeather(fetchByLocation)
    }

    useEffect(() => {
        if (city === '') {
            fetchLocation()
        } else {
            const fetchByLocation = `https://api.weatherapi.com/v1/forecast.json?key=33291c825fe24b35a93173152210205&q=${city}&days=5&aqi=no&alerts=no`

            setData([])
            setLoading(true)
            fetchWeather(fetchByLocation)
        }
    }, [city, error])

    return (
        <Context.Provider value={data}>
                <Header onAdd={setCityFromInput}
                        refresh={refreshData}
                        fetchLocation={fetchLocation}/>
                <>
                {(typeof data.current != 'undefined') ? (
                <Main location={data.location}/>
                ):(
                    loading ? <Loader/> : <Error/>
                )}
                </>
        </Context.Provider>   
    )
}

export default App