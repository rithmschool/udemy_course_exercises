import React from 'react';
import MessageTimeline from '../components/MessageTimeline';

const Homepage = ({currentUser, messages}) => {
  if (!currentUser) {
    return <div style={{textAlign: 'center'}}>Please login</div>;
  }
  return (
    <MessageTimeline
      profileImageUrl={currentUser.profileImageUrl}
      username={currentUser.username}
      messages={messages}
    />
  );
}

export default Homepage;
