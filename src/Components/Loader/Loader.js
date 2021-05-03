import React from 'react'
import './Loader.css'

const Loader = () => (
    <div style={{display: 'flex', justifyContent: 'center', margin: '.5rem'}}>
        <div className="lds-ring">
            <div></div><div></div><div></div><div></div></div>
    </div>
)

export default Loader