import React from 'react';
import './HourItem.css'

const HourItem = ({ data }) => {
    let srcIcon = data.condition.icon
    let time = new Date(data.time).getHours()
    let degrees = Math.round(data.temp_c)

    const DragCancel = () => {
        return false
    }

    return (
        <div className="hour_item">
            <p className="time">{`${time}:00`}</p>
            <img src={srcIcon} 
                alt="" 
                draggable="false" 
                onDragStart={DragCancel}/>
            <p className="degrees">{degrees}°</p>
        </div>
    )
}

export default HourItem