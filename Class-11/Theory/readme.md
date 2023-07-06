## Namaste React Course by Akshay Saini 🚀
# Chapter 11 - Data is the new Oil 


## Q: What is prop drealing ?
A:  Prop drilling occurs when you need to pass down data through multiple nested components to reach the ones that require the data. This practice can lead to a complex and tightly coupled component hierarchy, making it challenging to manage state and refactor your application.07

Now we can create a nested routing for `/path` using `children` again as follows:




## Q: What is lifting the state up ?
A: Lifting up the State: As we know, every component in React has its own state. Because of this sometimes data can be redundant and inconsistent. So, by Lifting up the state we make the state of the parent component as a single source of truth and pass the data of the parent in its children.

Time to use Lift up the State: If the data in “parent and children components” or in “cousin components” is Not in Sync.


## Q: What is Context Provider and context Consumer`?
A:  The provider is used to create a context that can be consumed. The consumer is used to consume the nearest provided context. Note that you can provide the same context many times through your application, and you can even provide the same context nested.

## Q: If you don't pass a value to provider does it take default value in reactjs?
A: In ReactJS, if you don't pass a value to a provider component, it will not automatically take a default value. The behavior of the provider component depends on how it's implemented.

When using the Context API in React, the Provider component allows you to define a value that will be accessible by the nested components through the Consumer or the useContext hook. If you don't provide a value to the Provider, the value will be undefined by default.

