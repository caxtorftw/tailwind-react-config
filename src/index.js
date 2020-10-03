import React from 'react';
import ReactDOM from 'react-dom';
import './css/main.css'
import Hello from './Components/Hello'

class App extends React.Component {
  render() {
    return(
      <Hello />
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));