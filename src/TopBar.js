import React from 'react'
import './TopBar.css'
import TopBarItem from './TopBarItem'

function TopBar() {
    return (
        <div className="TopBar">
            <TopBarItem text="All" />
            <TopBarItem text="Programming" />
            <TopBarItem text="Javascript" />
            <TopBarItem text="Web Development" />
            <TopBarItem text="Taarak Mehta ka ooltah chasmah" />
        </div>
    )
}

export default TopBar
