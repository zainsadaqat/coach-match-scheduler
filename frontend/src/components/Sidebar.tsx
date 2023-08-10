import React from 'react';
import MenuItem from './MenuItem';
import HomeIcon from '../assets/HomeIcon.png';
import MyTeamIcon from '../assets/MyTeamIcon.png';
import EventsIcon from '../assets/EventsIcon.png';
import HelpIcon from '../assets/HelpIcon.png';
import AppLogo from '../assets/AppLogo.png';
import SidebarMenu from './SidebarMenu';
import Logo from './Logo';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <nav className="p-2 bg-slate-400">
      {/* Logo */}
      <Link to="/">
        <Logo logoImage={AppLogo} appName="Coach Match Scheduler" />
      </Link>

      {/* Menu items */}
      <div className="">
        <SidebarMenu>
          <div>
            <Link to="/">
              <MenuItem iconImage={HomeIcon} menuItem="Home" />
            </Link>
            <Link to="my-team">
              <MenuItem iconImage={MyTeamIcon} menuItem="My Team" />
            </Link>
            <Link to="events">
              <MenuItem iconImage={EventsIcon} menuItem="Events" />
            </Link>
          </div>
          <div>
            <Link to="help">
              <MenuItem iconImage={HelpIcon} menuItem="Help" />
            </Link>
          </div>
        </SidebarMenu>
      </div>
    </nav>
  );
};

export default Sidebar;
