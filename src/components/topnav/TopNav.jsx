import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './topnav.css'
import notifcations from '../../assets/JsonData/notification.json'
import DropDown2 from '../dropdown/DropDown2'
import user from '../../assets/JsonData/user_menus.json'
const renderNotify = (item, index) => (
    <div className="notify-item" key={index}>
        <i className={item.icon}></i>
        <span>{item.content}</span>
    </div>
)

const renderUser = (item, index) => (
    <Link to="/" >
        <div className="notify-item" key={index}>
            <i className={item.icon}></i>
            <span>{item.content}</span>
        </div>
    </Link>
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
                        contentData={user}
                        renderItems={renderUser}
                    />
                </div>
                <div className="topnav-right-item">
                    <DropDown2
                        icon="bx bx-bell"
                        badge='12'
                        contentData={notifcations}
                        renderItems={renderNotify}
                    />
                </div>


            </div>
        </div>
    )
}

export default TopNav
