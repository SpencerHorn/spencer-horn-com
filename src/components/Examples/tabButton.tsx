import React, { FC, HTMLAttributes } from 'react';
import './exampleTabs.css';

interface TabButtonProps extends HTMLAttributes<HTMLButtonElement> {
  isSelected: boolean;
  children: React.ReactNode;
}

const TabButton: FC<TabButtonProps> = ({ isSelected, children, ...props }) => {
  return (
    <li>
      <button className={isSelected ? 'active' : undefined} {...props}>
        {children}
      </button>
    </li>
  );
};

export default TabButton;