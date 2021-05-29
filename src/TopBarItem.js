import React from 'react'
import './TopBarItem.css'

function TopBarItem({text}) {
    return (
        <div className="TopBarItem">
            <span> {text.length > 25 ? text.substr(0,25) + "..." : text} </span>
        </div>
    )
}

export default TopBarItem
