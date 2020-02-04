import React, { Component } from 'react';
import store from './dux/store';
import { setCount, setName } from './dux/actionCreators';
import Slider from './components/Slider';
import NameChanger from './components/NameChanger';
class App extends Component {
  constructor() {
    super();
    this.state = {
      slider: store.getState().count,
      name: store.getState().name
    };
  }
  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      this.setState({
        slider: store.getState().count,
        name: store.getState().name
      });
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }
  render() {
    return (
      <div className='app'>
        <Slider
          count={this.state.slider}
          setCount={val => store.dispatch(setCount(val))}
        />
        <NameChanger
          name={this.state.name}
          setName={val => store.dispatch(setName(val))}
        />
      </div>
    );
  }
}

export default App;
