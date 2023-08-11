import React from 'react';
import './MenuItem.css';
interface MenuItemProps {
  iconImage: string;
  menuItem: string;
  active?: boolean;
}

const MenuItem: React.FC<MenuItemProps> = ({ iconImage, menuItem, active }) => {
  return (
    <React.Fragment>
      <div className="menu-item-large-screen">
        <li
          className={
            active
              ? `active flex items-center my-4 py-[8px] px-[12px]`
              : `flex items-center my-4 py-[8px] px-[12px]`
          }
        >
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
