import React from 'react';
import MessageItem from './MessageItem';

const MessageList = ({messages}) => {
  let messageList = messages.map(m => (
    <MessageItem
      key={m.id}
      date={m.createdAt}
      username={m.username}
      text={m.text}
      profileImageUrl={m.profileImageUrl}
    />
  ));
  return (
    <div className="col-sm-8">
      <ul className="list-group">
        {messageList}
      </ul>
    </div>
  );
}

MessageList.defaultProps = {
  messages: []
}

export default MessageList;
