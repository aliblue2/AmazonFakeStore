import React, { useState } from "react";
import Logo from "../images/logo.png";
import LogoSm from "../images/logosm.png";
import { Link } from "react-router-dom";
import {
  RiCloseLine,
  RiGalleryFill,
  RiHome3Line,
  RiListIndefinite,
  RiMenu3Line,
  RiSearch2Line,
  RiShoppingBasket2Line,
  RiStore2Line,
  RiTentLine,
  RiUser2Line,
} from "@remixicon/react";
const Header = () => {
  const [userLogedin, setUserLogedin] = useState(false);
  const [drawerMenu, setDrawerMenu] = useState(false);
  const [dropDownMenu, setDropDownMenu] = useState(false);

  const onShowingDrawerMenu = () => {
    setDrawerMenu(!drawerMenu);
  };
  const showingDropDownHandler = () => {
    setDropDownMenu(!dropDownMenu);
  };
  return (
    // Start Header
    <div className="w-full max-h-[60px] z-20 min-h-[60px] bg-headerColor shadow-md sticky top-0 flex items-center justify-between px-5">
      <div className="flex items-center gap-8 justify-start">
        <img src={Logo} alt="logo" className="max-w-[110px] " />
        <li
          className={dropDownMenu ? "py-1 px-2 text-lg font-medium items-center gap-1 bg-headingColor rounded-md lg:flex hidden" : "py-1 px-2 text-lg font-medium items-center gap-1 hover:bg-headingColor transition-colors duration-300 rounded-md lg:flex hidden"}
          on
        >
          <RiListIndefinite size={20} />
          <Link
            onClick={showingDropDownHandler}
          >
            Category
          </Link>
        </li>
        <div className="md:flex hidden items-center justify-start gap-3 bg-headingColor p-1 rounded-md">
          <RiSearch2Line size={24} />
          <input
            className="bg-headingColor outline-none w-[400px] h-[30px]"
            placeholder="Search Products"
          />
        </div>
      </div>
      <div className="flex items-center justify-center gap-5">
        <RiShoppingBasket2Line size={24} />
        {userLogedin ? (
          <RiUser2Line className="lg:block hidden" size={24} />
        ) : (
          <Link
            to={"/login"}
            className=" text-lg font-medium lg:block hidden hover:border-b-2 p-1 border-divderColorDark"
          >
            login / signup
          </Link>
        )}
        <RiUser2Line size={24} className="lg:hidden block" />
        <RiMenu3Line
          size={24}
          onClick={onShowingDrawerMenu}
          className="lg:hidden block"
        />
      </div>

      {/* { menu Drawer} */}
      {drawerMenu ? (
        <div className="fixed w-[100%] left-0 bg-sectionColor bg-opacity-55 top-0 h-[100%] lg:hidden block">
          <div
            className="fixed w-[70%] h-[100%] bg-headerColor rounded-tl-2xl rounded-bl-2xl right-0 flex flex-col items-start justify-start gap-5 p-5"
            data-aos="fade-left"
          >
            <RiCloseLine size={32} onClick={onShowingDrawerMenu} />
            <img src={Logo} alt="logo" className="max-w-[100px]" />
            <div className="bg-headingColor px-2 rounded-md w-full py-2 flex items-center justify-start gap-3">
              <input
                className="bg-headingColor outline-none w-[400px] h-[30px]"
                placeholder="Search Products"
              />
            </div>
            <ul className="flex flex-col w-full items-center gap-5">
              <li className="px-4 py-1 text-lg font-medium flex items-center gap-4 hover:bg-headingColor transition-colors duration-300 w-full border-b-2 border-headingColor cursor-pointer">
                <RiStore2Line size={20} />
                <Link>Shop</Link>
              </li>
              <li className="px-4 py-1 text-lg font-medium flex items-center gap-4 hover:bg-headingColor transition-colors duration-300 w-full border-b-2 border-headingColor cursor-pointer">
                <RiListIndefinite size={20} />
                <Link>Category</Link>
              </li>
              <li className="px-4 py-1 text-lg font-medium flex items-center gap-4 hover:bg-headingColor transition-colors duration-300 w-full border-b-2 border-headingColor cursor-pointer">
                <RiTentLine size={20} />
                <Link>AboutUs</Link>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        ""
      )}
      {/* { dropdown } */}
      {
        dropDownMenu ? <div className="fixed top-16 w-[500px] lg:flex left-32 bg-headerColor rounded-xl shadow-lg p-5 items-center justify-between hidden" data-aos="fade-up" data-aos-duration="700">
        <ul className="flex-col flex items-start justify-around gap-4">
          <h5 className="text-primaryColor  font-medium">Mens</h5>
          <li>Casual</li>
          <li>Business</li>
          <li>Formal</li>
          <li>Jacket</li>
        </ul>
        <ul className="flex-col flex items-start justify-around gap-4">
          <h5 className="text-primaryColor  font-medium">Womens</h5>
          <li>Midi Dress</li>
          <li>Denim Dress</li>
          <li>Sweater Dress</li>
          <li>Maxi Dress</li>
        </ul>
        <ul className="flex-col flex items-start justify-around gap-4">
          <h5 className="text-primaryColor  font-medium">Jewelery</h5>
          <li>Earring</li>
          <li>Gold</li>
          <li>Rings</li>
          <li>Necklace</li>
        </ul>
        <ul className="flex-col flex items-start justify-around gap-4">
          <h5 className="text-primaryColor  font-medium">Electronics</h5>
          <li>Laptops</li>
          <li>Mouse</li>
          <li>Keyboard</li>
          <li>Monitor</li>
        </ul>
      </div> : ""
      }
    </div>
  );
};

export default Header;
