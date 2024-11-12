import React from "react";
import { Button } from "./ui/button";

export default function Header() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const [flyer, setFlyer] = React.useState(false);
//   @ts-ignore
  const [flyerTwo, setFlyerTwo] = React.useState(false);

  return (
    <header className="fixed top-0 w-full clearNav z-50">
      <div className="max-w-5xl mx-auto flex flex-wrap p-5 flex-col md:flex-row">
        <div className="flex flex-row items-center justify-between p-3 md:p-1">
          <a
            href="/"
            className="flex text-3xl text-white font-medium mb-4 md:mb-0"
          >SILENT SHOUT
          </a>
          <button
            className="text-white pb-4 cursor-pointer leading-none px-3 py-1 md:hidden outline-none focus:outline-none content-end ml-auto"
            type="button"
            aria-label="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-menu"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
        <div
          className={"md:flex flex-grow items-center" + (navbarOpen ? " flex" : " hidden")  }>
          <div className="md:ml-auto md:mr-auto font-4 pt-1 md:pl-14 pl-1 flex flex-wrap items-center md:text-base text-1xl md:justify-center justify-items-start">
            <a className="mr-11 pr-2 cursor-pointer text-gray-300 hover:text-white font-semibold tr04">
              Features
            </a>
            <div className="relative">
              <button
                type="button"
                className="
                   group rounded-md text-gray-300 inline-flex items-center text-base font-medium focus:outline-none pb-8'
                  "
                onMouseEnter={() => (setFlyer(!flyer), setFlyerTwo(false))}
              >
                <span className="tr04">Templates</span>
               
              </button>
           
            </div>
            <a className="mr-12 md:ml-11 ml-0 cursor-pointer text-gray-300 hover:text-white font-semibold tr04">
              Pricing
            </a>
            <a className="mr-5 cursor-pointer text-gray-300 hover:text-white font-semibold tr04">
              Careers
            </a>
          </div>
         
         <Button className="bg-gray-500 text-white">Login/Sign-up</Button>
        </div>
      </div>
    </header>
  );
}