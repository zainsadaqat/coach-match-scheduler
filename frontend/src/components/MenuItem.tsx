import React from 'react';

interface MenuItemProps {
  iconImage: string;
  menuItem: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ iconImage, menuItem }) => {
  return (
    <li className="flex items-center my-2">
      <img src={iconImage} alt={menuItem} width={18} height={18} />
      <span className="ml-[12px] font-semibold font-[14px] hover:underline">
        {menuItem}
      </span>
    </li>
  );
};

export default MenuItem;
