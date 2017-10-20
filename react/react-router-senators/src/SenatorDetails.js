import React from 'react';

const SenatorDetails = ({senators, match, ...rest}) => {
  const senator = senators.find(s => s.person.cspanid === +match.params.cspanid);
  if (!senator) {
    return (
      <div>Sorry, no senator found</div>
    );
  }

  return (
    <div>
      <h1>{senator.person.name}</h1>
      <h3>{senator.description} - {senator.party}</h3>
      <p><a href={senator.website}>{senator.website}</a></p>
    </div>
  );
};

export default SenatorDetails;
