import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      value: "",
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(key){
    return (event) => {
      switch(key) {
        case 'int':
          let val = 0;
          if(event.target.value !== ""){
            val = event.target.value;
          }
          this.setState({value: parseInt(val)});
          break;
        case 'string':
          this.setState({value: event.target.value});
          break;
        default:
          break;
      }
    }
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            welcome to thoughtvent
          </p>
          <p>
            whats on your mind?
          </p>
          <input
              placeholder="click here"
              style={styles.input}
              type="text"
              value={this.state.value}
              onChange={this.handleChange('string')}
          />
        </header>
      </div>
    )
  }
}

const styles = {
  input: {
    textAlign: 'center',
    backgroundColor: '#282c34',
    fontSize: 20,
    color: '#FFFFFF',
    borderWidth: 0,
    width: '40%',
    borderRadius: 15,
    
  },
  thisStyle: {
    textAlign: 'center',
    backgroundColor: '#282c34',
    fontSize: 16,
  },
}

export default App;
