import React from 'react';
import NavListItem from './nav_list_item';
// import classNames from 'classnames';
const NavList = (props) => {
  const navItems = props.list.map((item) =>
    <NavListItem key={item.label} item={item} />
  );
      // var btnClass = classNames({
      //   'btn': true,
      //   'btn-pressed': this.state.isPressed,
      //   'btn-over': !this.state.isPressed && this.state.isHovered
      // });
      // return <button className={btnClass}>{this.props.label}</button>;
  return (
    <div className="nav-bar">
      {navItems}
    </div>
  );
};

NavList.propTypes = { list: React.PropTypes.array };

export default NavList;
