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
      status: '',
      response: ''
    };
  }
  render() {
    const handleChange = (status, response) => {
      this.setState({ status, response });
    };
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
            response: 'Your number has been found',
            status: 'alert alert-success',
            numStatus: true
          });
        } else if (type === 'Neutral') {
          this.setState({
            response: 'Your number is not in our system',
            status: 'alert alert-info',
            phoneNum: ''
          });
        } else {
          this.setState({
            response: 'Please try another number',
            status: 'alert alert-danger',
            phoneNum: ''
          });
        }
      };
      magic.send();
    };
    return (
      <div>
        <div className={this.state.status}>
          {this.state.response}
        </div>
        <div className="container">
          {this.state.numStatus === false ? <SearchInput
            rollBall={() => rollBall()}
            phoneNum={this.state.phoneNum}
            onChange={(phoneNum) => {
              this.setState({ phoneNum });
            }}
          /> : null}
          {this.state.numStatus ? <CreditCardForm
            handleChange={(status, response) => handleChange(status, response)}
          /> : null}
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.react-app'));
