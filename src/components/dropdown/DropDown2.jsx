import React, { useState, useRef, useEffect } from 'react'
import './dropdown2.css'
const DropDown2 = (props) => {

    const [isOpen, setIsopen] = useState(false);

    const handleClick = () => {
        setIsopen(!isOpen);
    };

    const ref = useRef();

    //if the menu is open and not clicking within in the menu => close 
    useEffect(() => {
        const clickOutside = e => {
            if (isOpen && ref.current && !ref.current.contains(e.target))
                setIsopen(false)

        }
        document.addEventListener('mousedown', clickOutside)

        return () => {
            document.removeEventListener("mousedown", clickOutside)
        }
    }, [isOpen])

    return (
        <div className="dropdown" ref={ref}>
            <button className="dropdown-toggle" onClick={handleClick}>
                {
                    props.icon ? <i className={props.icon}></i> : ''
                }
                {
                    props.badge ? <span className="dropdown-toggle-badge">{props.badge}</span> : ''
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
