//react is a js library used to creat html that will rener to a user
//component are snippets of code that produce html
//when we write react code, we write multiple components
//we nest these components together by placing one inside the other to make complex apps relatively simple
//a component is a collection of js fucniotns that make html
  //writing js, but will eventually produce html

import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/searchbar';
const apiKey = 'AIzaSyDRCIzZ1f8j7F1cT79mA2tEN-7bGSnr5pQ';

//create new component, should produce some html

const App = () => {//the only difference between this syntax and the below, is the "this" binding. But more or less, this syntax is identical to the below.
  return (
  <div>
    <SearchBar />
  </div>
  );
};

/*the above syntax is equal to:
  return <div>
      <SearchBar />
    </div>

  I think I prefer the one not commented out because as this app gets more complex, it'd be nicer for everything to look like inlin html
  If you choose to use the commented out syntax, be sure the first opening tag appears immediately to the right of return or you will get an error.
*/

//below is what the above ES6 looks like with mostly ES5 syntax.
// const App = function(){//const is ES6 syntax//does the same thing as defining a variable, except with const we are saying that this variable (app) will not be reassigned later on.
//   return <div>Hi!</div>//JSX is a way to write js that looks like html
// }
//when we create a component, we are creating a class of a component, or type. 
//We can have many different instances of App. App itself is a class, not an instance
//App is a factory that creates instances that are then rendered to the DOM

  //take this generated html and put it on the page/in the DOM

//when we write something like <div></div> into jsx, we are referencing a class of DOM elements, in this example, divs
//this is interpreted by jsx, as a React.createElement('div', null); so it is creating an instance of that class
//so, to render an instance of a class, we need only refer to it's html
//since App above is a class definition, to render it onto the page, we need simply...

//ReactDOM.render(<App />)  //this now creates an instance of App, and passes it to ReactDOM.
//Above, we are telling React to render this element, but we are not telling it where to go, hence the error "Target container is not a DOM element."
//so, much like angular requires an ng-view,
//angular requires a target DOM element, in the below example, the element with the class "container"
ReactDOM.render(<App />, document.querySelector(".container"))//the div with.container is the root container element of anything rendered using react.


//App is a class, <App /> is an instance of that class