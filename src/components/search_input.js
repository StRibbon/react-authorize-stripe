import React from 'react';

const SearchInput = (props) =>
  <form
    onSubmit={e => {
      e.preventDefault();
      props.rollBall();
    }}
  >
    <h4>Please enter your phone number to confirm your invite</h4>
    <div className="form-group">
      <input
        className="form-control"
        placeholder="Enter your phone number"
        value={props.phoneNum}
        onChange={(e) => props.onChange(e.target.value)}
      />
    </div>
    <button className="btn submit">Submit Number</button>
  </form>;

SearchInput.propTypes = {
  onChange: React.PropTypes.func,
  rollBall: React.PropTypes.func,
  phoneNum: React.PropTypes.string,
};

export default SearchInput;
