import React, { useState, useEffect } from 'react'
import { ReactComponent as MapSVG } from './maps-and-flags.svg'
import { ReactComponent as ReloadSVG } from './reload.svg'
import { ReactComponent as SearchSVG } from './search.svg'
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
    const [click, setClick] = useState(false),
          [button, setButton] = useState(false)

    const handleClick = () => setClick(!click),
          closeMobileMenu = () => setClick(false),
          showButton = () => {
              if(window.innerWidth <= 700) {
                  setButton(true)
              } else {
                  setButton(false)
              }
          };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

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
                <form className="findCity" id="cityForm" onSubmit={submitHandler}>
                    <input type="text" className="find" id="city" placeholder="Name of location" {...input.bind}/>
                    <input type="submit" value="Search" className="SearchBtn"></input>
                </form>
                <div className="activities">
                    {button && 
                        <div className="searchIcon headerIcon" onClick={handleClick}>
                            <SearchSVG width="20px" height="20px" fill="#fff"/>
                        </div>
                    }
                    <div title="Find my location" className="myPosition headerIcon" onClick={fetchLocation}>
                        <MapSVG width="20px" height="20px" fill="#fff"/>
                    </div>
                    <div title="Refresh the page" className="restart headerIcon" onClick={refresh}>
                        <ReloadSVG width="20px" height="20px" fill="#fff"/>
                    </div>
                </div>
            </div>
            <div className={click ? "mobileSearch show" : "mobileSearch hide"}>
                <div className='searchForm'>
                    <div className="menu_button" onClick={closeMobileMenu}></div>
                    <form className="findCityMobile" onSubmit={submitHandler}>
                        <input type="text" className="find" id="city" placeholder="Name of location" {...input.bind}/>
                        <input type="submit" value="Search" className="SearchBtn" onClick={closeMobileMenu}></input>
                    </form>
                </div>
            </div>
        </header>
    )
}

export default Header
