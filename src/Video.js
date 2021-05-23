import { Avatar } from '@material-ui/core'
import React from 'react'
import './Video.css'

function Video({thumbnail, title, channel, timestamp, views, channelImg}) {

    return (
        <div className="video">
            <img className="video__thumbnail" src={thumbnail} alt="thumbnail" />
            <div className="video__info">
                <Avatar className="video__avatar" src={channelImg} alt={channel} />
                <div className="video__text">
                    <h4>{title}</h4>
                    <p>{channel}</p>
                    <p>{views} views <span className="video__dot"></span> {timestamp} ago</p>
                </div>
            </div>
        </div>
    )
}

export default Video
