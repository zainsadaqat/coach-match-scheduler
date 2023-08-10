import React from 'react';
import './MenuItem.css';
interface MenuItemProps {
  iconImage: string;
  menuItem: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ iconImage, menuItem }) => {
  return (
    <React.Fragment>
      <div className="menu-item-large-screen">
        <li className="flex items-center my-4">
          <img src={iconImage} alt={menuItem} width={18} height={18} />
          <span className="ml-[12px] font-semibold font-[14px] hover:underline">
            {menuItem}
          </span>
        </li>
      </div>
      <div className="menu-item-medium-screen">
        <li className="flex items-center justify-center my-8">
          <img src={iconImage} alt={menuItem} width={20} height={20} />
        </li>
      </div>
    </React.Fragment>
  );
};

export default MenuItem;
