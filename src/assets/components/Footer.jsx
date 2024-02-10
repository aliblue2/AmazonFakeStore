import React from "react";
import Logo from "../images/logodm.png";
import { RiAmazonFill } from "@remixicon/react";
const Footer = () => {
  return (
    <div className="bg-primaryColor h-full mt-12 ">
      <div className="w-full p-5 gap-8 grid grid-cols-2 md:grid-cols-4">
        <div className="flex flex-col items-start justify-start gap-5">
          <img src={Logo} alt="Logo Amazon" className="max-w-[120px]" />
          <h3 className="text-2xl font-bold text-headingColor">
            Let's talk! 🤙
          </h3>
          <a href="#" className="text-headingColor text-lg font-medium">
            +12 345 678 9101
          </a>
          <a href="#" className="text-headingColor text-lg font-medium">
            hello.cryptex@gmail.com
          </a>
          <a href="#" className="text-headingColor text-lg font-medium">
            Cecilia Chapman 711-2880 Nulla St. Mankato Mississippi 96522
          </a>
        </div>
        <div className="flex flex-col items-start justify-start gap-5">
            <h5 className="text-headingColor font-medium text-xl">
            Products
            </h5>
            <ul className="flex flex-col items-start justify-start gap-8">
                <li className="text-headingColor text-lg ">
                Spot
                </li>
                <li className="text-headingColor text-lg ">
                Inverse Perpetual
                </li>
                <li className="text-headingColor text-lg ">
                USDT Perpetual
                </li>
                <li className="text-headingColor text-lg ">
                Exchange
                </li>
            </ul>
        </div>
        <div className="flex flex-col items-start justify-start gap-5">
            <h5 className="text-headingColor font-medium text-xl">
            Services
            </h5>
            <ul className="flex flex-col items-start justify-start gap-8">
                <li className="text-headingColor text-lg ">
                Markets
                </li>
                <li className="text-headingColor text-lg ">
                Buy Crypto
                </li>
                <li className="text-headingColor text-lg ">
                Tranding Fee
                </li>
                <li className="text-headingColor text-lg ">
                API
                </li>
            </ul>
        </div>
        <div className="flex flex-col items-start justify-start gap-5">
            <h5 className="text-headingColor font-medium text-xl">
            About Us
            </h5>
            <ul className="flex flex-col items-start justify-start gap-8">
                <li className="text-headingColor text-lg ">
                About Amazon
                </li>
                <li className="text-headingColor text-lg ">
                Blog
                </li>
                <li className="text-headingColor text-lg ">
                Business Contacts
                </li>
                <li className="text-headingColor text-lg ">
                Careers
                </li>
            </ul>
        </div>
      </div>
      <div className="w-full flex gap-2 items-center justify-between p-5 bg-accentColor text-headingColor">
        <span className="md:text-lg text-sm font-sans">
        © 2022 AmazonIran All Rights Reserved by AlirezaAbdolmaleki & Erfan Mousaloo
        </span>
        <RiAmazonFill size={32} />
      </div>
    </div>
  );
};

export default Footer;
