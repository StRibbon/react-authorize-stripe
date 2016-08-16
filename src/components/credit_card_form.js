import React, { Component } from 'react';

const initialState = {
  name: '',
  number: '',
  cvc: '',
  exp_month: '',
  exp_year: '',
};

class CreditCardForm extends Component {
  constructor(props) {
    super(props);
    this.state = Object.assign({}, initialState);
  }
  render() {
    const handleClick = (e) => {
      e.preventDefault();
      Stripe.card.createToken(this.state, (err, token) => {
        if (err !== 200) {
          this.props.handleChange(
            'alert alert-danger',
            'Your credit card is invalid'
          );
        } else {
          this.props.handleChange(
            'alert alert-success',
            'Your credit card was accepted'
          );
          console.log(`${this.state.name} & ${token.id}`);
          this.setState(Object.assign({}, initialState));
        }
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
            className="form-control small-input"
            placeholder="cvc"
            data-stripe="cvc"
            value={this.state.cvc}
            onChange={event => this.setState({ cvc: event.target.value })}
          />
        </div>
        <div className="form-group">
          <label>Expiration</label>
          <div className="row">
            <div className="col-xs-2 col-sm-2 col-lg-1">
              <input
                className="form-control small-input"
                placeholder="mm"
                data-stripe="exp_month"
                value={this.state.exp_month}
                onChange={event => this.setState({ exp_month: event.target.value })}
              />
            </div>
            <div className="col-xs-2 col-sm-2 col-lg-1">
              <input
                className="form-control small-input"
                placeholder="yy"
                data-stripe="exp_year"
                value={this.state.exp_year}
                onChange={event => this.setState({ exp_year: event.target.value })}
              />
            </div>
          </div>
        </div>
        <button
          onClick={(e) => handleClick(e)}
          className="btn submit"
        >
          Submit Payment
        </button>
      </form>
    );
  }
}

CreditCardForm.propTypes = {
  rollBall: React.PropTypes.func,
  handleChange: React.PropTypes.func,
};

export default CreditCardForm;
