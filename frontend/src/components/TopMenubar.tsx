import React from 'react';
import Heading1 from './Heading1';
import CreateButton from './CreateButton';
import DropDownIcon from '../assets/DropDownIcon.png';
import ProfileImage from '../assets/ProfileImage.jpg';
import { Link } from 'react-router-dom';

const TopMenubar = () => {
  return (
    <div className="flex justify-between items-center border-b-2 p-4">
      <div className="">
        <Heading1 text="Hello, Zain Sadaqat!" />
      </div>
      <div className="flex items-center">
        <div className="mr-[24px]">
          <Link to="create-event">
            <CreateButton text="Create event" />
          </Link>
        </div>
        <div className="flex items-center border-2 border-[#e7e9eb] rounded-[6px]">
          <div className="">
            <img
              className="p-[2px] rounded-[6px]"
              src={ProfileImage}
              alt="Profile"
              width={32}
              height={32}
            />
          </div>
          <div className="flex items-center p-[8px]">
            <span className="font-semiboldbold text-[14px]">Zain Sadaqat</span>
            <img
              className="ml-2 rounded-md"
              src={DropDownIcon}
              alt={'Drop Down'}
              width={12}
              height={12}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopMenubar;
