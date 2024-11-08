"use client";
import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { gsap } from "gsap";

import Drawer from "../ui/Drawer";
import SidebarMob from "./Sidebar";

const ResponsiveSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onClose = () => setIsOpen(false);
  const onOpen = () => setIsOpen(true);

  useEffect(() => {
    if (isOpen) {
      // Select all list items
      const listItems = document.querySelectorAll(".list-items");

      // Set initial opacity to 0 and translateX to 20px
      gsap.set(listItems, { opacity: 0, x: 20 });

      // Iterate through list items and animate them
      gsap.to(listItems, {
        delay: 0.5,
        opacity: 1,
        x: 0,
        duration: 0.7, // Animation duration
        stagger: 0.2, // Stagger the animation by 0.2 seconds
        ease: "power2.out", // Easing function
      });
    }
  }, [isOpen]);

  return (
    <>
      <nav className="relative z-50 w-full hidden xl:block">
        <div className="flex justify-center items-center w-full ">
          <div className="relative max-w-[1340px] w-full flex flex-wrap items-center justify-between mx-auto pt-[20px]">
            <div className="flex justify-between w-full  gap-[35px] pb-4">
              <Link
                to="/"
                className="mob:flex hidden mob:justify-start mob:w-[121px] space-x-3 rtl:space-x-reverse"
              >
                <img
                  src="/images/logo.svg"
                  alt="Flowbite Logo"
                  
                />
              </Link>

              {/* tab and mob  menu*/}
              <div className="">
                <div
                  className="relative cursor-pointer flex pr-2 pt-[5px]"
                  onClick={onOpen}
                >
                  <button
                    // onClick={toggleMenu}
                    type="button"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm border border-[#fff]/90 bg-[#fff] text-[#00297A] rounded-lg  "
                    aria-controls="navbar-default"
                    aria-expanded={isOpen ? "true" : "false"}
                  >
                    <span className="sr-only">Open main menu</span>
                    <svg
                      className="w-5 h-5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 17 14"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 1h15M1 7h15M1 13h15"
                      />
                    </svg>
                  </button>
                </div>
                <div className="relative z-40">
                  <Drawer isOpen={isOpen} onClose={onClose}>
                    <div className="flex items-center h-full w-full ">
                    <SidebarMob/>
                    </div>
                  </Drawer>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default ResponsiveSidebar;
