import React, { useState, useContext } from 'react'
import { ReactComponent as MapSVG } from './maps-and-flags.svg'
import { ReactComponent as ReloadSVG } from './reload.svg'
import { ReactComponent as Star} from './star.svg'
import Context from '../../Context'
import './Header.css'

const useInputValue = (defaultValue = '') => {
    const [value, setValue] = useState(defaultValue)

    return {
        bind: {
            value,
            onChange: event => setValue(event.target.value)
        },
        clear: () => setValue(''),
        value: () => value
    }

}

const Header = ({ onAdd, refresh, fetchLocation }) => {
    const input = useInputValue()

    const submitHandler = (event) => {
        event.preventDefault()

        if(input.value().trim()) {
            onAdd(input.value())
            input.clear()
        }
    }

    return (
        <header>
            <div className="container container-header">
                <div className="logo">
                    <h1>Forecast</h1>
                </div>
                <form className="findCity" onSubmit={submitHandler}>
                    <input type="text" className="find" placeholder="Name of location" {...input.bind}/>
                    <input type="submit" value="Search" className="SearchBtn"></input>
                </form>
                <div className="activities">
                    <div title="Find my location" className="myPosition" onClick={fetchLocation}>
                        <MapSVG width="20px" height="20px" fill="#fff"/>
                    </div>
                    <div title="Refresh the page" className="restart" onClick={refresh}>
                        <ReloadSVG width="20px" height="20px" fill="#fff"/>
                    </div>
                    <div className="nightMode"></div>
                </div>
                <div className="menuIcon"></div>
            </div>
        </header>
    )
}

export default Header
