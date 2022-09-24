import React from "react";
import { Feature } from "./Feature/index";
import HeroImg from "./HeroImg";

const Content = () => {
  return (
    <div>
      <HeroImg></HeroImg>

      <div className="pc:px-[278px] text-center pc:mb-[137px]">
        <div className="pc:border pc:border-3 pc:border-[#E4E4E4] pc:mb-[72px]"></div>
        <p className="ip11pro:text-tl pc:text-ht ip11pro:mb-[49px]">
          How the app works
        </p>
        <div className="pc:hidden ip11pro:block ip11pro:border mb-[65px] ip11pro:border-3 ip11pro:border-[#E4E4E4]"></div>
      </div>
      <div className="flex flex-col items-center  overflow-hidden">
        {/* <Feature img="assets/images/Rectangle.png"></Feature>
        <Feature></Feature>
        <Feature img="assets/images/Rectangle2.png"></Feature> */}
        <Feature classN=" ip11pro:flex-col-reverse">
          <Feature.ImgFeature img="assets/images/Rectangle.png"></Feature.ImgFeature>
          <Feature.ContentFeature
            h3="Create an account"
            h2="Create/login to an existing
account to get started"
            h4="An account is created with your email
and a desired password"
          ></Feature.ContentFeature>
        </Feature>
        <Feature classN="ip11pro:flex-col ">
          <Feature.ContentFeature
            classN="pc:ml-[209px] ip11pro:ml-0"
            h3="Explore varieties"
            h2="Shop for your favorites
meal as e dey hot."
            h4="Shop for your favorite meals or drinks
and enjoy while doing it."
          ></Feature.ContentFeature>
          <Feature.ImgFeature
            img="assets/images/Rectangle3.png"
            classN="ml-3 "
          ></Feature.ImgFeature>
        </Feature>
        <Feature classN=" ip11pro:flex-col-reverse ">
          <Feature.ImgFeature img="assets/images/Rectangle2.png"></Feature.ImgFeature>
          <Feature.ContentFeature
            h3="Checkout"
            h2="When you done check out
and get it delivered."
            h4="When you done check out and get it 
delivered with ease."
          ></Feature.ContentFeature>
        </Feature>
      </div>
    </div>
  );
};

export default Content;
