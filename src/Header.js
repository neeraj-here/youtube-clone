import React from 'react'
import './Header.css'
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';
import MicIcon from '@material-ui/icons/Mic';
import youtube from './Media/youtube.jpg'

function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <MenuIcon />
                <img
                    className="header__logo"
                    src={youtube}
                    alt="youtube icon"
                />
            </div>
            <div className="header__input">
                <div className="header__searchBar" title="Search">
                    <input type="text" placeholder="Search" />
                    <SearchIcon className="header__searchIcon"  />
                </div>
                <MicIcon className="header__mic" title="Speak"/>
            </div>
            <div className="header__icons">
                <VideoCallIcon className="header__icon" />
                <AppsIcon className="header__icon" />
                <NotificationsIcon className="header__icon" />
                <Avatar
                    alt="Neeraj Sharma"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNmuJCK45Fpha2ISYrEmb2_B-ATNDYcihgAw&usqp=CAU"
                    className="header__avatar"
                />
            </div>
        </div>
    )
}

export default Header