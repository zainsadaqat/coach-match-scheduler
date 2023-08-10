import React, { ReactNode } from 'react';

interface SidebarMenuProps {
  children: ReactNode;
}

const SidebarMenu: React.FC<SidebarMenuProps> = ({ children }) => {
  return (
    <ul className="flex flex-col justify-between min-h-[90vh] mt-4">
      {children}
    </ul>
  );
};

export default SidebarMenu;
