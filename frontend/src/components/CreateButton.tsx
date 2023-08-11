import React from 'react';
import PlusIcon from '../assets/PlusIcon.png';

type CreateButtonProps = {
  text: String;
};

const CreateButton = ({ text }: CreateButtonProps) => {
  return (
    <>
      <div className="flex items-center py-[10px] px-[16px] border-2 border-[#062FFD] rounded-[6px]">
        <div className="">
          <img src={PlusIcon} alt="Add Icon" width={12} height={12} />
        </div>
        <span className="ml-[12px] font-semiboldbold text-[14px] text-[#062FFD] hover:underline">
          {text}
        </span>
      </div>
    </>
  );
};

export default CreateButton;
