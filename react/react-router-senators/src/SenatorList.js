import React from 'react';
import {Link} from 'react-router-dom';

const SenatorList = (props) => {
  const senators = props.senators.map(s => (
    <li key={s.person.cspanid}>
      <Link to={`/${s.person.cspanid}`}>{s.person.name}</Link>
    </li>
  ));
  return (
    <div className="container">
      <h1>Senators</h1>
      <ul>
        {senators}
      </ul>
    </div>
  );
}

export default SenatorList;
