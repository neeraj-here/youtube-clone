import { Avatar } from '@material-ui/core'
import React from 'react'
import './Video.css'
import MoreVertIcon from '@material-ui/icons/MoreVert';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import ListIcon from '@material-ui/icons/List';

function Video({thumbnailImg, title, channelName, timestamp, views, channelImg}) {

    return (
        <div className="video">
            <div className="video__thumbnail">
                <img className="video__thumbnailImg" src={thumbnailImg} alt="thumbnail" />
                <div className="video__wactchOptions">
                    <WatchLaterIcon className="video__wactchOptionsIcon" />
                    <ListIcon className="video__wactchOptionsIcon" />
                </div>
                <div className="video__playButton"> <PlayArrowIcon className="video__playButtonIcon" /> </div>
                <div className="video__duration">5:30</div>
            </div>
            <div className="video__info">
                <Avatar className="video__avatar" src={channelImg} alt={channelName} />
                <div className="video__text">
                    <h4 title={title}>{ title.length > 45  ? title.substring(0, 45)+"..." : title}</h4>
                    <p className="video__channelName" title={channelName}>{channelName}</p>
                    <p>{views} views • {timestamp} ago</p>
                </div>
                <div className="video__threeDots"> <MoreVertIcon /> </div>
            </div>
        </div>
    )
}

export default Video
