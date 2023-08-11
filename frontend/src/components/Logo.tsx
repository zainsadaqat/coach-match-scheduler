import React from 'react';
import './Logo.css';
interface LogoProps {
  logoImage: string;
  appName: string;
}

const Logo: React.FC<LogoProps> = ({ logoImage, appName }) => {
  return (
    <React.Fragment>
      <div className="logo-large-screen">
        <div className="flex items-center justify-start font-semibold my-4">
          <img src={logoImage} alt={appName} width={28} height={28} />
          <span className="ml-2 text-[1rem]">{appName}</span>
        </div>
      </div>
      <div className="logo-medium-screen">
        <div className="flex items-center justify-center my-4">
          <img src={logoImage} alt={appName} width={28} height={28} />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Logo;
