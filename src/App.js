import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';
// import Greet from './components/Greet';
// import Welcome from './components/Welcome'
// import Hello from './components/Hello'
// import Message from './components/Message'
// import Counter from './components/Counter'
//import FunctionClick from './components/FunctionClick'
//import ClassClick from './components/ClassClick'
//import EventBind from './components/EventBind';
//import ParentComponent from './components/ParentComponent';

import './appStyles.css'
import styles from './appStyles.module.css'

class App extends Component {
  render() {
    return (
      <div className="App">
      
      <h1 className="error">Error</h1>
      <h1 className={styles.success}>Success</h1>
      {/* <Inline/> */}
      {/* <Stylesheet primary={true}/> */}
      {/* <NameList/> */}
      {/* <UserGreeting /> */}



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
        {/* <ClassClick/> */}
        {/* <EventBind/> */}
        {/* <ParentComponent/> */}
      </div>
    );
  }
}

export default App;
