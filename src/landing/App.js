import React, { Component } from 'react';
// import logo from './logo.svg';
import '../css/style.css';
import CommandPanel from '../components/CommandPanel'

export default class App extends Component {
  constructor() {
    super()
    this.state = {commands: []}
  }

  componentDidMount() {
    fetch('/commands.json').then(res => res.json()).then(json => this.setState({commands: json}))
  }

  render() {
    console.log(this.state.commands)
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <main class="wrap">
        <div class="row center-xs">
          {this.state.commands.map(el => (
            <CommandPanel author="Author" title={el.title} command={el.command} usage={el.usage} description={el.description} keywords="Keywords" score="1337" category="Category"/>
          ))}
        </div>
      </main>
    </div>
    );
  }
}

// function getJSON(url, callback) {
//   var xhr = new XMLHttpRequest();
//   xhr.open('GET', url, true);
//   xhr.responseType = 'json';
//   xhr.onload = function () {
//     var status = xhr.status;
//     if (status === 200) {
//       callback(null, xhr.response);
//     } else {
//       callback(status, xhr.response);
//     }
//   };
//   xhr.send();
// };