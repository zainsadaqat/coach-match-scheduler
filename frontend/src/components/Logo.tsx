import React from 'react';

interface LogoProps {
  logoImage: string;
  appName: string;
}

const Logo: React.FC<LogoProps> = ({ logoImage, appName }) => {
  return (
    <div className="flex items-center justify-around font-semibold my-4">
      <img src={logoImage} alt={appName} width={28} height={28} />
      <span>{appName}</span>
    </div>
  );
};

export default Logo;
