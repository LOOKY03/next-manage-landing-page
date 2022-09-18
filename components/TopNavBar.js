import React from "react";

const TopNavBar = () => {
  return (
    <div className="hidden lg:block">
      <div className="flex items-center justify-between mt-10 ">
        <img src="/images/logo.svg" alt="" />
        <div className="flex space-x-5">
          <h1>Pricing</h1>
          <h1>Product</h1>
          <h1>About Us</h1>
          <h1>Careers</h1>
          <h1>Community</h1>
        </div>
        <button className="bg-orange-500 text-white px-4 py-2 rounded-full">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default TopNavBar;
