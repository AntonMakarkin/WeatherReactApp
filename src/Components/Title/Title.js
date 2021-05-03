import React from 'react';
import './Title.css'

const Title = ({location, data}) => {
    return (
        <div className="title">
            <h2>{location}</h2>
            <p>{data}</p>
        </div>
    )
}

export default Title