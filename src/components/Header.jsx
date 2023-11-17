/* eslint-disable react/jsx-key */

import logo from "./../assets/Images/logo.png";
import HeaderItem from "./HeaderItems";
function Header() {
  const menu = [
    {
        id: 1,
        name: "Home",
    },
    {
        id: 2,
        name: "Features",
    },
    {
        id: 3,
        name: "Pricing",
    },
    {
        id: 4,
        name: "Healthy Tips",
    },
  ];
  return (
    <div className="flex items-center justify-between">
      <div className="flex gap-8 items-center">
        <img src={logo} className="w-[60px] md:w-[70px] object-cover ml-8" />
        <div className="hidden md:flex gap-8 ml-[300px]">
          {menu.map((item) => (
            <HeaderItem key={item.id} name={item.name} />
          ))}
        </div>
      </div>
      <h2 className="border border-teal-600 rounded-[3px] text-teal-600 text-[15px] cursor-pointer font-normal py-1 px-2">
        GET STARTED
      </h2>
    </div>
  );
}

export default Header;
