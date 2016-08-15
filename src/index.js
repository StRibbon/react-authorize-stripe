import './index.scss';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchInput from './components/search_input';

/* eslint react/prefer-stateless-function: "off" */

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { ballResponse: '' };
  }
  render() {
    const rollBall = () => {
      const question = 'Is this number valid?';
      const magic = new XMLHttpRequest();
      magic.open('GET', `https://8ball.delegator.com/magic/JSON/${encodeURIComponent(question)}`);
      magic.onreadystatechange = () => {
        if (magic.readyState !== 4 || magic.status !== 200) {
          return;
        }
        const response = JSON.parse(magic.responseText);
        const type = response.magic.type;
        const answer = response.magic.answer;
        if (type === 'Affirmative') {
          this.setState({ ballResponse: answer });
          console.log('Your number has been found');
        } else if (type === 'Netural') {
          this.setState({ ballResponse: answer });
          console.log('Request succeeded, but your number is not in our system');
        } else {
          this.setState({ ballResponse: answer });
          console.log('Request failed, please try another number');
        }
      };
      magic.send();
    };
    return (
      <div className="container">
        <SearchInput
          rollBall={() => rollBall()}
          ballResponse={this.state.ballResponse}
        />
      </div>
    );
  }
}

// const App = (props) => <div>{props.children}</div>;

ReactDOM.render(<App />, document.querySelector('.container'));
