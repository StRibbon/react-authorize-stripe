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
  }

  // click() {
  //   this.setState({ active: true });
  // }

  // const itemLabel = item.label;
  // const itemClass = classNames({
  //   'nav-item': true
  // });
  render() {
    const classes = classNames({ 'nav-item': true });
    return (
      <div className={`${classes} ${this.state.className}`}>
        <a>{this.state.label}</a>
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
