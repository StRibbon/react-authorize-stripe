import React, { Component } from 'react';
import classNames from 'classnames';

class NavListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      label: props.item.label,
      className: props.item.className,
      active: false
    };
  }

  render() {
    const classes = classNames({ 'nav-item': true });
    const isActive = classNames({ active: this.props.isActive });
    return (
      <div className={`${classes} ${this.state.className}`}>
        <a className={isActive} onClick={this.props.handleClick}>{this.state.label}</a>
      </div>
    );
  }
}
NavListItem.propTypes = {
  label: React.PropTypes.string,
  className: React.PropTypes.string,
  item: React.PropTypes.object,
  handleClick: React.PropTypes.func,
  isActive: React.PropTypes.bool
};

export default NavListItem;
