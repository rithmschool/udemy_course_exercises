import React from 'react';
import MessageList from './MessageList';
import UserAside from './UserAside';

const MessageTimeline = ({profileImageUrl, username, messages}) => (
  <div className="row">
    <UserAside
       profileImageUrl={profileImageUrl}
       username={username}
    />
    <MessageList messages={messages} />
  </div>
);

export default MessageTimeline;
