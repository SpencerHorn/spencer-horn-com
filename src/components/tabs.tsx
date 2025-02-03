import React, { FC } from 'react';

interface TabsProps {
  children: React.ReactNode;
  buttons: React.ReactNode;
  ButtonContainer?: string; 
}

const Tabs: FC<TabsProps> = ({ children, buttons, ButtonContainer = 'menu' }) => {
  return (
    <>
      <div className={ButtonContainer}> 
        {buttons}
      </div>
      {children}
    </>
  );
};

export default Tabs;