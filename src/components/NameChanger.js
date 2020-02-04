import React from 'react';

function NameChanger(props) {
  return (
    <div className='namechanger'>
      <input
        value={props.name}
        type='text'
        onChange={e => props.setName(e.target.value)}
      />
      {props.name}
    </div>
  );
}

export default NameChanger;
