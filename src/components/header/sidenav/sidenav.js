import React from "react";
import SideNav from "react-simple-sidenav";

const SideNavigation = ({ showNav, onHideNav }) => {
  return (
    <div>
      <SideNav
          showNav={showNav}
          onHideNav={onHideNav}
          navStyle={{
             background: '#242424',
              maxWidth: '220px'
          }}
      >
          options
      </SideNav>
    </div>
  );
};

export default SideNavigation;
