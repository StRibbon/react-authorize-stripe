import React, { Component } from 'react';
import NavListItem from './nav_list_item';
// import classNames from 'classnames';
class NavList extends Component {
  constructor() {
    super();
    this.state = { activeItem: null };
  }
  render() {
    const handleClick = (item) => {
      this.setState({ activeItem: item.label });
    };
    const navItems = this.props.list.map((item) =>
      <NavListItem
        handleClick={() => handleClick(item)}
        isActive={this.state.activeItem === item.label}
        key={item.label}
        item={item}
      />
    );

    return (
      <div className="nav-bar">
        {navItems}
      </div>
    );
  }
}

NavList.propTypes = { list: React.PropTypes.array };

export default NavList;
