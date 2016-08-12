import React from 'react';
import classNames from 'classnames';

const NavListItem = ({ item }) => {
  const itemLabel = item.label;
  const itemClass = classNames({
    'nav-item': true,
    // 'active': this.state.isClicked
  });

  return (
    <div className={`${itemClass} ${item.className}`}>
      <a>{itemLabel}</a>
    </div>
  );
};
NavListItem.propTypes = {
  list: React.PropTypes.array,
  item: React.PropTypes.object
};

export default NavListItem;
