import FooterItems from "./FooterItems";
import logo from "./../assets/images/logo.png";
import { FaLinkedin, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

function Footer() {
  const menuFooter = [
    {
      id: 1,
      name: "Product",
    },
    {
      id: 2,
      name: "Features",
    },
    {
      id: 3,
      name: "Resources",
    },
  ];

  const menuFooter2 = [
    {
      id: 1,
      name: "About",
    },

    {
      id: 2,
      name: "Blog",
    },

    {
      id: 3,
      name: "Support",
    },
  ];
  return (
    <>
      <div className="flex justify-center gap-9 w-full py-9">
        {menuFooter.map((item) => (
          <FooterItems key={item.id} name={item.name} />
        ))}
        <img src={logo} alt="" className="w-[70px]" />
        {menuFooter2.map((item) => (
          <FooterItems key={item.id} name={item.name} />
        ))}
      </div>
      <div className="flex justify-center mt-[-10px]">
        <div className=" w-[50%] border-b-[1px] border-solid border-black"></div>
      </div>

      <div className="text-teal-600 flex gap-5 justify-center px-10 py-5">
        <div className="border-solid border-[1px] border-teal-600 rounded-full flex items-center justify-center p-1 hover:bg-teal-600 hover:text-white cursor-pointer">
          <FaLinkedin />
        </div>
        <div className="border-solid border-[1px] border-teal-600 rounded-full flex items-center justify-center p-1 hover:bg-teal-600 hover:text-white cursor-pointer">
          <FaInstagram />
        </div>
        <div className="border-solid border-[1px] border-teal-600 rounded-full flex items-center justify-center p-1 hover:bg-teal-600 hover:text-white cursor-pointer">
          <FaFacebook />
        </div>
        <div className="border-solid border-[1px] border-teal-600 rounded-full flex items-center justify-center p-1 hover:bg-teal-600 hover:text-white cursor-pointer">
          <FaYoutube />
        </div>
      </div>

        <p className="text-black text-[13px] font-mulish text-center pb-2">© 2023, All Rights Reserved.   Privacy — Terms</p>
    </>
  );
}
export default Footer;
