import React from 'react'
import './Display.css'

export default props =>
    <div className="display">
        <div className="align">
            {props.value}
        </div>
    </div>