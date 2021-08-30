import React, { useState } from 'react'
import './topnav.css'
import notifcations from '../../assets/JsonData/notification.json'
import DropDown2 from '../dropdown/DropDown2'

const renderNotify = (item, index) => (
    <div className="notify-item" key={index}>
        <i className={item.icon}></i>
        <span>{item.content}</span>
    </div>
)


const TopNav = () => {

    return (
        <div className="topnav">
            <div className="topnav-search">
                <input type="text" placeholder="Search..." />
                <i className="bx bx-search"></i>
            </div>
            <div className="topnav-right">
                <div className="topnav-right-item">
                    <DropDown2
                        icon="bx bx-user"

                    />
                </div>
                <div className="topnav-right-item">
                    <DropDown2
                        icon="bx bx-bell"
                        badge='12'
                        contentData={notifcations}
                        renderItems={(item, index) => renderNotify(item, index)}
                    />
                </div>


            </div>
        </div>
    )
}

export default TopNav
