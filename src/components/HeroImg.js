import React from "react";
import Button from "./Button";

const HeroImg = () => {
  return (
    <>
      <div className="relative flex flex-col items-center text-white ip11pro:mb-[400px] pc:mb-[600px]">
        <img
          src="/assets/images/heroimage.png"
          className="ip11pro:hidden pc:block"
          alt="food"
        />
        <div className="absolute top-0 text-center flex flex-col items-center ">
          <div className="mt-[73px]  text-center mb-[54px] max-w-[937px]">
            <p className="pc:text-tl mb-[17px] font-bold pc:text-white ip11pro:text-greyLight ip11pro:text-rtl">
              Food app
            </p>
            <h1 className="font-poppins font-bold text-hd mb-[27px] pc:text-white ip11pro:text-blackEase ip11pro:text-rhd">
              Why stay hungry when you can order form Bella Onojie
            </h1>
            <span className="block pc:text-tx  font-medium pc:text-white ip11pro:text-greyLight">
              Download the bella onoje’s food app now on
            </span>
          </div>
          <div className="pc:flex-row flex gap-[34px] ip11pro:flex-col">
            <Button classN="py-4 px-[58px] rounded-[30px] bg-primary">
              Playstore
            </Button>
            <Button classN="bg-transparent pc:text-white border-1 pc:border-white ip11pro:border-primary ip11pro:text-primary border  py-4 px-[58px] rounded-[30px]">
              App store
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroImg;
