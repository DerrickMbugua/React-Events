import logo from './logo.svg';
import './App.css';
import React from 'react';

function Welcome(props){
  return(
    <h1>Hello, {props.name}</h1>
  )
}

class Details extends React.Component{
  constructor(props){
    super(props)
    this.state ={name: 'Dex'}
  }
  render(){
    return(
      <div>
        <h2>My name is {this.state.name}</h2>
      </div>
    )
  }
}

class Toggle extends React.Component{
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <body>
        <Welcome name='Saru' />
        <Details />
        <Toggle />
      </body>
    </div>
  );
}

export default App;
