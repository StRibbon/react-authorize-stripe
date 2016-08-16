import './index.scss';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchInput from './components/search_input';
import CreditCardForm from './components/credit_card_form';

/* eslint react/prefer-stateless-function: "off" */

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phoneNum: '',
      numStatus: false,
      ballResponse: '',
    };
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
        if (type === 'Affirmative') {
          this.setState({
            ballResponse: 'Confirmed: your number has been found',
            numStatus: true
          });
        } else if (type === 'Neutral') {
          this.setState({
            ballResponse: 'Netural: number is not in our system',
            phoneNum: ''
          });
        } else {
          this.setState({
            ballResponse: 'Failed: please try another number',
            phoneNum: ''
          });
        }
      };
      magic.send();
    };
    return (
      <div className="container">
        {this.state.numStatus === false ? <SearchInput
          rollBall={() => rollBall()}
          phoneNum={this.state.phoneNum}
          ballResponse={this.state.ballResponse}
          onChange={(phoneNum) => {
            this.setState({ phoneNum });
          }}
        /> : null}
        <div>
          <p>{this.state.ballResponse}</p>
        </div>
        {this.state.numStatus ? <CreditCardForm /> : null}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
