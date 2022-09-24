import React from "react";

const ContentFeature = ({ classN, h3, h2, h4 }) => {
  return (
    <div
      className={`${classN} pc:block ip11pro:flex ip11pro:flex-col ip11pro:items-center`}
    >
      <h3 className="text-primary font-bold text-tl mb-[17px]">{h3}</h3>
      <h2 className="pc:max-w-[561px] ip11pro:max-w-[327px] font-bold text-hc mb-[27px]">
        {h2}
      </h2>
      <h4 className="text-tx text-greyLight font-medium ip11pro:max-w-[257px] pc:max-w-[467px]">
        {h4}
      </h4>
    </div>
  );
};

export default ContentFeature;
