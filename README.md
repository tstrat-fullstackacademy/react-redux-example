## Steps to instal

1. npm install
2. npm start

- Should start running on port: 8080 if available

3. Open console.log to see actions being dispatched to the reducer

# STEPS TO SET UP REDUX

1. Import the store

```js
import { createStore } from 'redux';
```

2. Create a reducer function that takes state, and actions as arguments.

- add InitialState

```js
const initialState = {};

function reducer(state = initalState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
```

3. Set Up an Action Creator

- Make a variable for the type of action (so you avoid typos later)
- Make a function that returns the action object with the type and any additional data

```js
  const MY_ACTION = 'MY_ACTION' // the type of the action is the string 'my_action'

  function createMyActionFn(someData) {
    // return the action as an object with 'type' and any other info needed
    return {
      type: MY_ACTION
      payload: someData
    }
  }
```

- Add the case to the reducer

```js
function reducer(state = initalState, action) {
  switch (action.type) {
    case MY_ACTION:
      return { state, propertyToUpdate: action.payload }; // return the new state
    default:
      return state;
  }
}
```

4.  Dont forget to `export default` the reducer and `export` the action creators so they can be used in other files.

# STEPS TO ADD REACT-REDUX

1. Import `Provider` from 'react-redux' and `store` from wherever the redux store is saved.
2. Wrap the App Component in the parent Provider, and set a store property for Provider to be the store for our redux

```js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import store from './dux/store';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
```

3. In a component that you want to tie into redux:

- 3a. Import connect from redux and any actions you want from the reducer file

- 3b. Create a mapStateToProps function which maps the redux state onto the component props

```js
const mapStateToProps = reduxState => {
  return {
    myValue: reduxState.value
  };
};
```

- 3c. Create a mapDispatchToProps function which creates dispatch actions that you can use.
  ```js
  const mapDispatchTProps = dispatch => {
    return {
      myDispatchFn: val => dispatch(myActionCreator(val))
    };
  };
  ```
- 3d. Connect them via the connect function and invoke it with the Component as an argument

```js
export default connect(mapStateToProps, maptDispatchToProps)(MyComponent);
```

4. Profit!

- you now can use the values you mapped as part of the components props (ie. props.myValue, props.myDispatchFn, etc..)
