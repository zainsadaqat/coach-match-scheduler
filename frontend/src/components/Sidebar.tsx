import React from 'react';
import MenuItem from './MenuItem';
import HomeIcon from '../assets/HomeIcon.png';
import MyTeamIcon from '../assets/MyTeamIcon.png';
import EventsIcon from '../assets/EventsIcon.png';
import HelpIcon from '../assets/HelpIcon.png';
import AppLogo from '../assets/AppLogo.png';
import SidebarMenu from './SidebarMenu';
import Logo from './Logo';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const { pathname: currentPath } = useLocation();
  return (
    <nav className="p-2 border-x-2">
      {/* Logo */}
      <Link to="/">
        <Logo logoImage={AppLogo} appName="Coach Match Scheduler" />
      </Link>

      {/* Menu items */}
      <div className="">
        <SidebarMenu>
          <div>
            <Link to="/">
              {currentPath === '/' ? (
                <MenuItem iconImage={HomeIcon} menuItem="Home" active />
              ) : (
                <MenuItem iconImage={HomeIcon} menuItem="Home" />
              )}
            </Link>
            <Link to="my-team">
              {currentPath === '/my-team' ? (
                <MenuItem iconImage={MyTeamIcon} menuItem="My Team" active />
              ) : (
                <MenuItem iconImage={MyTeamIcon} menuItem="My Team" />
              )}
            </Link>
            <Link to="events">
              {currentPath === '/events' ? (
                <MenuItem iconImage={EventsIcon} menuItem="Events" active />
              ) : (
                <MenuItem iconImage={EventsIcon} menuItem="Events" />
              )}
            </Link>
          </div>
          <div>
            <Link to="help">
              {currentPath === '/help' ? (
                <MenuItem iconImage={HelpIcon} menuItem="Help" active />
              ) : (
                <MenuItem iconImage={HelpIcon} menuItem="Help" />
              )}
            </Link>
          </div>
        </SidebarMenu>
      </div>
    </nav>
  );
};

export default Sidebar;
