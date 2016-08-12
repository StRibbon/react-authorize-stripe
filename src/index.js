import './index.scss';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import NavList from './components/nav_list';

/* eslint react/prefer-stateless-function: "off" */

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { list: [] };

    const status = response => {
      if (response.status >= 200 && response.status < 300) {
        return Promise.resolve(response);
      }
      return Promise.reject(new Error(response.statusText));
    };

    const json = response =>
      response.json();

    fetch('http://localhost:8081/nav')
      .then(status)
      .then(json)
      .then(data =>
        this.setState({ list: data.children })
      );
  }
  render() {
    return (
      <div>
        <NavList list={this.state.list} />
      </div>
    );
  }
}

// const App = (props) => <div>{props.children}</div>;
App.propTypes = {
  children: React.PropTypes.node,
  list: React.PropTypes.array
};

ReactDOM.render(<App />, document.querySelector('.container'));
