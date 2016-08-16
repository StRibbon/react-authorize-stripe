import React, { Component } from 'react';

const initialState = {
  name: '',
  number: '',
  cvc: '',
  exp_month: '',
  exp_year: ''
};

class CreditCardForm extends Component {
  constructor(props) {
    super(props);
    this.state = Object.assign({}, initialState);
  }
  render() {
    const handleClick = () => {
      console.log(this.state.name);
      Stripe.card.createToken(this.state, (err, token) => {
        console.log(token.id);
        this.setState(Object.assign({}, initialState));
      });
    };
    return (
      <form>
        <div className="form-group">
          <label>Full Name</label>
          <input
            className="form-control"
            placeholder="Enter your full name"
            value={this.state.name}
            onChange={event => this.setState({ name: event.target.value })}
          />
        </div>
        <div className="form-group">
          <label>Credit Card #</label>
          <input
            className="form-control"
            placeholder="Enter your credit card number"
            data-stripe="number"
            value={this.state.number}
            onChange={event => this.setState({ number: event.target.value })}
          />
        </div>
        <div className="form-group">
          <label>CVC #</label>
          <input
            className="form-control"
            placeholder="Enter your CVC"
            data-stripe="cvc"
            value={this.state.cvc}
            onChange={event => this.setState({ cvc: event.target.value })}
          />
        </div>
        <div className="form-inline">
          <label>Expiration</label>
          <input
            className="form-control"
            placeholder="Enter month"
            data-stripe="exp_month"
            value={this.state.exp_month}
            onChange={event => this.setState({ exp_month: event.target.value })}
          />
          /
          <input
            className="form-control"
            placeholder="Enter year"
            data-stripe="exp_year"
            value={this.state.exp_year}
            onChange={event => this.setState({ exp_year: event.target.value })}
          />
        </div>
        <span
          onClick={() => handleClick()}
          className="btn btn-primary"
        >
          Submit Payment Info
        </span>
      </form>
    );
  }
}

CreditCardForm.propTypes = {
  rollBall: React.PropTypes.func,
};

export default CreditCardForm;
