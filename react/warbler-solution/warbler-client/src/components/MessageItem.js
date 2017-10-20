import React from 'react';
import {Link} from 'react-router-dom';
import Moment from 'react-moment';
import './MessageItem.css';
import DefaultProfileImg from '../images/default-profile-image.jpg';

const MessageItem = (props) => {
  const {profileImageUrl, username, text, date} = props;
  return (
    <li className="list-group-item message-container">
      <Link to="/">
        <img
          src={profileImageUrl || DefaultProfileImg}
          alt={`${username} profile`}
          className="timeline-image"
        />
      </Link>
      <div className="message-area">
        <Link to="/">@{username}</Link>
        <Moment className="text-muted" format="Do MMM YYYY">{date}</Moment>
        <p>{text}</p>
      </div>
    </li>
  );
}

export default MessageItem;
