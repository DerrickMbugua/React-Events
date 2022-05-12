import logo from './logo.svg';
import './App.css';
import React from 'react';

function Welcome(props) {
  return (
    <h1>Hello, {props.name}</h1>
  )
}

class Details extends React.Component {
  constructor(props) {
    super(props)
    this.state = { name: 'Dex' }
  }
  render() {
    return (
      <div>
        <h2>My name is {this.state.name}</h2>
      </div>
    )
  }
}

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };

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

function UserGreetings(props) {
  return (
    <h1>Welcome Back</h1>
  )
}

function GuestGreetings(props) {
  return (
    <h1>Welcome Guest</h1>
  )
}

function Greetings(props) {
  const isLogged = props.isLogged
  if (isLogged) {
    return <UserGreetings />
  } else {
    return <GuestGreetings />
  }
}

function LoginButton(props) {
  return (
    <div>
      <button onClick={props.onClick}>
        Login
      </button>
    </div>
  )
}

function LogoutButton(props) {
  return (
    <div>
      <button onClick={props.onClick}>
        Logout
      </button>
    </div>
  )
}

class LoginControl extends React.Component {
  constructor(props) {
    super(props)
    this.handleLoginClick = this.handleLoginClick.bind(this)
    this.handleLogoutClick = this.handleLogoutClick.bind(this)
    this.state = { isLogged: false }
  }

  handleLoginClick() {
    this.setState({ isLogged: true })
  }

  handleLogoutClick() {
    this.setState({ isLogged: false })
  }

  render() {
    const isLogged = this.state.isLogged
    let button

    if (isLogged) {
      button = <LogoutButton onClick={this.handleLogoutClick} />
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />
    }

    return (
      <div>
        <Greetings isLogged={this.state.isLogged} />
        {button}
        {isLogged ? <LogoutButton onClick={this.handleLogoutClick} />
          : <LoginButton onClick={this.handleLoginClick} />}
      </div>
    )
  }
}

function Mailbox(props) {
  const unreadMessages = props.unreadMessages;
  return (
    <div>
      <h1>Hello!</h1>
      {unreadMessages.length > 0 &&
        <h2>
          You have {unreadMessages.length} unread messages.
        </h2>
      }
    </div>
  );
}

const messages = ['D', 'E', 'R', 'O']

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
        <Greetings isLogged={true} />
        <LoginControl />
        <Mailbox unreadMessages={messages} />
      </body>
    </div>
  );
}

export default App;
