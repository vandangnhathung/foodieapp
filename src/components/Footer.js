import React from "react";
import Button from "./Button";

const Footer = () => {
  return (
    <div>
      <div className="relative flex flex-col items-center text-white mb-[37px]">
        <img
          src="/assets/images/image2.png"
          className="ip11pro:hidden pc:block"
          alt="food"
        />
        <div className="ip11pro:w-full pc:hidden ip11pro:block ip11pro:h-[564px] ip11pro:bg-blackEase"></div>

        <div className="absolute top-0 text-center flex flex-col items-center ">
          <div className=" ip11pro:mt-[120px] pc:mt-[73px]  ip11pro:flex ip11pro:flex-col ip11pro:items-center text-center mb-[54px] max-w-[937px]">
            <h1 className=" font-bold ip11pro:max-w-[310px]  pc:max-w-[503px] text-hc mb-[27px]">
              Download the app now.
            </h1>
            <span className="pc:block ip11pro:hidden text-tx self-center  font-medium">
              Available on your favorite store. Start your premium experience
              now
            </span>
            <span className="pc:hidden ip11pro:block max-w-[245px] text-tx  font-medium">
              Most calendars are designed for teams.
            </span>
          </div>
          <div className="flex gap-[34px]">
            <Button classN="bg-primary py-[18px] px-[31px] rounded-[10px]">
              Playstore
            </Button>
            <Button classN="pc:block ip11pro:hidden bg-transparent border-1 border-white border py-[18px] px-[31px] rounded-[10px]">
              App store
            </Button>
            <Button classN="pc:hidden ip11pro:block bg-transparent border-1 border-white border py-[18px] px-[31px] rounded-[10px]">
              Try for free
            </Button>
          </div>
        </div>
      </div>

      <div className="pc:px-[155px] ip11pro:pb-[45px]  ip11pro:text-center  pc:flex pc:justify-between pc:items-center">
        <img
          src="assets/images/logo2.png"
          className="pc:block ip11pro:hidden cursor-pointer"
          alt=""
        />
        <div className="flex justify-center pc:mb-0 ip11pro:mb-[12.5px] gap-[28.48px]">
          <img
            src="/assets/icons/twitter.svg"
            className="h-[30px] w-[30px] cursor-pointer"
            alt=""
          />
          <img
            src="/assets/icons/facebook.svg"
            className="h-[30px] w-[30px] cursor-pointer"
            alt=""
          />
          <img
            src="/assets/icons/instagram.svg"
            className="h-[30px] w-[30px] cursor-pointer"
            alt=""
          />
        </div>
        <p className="pc:block ip11pro:hidden font-bold font-roboto text-[12px] leading-[18px]">
          Copywright 2020 Bella Onojie.com
        </p>
        <p className="pc:hidden ip11pro:block font-bold font-roboto text-[12px] leading-[18px]">
          Just type what's on your mind and we'll
        </p>
      </div>
    </div>
  );
};

export default Footer;
