import React from 'react';
import './Title.css'

const Title = ({location, data}) => {
    let location_region = location.region

    if (location_region === '' || null || undefined) {
        location_region = location.name
    }

    console.log(location_region)

    return (
        <div className="title">
            <h2>{location.name}</h2>
            <h3 className="region_country">{location_region}, {location.country}</h3>
            <p>{data}</p>
        </div>
    )
}

export default Title