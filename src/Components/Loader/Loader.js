import React from 'react'
import './Loader.css'

const Loader = () => (
    <div className="loader">
        <div style={{display: 'flex', justifyContent: 'center', margin: '.5rem', flex: '1 0 auto'}}>
            <div className="lds-ring">
                <div></div><div></div><div></div><div></div></div>
        </div>
    </div>
)

export default Loader