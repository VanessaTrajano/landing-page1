import React from 'react';
import { slide as Menu } from 'react-burger-menu';

export default props => {
  return (
    <Menu>
      <a className="menu-item" href="/">
        Home
      </a>
      <a className="menu-item" href="/benefits">
        Benefits
      </a>
      <a className="menu-item" href="/pricing">
        Pricing
      </a>
    </Menu>
  );
};