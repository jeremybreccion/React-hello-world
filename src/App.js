import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import Greet from './components/Greet';
// import Welcome from './components/Welcome'
// import Hello from './components/Hello'
// import Message from './components/Message'
// import Counter from './components/Counter'
//import FunctionClick from './components/FunctionClick'
import ClassClick from './components/ClassClick'

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Greet name="Jeremy" godName="Zeus">
          <p>This is children props</p>
        </Greet>
        <Greet name="Jano" godName="Hades">
          <button>Action</button>
        </Greet>
        <Greet name="Jenny" godName="Hera"/>
        <Welcome name="Jeremy" godName="Zeus"/>
        <Welcome name="Jano" godName="Hades" />
        <Welcome name="Jenny" godName="Hera" />
        <Hello /> */}
        {/* <Message /> */}
        {/* <Counter/> */}
        {/* <Greet name="Jeremy" godName="Ares">
          <p>The God of War</p>
        </Greet> */}
        {/* <FunctionClick/> */}
        <ClassClick/>
      </div>
    );
  }
}

export default App;
