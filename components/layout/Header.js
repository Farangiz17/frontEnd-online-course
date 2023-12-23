import Link from "next/link";
import React from "react";
import { useState, useEffect } from "react";

import SwitchButton from "../elements/SwitchButton";

const Header = ({ handleOpen, handleRemove, openClass }) => {
  const [scroll, setScroll] = useState(0);
  const [isToggled, setToggled] = useState(false);
  const toggleTrueFalse = () => setToggled(!isToggled);
  useEffect(() => {
    document.addEventListener("scroll", () => {
      const scrollCheck = window.scrollY > 100;
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck);
      }
    });
  });
  return (
    <>
      <header
        className={
          scroll
            ? "header sticky-bar bg-gray-900 stick"
            : "header sticky-bar bg-gray-900"
        }
      >
        <div className="container">
          <div className="main-header">
            <div className="header-logo">
              <Link className="d-flex" href="/">
                <img
                  className="logo-night"
                  alt="GenZ"
                  src="assets/imgs/Soff Study white logo.png"
                />
                {/* <img className="d-none logo-day" alt="GenZ" src="assets/imgs/template/logo-day.svg" /> */}
              </Link>
            </div>

            <div className="header-right text-end">
              <Link
                className="btn btn-linear d-none d-sm-inline-block hover-up hover-shadow"
                href="#tarif"
              >
                Joy band qiling
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
