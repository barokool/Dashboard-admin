import React from 'react'
import './statuscard.css'
const StatusCard = (props) => {
    return (
        <div className="status-card" key={props.index}>
            <i className={props.icon}></i>
            <div className="detail">
                <h4>{props.count}</h4>
                <span>{props.title}</span>

            </div>
        </div>
    )
}

export default StatusCard
