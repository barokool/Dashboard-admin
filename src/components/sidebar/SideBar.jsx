import React from 'react'
import { Link } from 'react-router-dom'
import './sidebar.css'
import logo from '../../assets/images/logo.png'
import sidebar_items from '../../assets/JsonData/sidebar_routes.json'

const SidebarItem = props => {

    const active = props.active ? 'active' : ''

    return (
        <div className="sidebar-items">
            <div className={`sidebar-item ${active}`}>
                <i className={props.icon}></i>
                <span>
                    {props.title}
                </span>
            </div>
        </div>
    )
}

const SideBar = (props) => {
    const activeItem = sidebar_items.findIndex(item => item.route === props.location.pathname)

    return (
        <div className="sidebar">
            <div className="sidebar-logo">
                <img src={logo} alt="/" />
            </div>
            {
                sidebar_items.map((item, index) => (
                    <Link to={item.route} key={index}>
                        <SidebarItem
                            title={item.display_name}
                            icon={item.icon}
                            active={index === activeItem}
                        />
                    </Link>
                ))
            }
        </div>
    )
}

export default SideBar
