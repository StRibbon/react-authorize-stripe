import React from 'react';

const SearchInput = (props) =>
  <form
    onSubmit={e => {
      e.preventDefault();
      props.rollBall();
    }}
  >
    <div className="form-group">
      <input
        className="form-control"
        placeholder="Enter your phone number"
        value={props.phoneNum}
        onChange={(e) => props.onChange(e.target.value)}
      />
      <small className="form-text text-muted">
        Please enter a 9 digit number without dashes
      </small>
    </div>
    <button className="btn btn-primary">Submit Number</button>
  </form>;

SearchInput.propTypes = {
  onChange: React.PropTypes.func,
  rollBall: React.PropTypes.func,
  phoneNum: React.PropTypes.string,
};

export default SearchInput;
