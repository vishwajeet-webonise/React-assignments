import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Clock } from "./Clock"
import { A } from "./A"
import { B } from "./B"

class NewApp extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: 'VISHWAJEET',
      checked: false
    }
  }

  changeName = (event) => {
    this.setState({name: event.target.value})
  }

  handleChange = () =>(
    this.setState({ checked: !this.state.checked })
  )

  render(){
    const hidden = this.state.checked ? '' : 'hidden';
    return (
      <div className="App">
        <div>
          <input type="text" value={this.state.name} onChange={this.changeName}/>
          <p>My Name is {this.state.name}, Current Time: <Clock></Clock> </p>
        </div>
      </div>
    );
  }
}

export default NewApp;