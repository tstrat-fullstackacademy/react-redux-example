import React from 'react';
import { connect } from 'react-redux';
import { setName } from '../dux/reducer';

function NameChanger(props) {
  return (
    <div className='namechanger'>
      <h1>Name Changer</h1>
      <input
        value={props.name}
        type='text'
        onChange={e => props.setName(e.target.value)}
      />
      <h3>My name:</h3>
      <h3>{props.name}</h3>
    </div>
  );
}

const mapStateToProps = reduxState => {
  return {
    name: reduxState.name
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setName: val => dispatch(setName(val))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NameChanger);
