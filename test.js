//smoke test
//list
import React from 'react';
// make the ReactDOM available, necessary for rendering the component
import ReactDOM from 'react-dom';
// make the App component available
import App from './App';
// this is the test case
it('renders without crashing', () => {
  // first create a DOM element to render the component into
  const div = document.createElement('div');
  // render the component, this is the actual test, if something is wrong it will fail here
  ReactDOM.render(<App />, div);
  // clean up code
  ReactDOM.unmountComponentAtNode(div);
});

//card
import React from 'react';
// make the ReactDOM available, necessary for rendering the component
import ReactDOM from 'react-dom';
// make the App component available
import App from './App';
// this is the test case
it('renders without crashing', () => {
  // first create a DOM element to render the component into
  const div = document.createElement('div');
  // render the component, this is the actual test, if something is wrong it will fail here
  ReactDOM.render(<App />, div);
  // clean up code
  ReactDOM.unmountComponentAtNode(div);
});

//snapshot test
//list

import React from 'react';
import './Messages.css';
export default function Messages(props) {
  const badge = props.unread 
    ? <div className="unread_count">{props.unread}</div> 
    : null;
  return (
    <div className="messages">
      {props.name} 
      {badge}
    </div>  
  );
}
//card

import React from 'react';
import './Messages.css';
export default function Messages(props) {
  const badge = props.unread 
    ? <div className="unread_count">{props.unread}</div> 
    : null;
  return (
    <div className="messages">
      {props.name} 
      {badge}
    </div>  
  );
}

