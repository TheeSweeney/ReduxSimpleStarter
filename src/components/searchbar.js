import React, {Component} from 'react';//these curly braces are equivalent to const Component = React.component//it's saying "import react, and pull of the property Component as a variable called Component"


// const SearchBar = function(){//this is a functional component because it literlly is afunction. some info goes in, some jsx comes out.
//   return <input />;
// };
//without the syntax on the first line, we'd have to specifiy React.Component below.
class SearchBar extends Component {//declares a new class with the name SearchBar. then we use ES6 extend to give it al the functionality of a react class
  //before we use any kind of state inside an opject, we must first initialize the state object
  //to initialize state, we set the property state to a plain js obj inside the classes constructor method

  //all js classes have a constructor function. it is the first an only func called when a new instance of a class is created
  //this func is reserved for doing set-up of class, intializing variables, state, etc
  constructor(props){
    super(props);//when we define a method that is already defined on the parent class - Component, which has it's own constructor method - we can call that parent's method by using super

    this.state = {term: 'butts'};//when we use state, we initialize state by create a new obj and assinging it to this.state //the obj we pass will also contain properties that we want to record on the state - in this case, we want to record the prop "term" on state (meaning search term). so we want to update term whenever something is typed into the search bar.
    //the above code is the only time we will change the state by using standard obj notation
    //everywhere else we will use this.setState({})
  }

  render() {//every class based react component must have a render method//this is the ES6 syntax for defining methods on a class
    //it's a function so we still need to return something //whenever writing jsx and using js variable, we wrap them in curly braces.
    return (
      <div>
        <input //a controlled component has it's value set by state. so it only ever changes when the state changes. this is the inverse of the previous commit where input was telling state what it should be.
        value = {this.state.term}//controlled component, ie it receives information on its value form state.
        onChange={event => this.setState({term: event.target.value})} />
        Value of the input: {this.state.term}
      </div>
    )
  }//onChange is a react event. more events can be found in docs.


  //dealing with events in react has two steps
  //first we declare an event handler - a fucntion that should be run whenever the event occurs
  //second we pass that handler to the element that we want to moniter for events. this happens here on line 5

  //all browser events trigger by native elements - div input span button - the event handlers are called with an event object. the actual var name is irrelevant but here it is event. It provides information about what is happening when the event occurs.
  // onInputChange(event) { //general syntax is on/handle, followed by the name of the element that is being watched for an event, and the name of an event. so on input change, do the below code
  //   this.setState({term: event.target.value})
  // }
  //becasue the above function is super simple, we could refactor our render as such:
  //return <input onChange={event => console.log(event.target.value)}
  //and then drop the onInputChange function entirely. this neatens up code a lot. 
  //becasue we only have on input, we do not need to wrap events in parens
  
}

//above is a class component. we make a class when we would like some sort of internal record keeping
//which is to say when we want it to be aware of itself and what has happened to it since it has been rendered.
//in general, start witha  functional based component, and then refactor to class once you decide to add new functionality.


export default SearchBar; //now any file that imports this file will get back our Searchbar class

//state is a plain js object that is used to record and react to user events
//each class based component that we define, has it's own state object
//whenever a components state is changed, it is immediately rerendered as are all of it's child elements.