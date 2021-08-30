import React, { useState } from 'react'
import './dropdown2.css'
const DropDown2 = (props) => {
    const [isOpen, setIsopen] = useState(false);

    const handleClick = () => {
        setIsopen(!isOpen);
    };

    return (
        <div className="dropdown">
            <button className="dropdown-toggle" onClick={handleClick}>
                {
                    props.icon ? <i className={props.icon}></i> : ''
                }
                {
                    props.badge ? <span className="dropdown-toggle-badge">{props.badge}</span> : ''
                }
                {
                    props.customToggle ? props.customToggle() : ''
                }
            </button>
            <div className="dropdown-content">
                {
                    isOpen && props.contentData ? props.contentData.map((item, index) => props.renderItems(item, index)) : ''
                }
            </div>

        </div>
    );
}

export default DropDown2
