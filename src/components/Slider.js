import React from 'react';
import { connect } from 'react-redux';
import { setCount } from '../dux/reducer';

function Slider(props) {
  return (
    <div className='slider'>
      <h1>SLIDER</h1>
      <input
        value={props.count}
        type='range'
        min='0'
        max='100'
        onChange={e => props.setCount(+e.target.value)}
      />
      <h3>Count:</h3>
      <h3>{props.count}</h3>
    </div>
  );
}

const mapStateToProps = reduxState => {
  return {
    count: reduxState.count
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setCount: val => dispatch(setCount(val))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Slider);
