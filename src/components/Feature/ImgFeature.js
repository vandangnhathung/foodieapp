import React from "react";

const ImgFeature = ({ img, classN }) => {
  return (
    <>
      <img src={img} className={`${classN} ip11pro:-mr-[5.5rem]`} alt="" />
    </>
  );
};

export default ImgFeature;
