import React from 'react';

function Slider(props) {
  return (
    <div className='slider'>
      <input
        value={props.count}
        type='range'
        min='0'
        max='100'
        onChange={e => props.setCount(+e.target.value)}
      />
      {props.count}
    </div>
  );
}

export default Slider;
