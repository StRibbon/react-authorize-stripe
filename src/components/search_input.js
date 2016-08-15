import React, { Component } from 'react';

class SearchInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num: '',
      ballResponse: props.ballResponse
    };
  }

  render() {
    return (
      <form>
        <div className="form-group">
          {/* <label htmlFor="searchInput">Enter your phone number</label> */}
          <input
            className="form-control"
            placeholder="Enter your phone number"
            value={this.state.num}
            onChange={event => this.setState({ num: event.target.value })}
          />
          <small className="form-text text-muted">
            Please enter a 9 digit number without dashes
          </small>
        </div>
        <p>{this.state.num}</p>
        <p>{this.state.ballResponse}</p>
        <span onClick={this.props.rollBall} className="btn btn-primary">Submit</span>
      </form>
    );
  }
}

SearchInput.propTypes = {
  rollBall: React.PropTypes.func,
  ballResponse: React.PropTypes.string
};

export default SearchInput;
