import React from "react";

const Footer = () => {
  return (
    <footer className="h-[50vh] px-10 py-5 w-full bg-blue-800 flex flex-col aling items-start">
      <img
        className="h-[5vh] object-contain"
        src="https://www.redbull.com/v3/resources/images/client/header/redbullcom-logo_double-with-text.svg"
        alt=""
      />
      <div className="h-[42vh] mt-8 w-full">
        <hr className="w-full bg-[#ffff " />
        <div className="media h-full w-full p-5 flex gap-32">
          <div className="w-44 ">
            <h1 className="text-xl font-extrabold text-[#D2003C] tracking-wider mb-5">
              Social
            </h1>
            <ul className="text-[#C4C2C0] tracking-wide text-2xl font-semibold">
              <li>Dribble</li>
              <li>Instagram</li>
              <li>Facebook</li>
              <li>Twitter</li>
            </ul>
          </div>
          <div className="w-48 ">
            <h1 className="text-xl font-extrabold text-[#D2003C] tracking-wider mb-5">
              Products
            </h1>
            <ul className="text-[#C4C2C0] tracking-wide text-2xl font-semibold">
              <li>Energy drink</li>
              <li>Sugarfree drink</li>
              <li>Red edition </li>
              <li>Yellow edition</li>
            </ul>
          </div>
          <div className="w-60">
            <h1 className="text-xl font-extrabold text-[#D2003C] tracking-wider mb-5">
              Location
            </h1>
            <p className="text-[#C4C2C0] tracking-wide text-2xl font-semibold">
              1st Floor, C-Wing, 215 Atrium, Andheri E, Mumbai-93, India.
            </p>
          </div>
          <div className="w-56">
            <h1 className="text-xl font-extrabold text-[#D2003C] tracking-wider mb-5">
              Contact us
            </h1>
            <ul className="text-[#C4C2C0] tracking-wide text-2xl font-semibold">
              <li>+91-22-66180888</li>
              <li> customercare.india@redbull.com</li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="w-full  bg-[#ffff]"/>
          <div className="mt-4 flex w-full h-[3vh] gap-5 justify-end items-center">
          <h1 className="text-xl opacity-75 text-[#C4C2C0]">© 2024 Red Bull</h1>
          <h1 className="text-xl opacity-75 text-[#C4C2C0]">Privacy Policy</h1>
          </div>
    </footer>
  );
};

export default Footer;
