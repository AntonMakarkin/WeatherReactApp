import React from 'react'
import './Error.css'

const Error = () => {
    return (
        <div className="error_message">
            <h1>Forecast is not available</h1>
            <p>Please check the connection or name of location</p>
        </div>
    )
}

export default Error
