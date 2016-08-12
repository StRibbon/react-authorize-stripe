import React from 'react';
import classNames from 'classnames';

class NavListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      label: props.item.label,
      className: props.item.className,
      active: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ active: true });
  }

  render() {
    const classes = classNames({ 'nav-item': true });
    const isActive = classNames({ active: this.state.active });
    return (
      <div className={`${classes} ${this.state.className}`}>
        <a className={isActive} onClick={this.handleClick}>{this.state.label}</a>
      </div>
    );
  }
}
NavListItem.propTypes = {
  label: React.PropTypes.string,
  className: React.PropTypes.string,
  item: React.PropTypes.object
};

export default NavListItem;
