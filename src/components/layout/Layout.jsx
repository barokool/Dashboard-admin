import React from 'react'
import Routes from '../Routes'
import SideBar from '../sidebar/SideBar'
import { BrowserRouter, Route } from 'react-router-dom'
import './layout.css'
import TopNav from '../topnav/TopNav'

const Layout = () => {
    return (
        <BrowserRouter>
            <Route render={(props) => (
                <div className="layout">
                    <div className="layout-sidebar">
                        <SideBar {...props} />
                    </div>
                    <div className="layout-content">
                        <TopNav />
                        <div className="layout-content-main">
                            <Routes />
                        </div>
                    </div>
                </div>
            )} />
        </BrowserRouter>
    )
}

export default Layout
