## Namaste React Course by Akshay Saini 🚀
# Chapter 11 - Data is the new Oil 


## Q: Redux Vs. useContext ?
A:`useContext`: useContext is a hook that provides a way to pass data through the component tree without manually passing props down through    each nested component.
`Redux`: Redux is a state managing library used in JavaScript apps. It is very popular for React and React-Native. It simply manages the state and data of your application.

Building Parts of redux:

1. Action
2. Reducer
3. Store 


 |   `useContext `    |   `Virtual DOM` |
|-------------|-----------------|
| useContext is a hook.  | Redux is a state management library.  | 
| It is used to share data.  | It is used to manage data and state.  |
| Changes are made with the Context value. | Changes are made with pure functions i.e. reducers. |
|We can change the state in it. | The state is read-only. We cannot change them directly.  |
| It re-renders all components whenever there is any update in the provider’s value prop. | It only re-render the updated components. |
| It is better to use with small applications.  | It is perfect for larger applications.  |
| It is easy to understand and requires less code. | It is quite complex to understand. |




## Q:what are the  advantage of using redux-toolkit over redux ?
A: Redux is a JavaScript library for managing application state. It is most commonly used with React, but can be used with other JavaScript frameworks as well.

Redux Toolkit is a set of tools that helps simplify Redux development. It includes utilities for creating and managing Redux stores, as well as for writing Redux actions and reducers.


## Q: What is Dispatch `?
A:  The dispatch function is provided by the store and is used to trigger actions, which in turn trigger the reducer functions to update the state.

## Q:  What is Reducer? ?
A: Reducer takes two parameters, which are action and state. It actually acts as a manipulator that manipulates the state whenever an action is dispatched, depending on which type of action is being dispatched such as storing a data by adding the input fields value to state on clicking the Submit button.

When using the Context API in React, the Provider component allows you to define a value that will be accessible by the nested components through the Consumer or the useContext hook. If you don't provide a value to the Provider, the value will be undefined by default.


## Q : What is Slice ?
A : A `slice` is a collection of Redux reducer logic and actions for a single feature in your app, typically defined together in a single file. The name comes from splitting up the root Redux state object into multiple "slices" of state.

## Q : what is Selector ?
A : A `selector` is simply a function that accepts Redux state as an argument and returns data that is derived from that state.

## Q : Explain createSlice and configuration it takes ?
A : ref -> https://redux-toolkit.js.org/api/createslice