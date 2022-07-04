import XIcon from "@heroicons/react/outline/XIcon";
import { useState } from "react";
import LogoImg from "./main-logo.svg";
import MsLogoImg from "./medi-swiss-logo.svg";
import MenuImg from "../../../assets/heros/menu.svg";

const Navlink = ({ links }) =>
  links.map((link) => (
    <p key={link.url}>
      <a
        className="font-medium transition-all duration-300 hover:text-slate-blue"
        href={link.url}
      >
        <li>{link.name}</li>
      </a>
    </p>
  ));

const linkArray = [
  {
    name: "Case Study One",
    url: "#",
  },
  {
    name: "Case Study Two",
    url: "#",
  },
  {
    name: "Case Study Three",
    url: "#",
  },
];

const Nav = ({ setShowMobileMenu, children }) => (
  <nav>
    <div className="m-auto max-w-default">
      <div className="flex items-center justify-between md:h-[130px]">
        <div className="flex items-center">
          <a href="/">
            <img
              className="h-[42px] w-[200px] md:h-auto md:w-auto"
              src={LogoImg}
              alt="Logo"
            />
          </a>
          <div className="hidden md:block">
            {/* <ul className="ml-12 hidden space-x-12 font-medium text-slate-headline md:flex">
              <Navlink links={linkArray} />
            </ul> */}
            {children}
          </div>
        </div>
        <div className="block md:hidden">
          <img
            onClick={() => setShowMobileMenu(true)}
            className="h-6 w-6 md:h-8 md:w-8"
            src={MenuImg}
            alt="Menu"
          />{" "}
        </div>
        <div className="hidden md:block">
          <div className="space-x-3">
            <a href="http://www.mediswiss.us" target="_blank">
              <img src={MsLogoImg} alt="Back to MediSwiss" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
);

const MobileMenu = ({ setShowMobileMenu }) => (
  <section className="md:hidden">
    <div className="absolute top-0 min-h-[295px] w-full p-2">
      <div className="w-full rounded-2xl bg-white p-6">
        <div className="flex items-center justify-between">
          <a href="#">
            <img
              className="h-[42px] w-[200px] md:h-auto"
              src={LogoImg}
              alt="Logo"
            />
          </a>
          <div className="">
            {/*
            <ul className="ml-12 space-x-12 font-medium text-slate-headline md:flex">
              <XIcon
                onClick={() => setShowMobileMenu(false)}
                className="h-6 w-6 text-slate-headline"
              />
            </ul>
            */}
          </div>
        </div>
        <div>
          {/*
          <ul className="mt-6 space-y-4">
            <Navlink links={linkArray} />
          </ul>
          */}
        </div>
      </div>
    </div>
  </section>
);

const HeroLanding = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  return (
    <section className="overflow-hidden bg-slate-light pt-6 font-dm-sans md:px-0 md:pt-0">
      <div className="px-6">
        <Nav setShowMobileMenu={setShowMobileMenu} />
      </div>
      {showMobileMenu && <MobileMenu setShowMobileMenu={setShowMobileMenu} />}
      <section className="px-6">
      </section>
    </section>
  );
};

export default HeroLanding;
