import { Img, Heading, Text } from "./..";
import React, { useState } from "react";

import { Switch } from "@headlessui/react";

import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
import { MenuItem, SubMenu, Menu, Sidebar } from "react-pro-sidebar";
import { Link } from "react-router-dom";

interface Props {
  className?: string;
  //   Allresources?: () => void
  //   Workspace?: ()=> void
  //   SharedThreads?: ()=> void
  //   Alert?: () => void
  onMenuItemClick: (
    item:
      | "Workspace"
      | "Shared THREADS"
      | "DATA INGESTION"
      | "settings"
      | "alert"
      | "helpcenter"
  ) => void;
}

export default function SidebarMob({ ...props }: Props) {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [isWorkSpaceOpen, setIsWorkSpaceOpen] = useState(false);
  const [isSharedThreadsOpen, setIsSharedThreadsOpen] = useState(false);

  // Function to handle menu item click
  const handleMenuItemClick = (itemName: string) => {
    setSelectedItem(itemName);
  };

  const toggleSubMenu = (subMenu: "Workspace" | "Shared THREADS") => {
    if (subMenu === "Workspace") {
      setIsWorkSpaceOpen(!isWorkSpaceOpen);
      setIsSharedThreadsOpen(false)
    } else if (subMenu === "Shared THREADS") {
      setIsSharedThreadsOpen(!isSharedThreadsOpen);
      setIsWorkSpaceOpen(false)
    }
  };

  return (
    <>
      <Sidebar
        {...props}
        style={{
          width: visible ? "100%" : "0",
          opacity: visible ? 1 : 0,
          overflow: "hidden",
          transition: "width 0.5s ease, opacity 0.5s ease",
        }}
        className={`${props.className} flex flex-col h-screen pt-6 mt-16  px-1.5 sm:pt-5 !border-gray-800 !border-r !border-solid overflow-auto`}
      >
        <div className="flex gap-3 items-center border border-[#FFFFFF] rounded-[8px] p-[10px] w-full max-w-[200px] mx-auto">
          <div className="relative">
            <img src="images/Avatar.png" alt="" className="w-[48px] h-[48px]" />
            <img
              src="images/Status.png"
              alt=""
              className="absolute w-[14px] h-[14px] bottom-0 right-0"
            />
          </div>
          <div>
            <h2 className="text-[14px] text-[#E8EAF6] font-semibold leading-[24px] uppercase">
              John Doe
            </h2>
            <p className="text-[14px] text-[#90A4AE] font-semibold leading-[24px] uppercase">
              D. in Medicine
            </p>
          </div>
        </div>
        <Menu
          menuItemStyles={{
            button: {
              padding: "12px",
              gap: "12px",
              backgroundColor: "#031627",
              color: "#e8eaf6",
              fontWeight: 600,
              fontSize: "14px",
              borderRadius: "8px",
              textTransform: "uppercase",
              [`&:hover, &.ps-active`]: {
                color: "#ffffff",
                backgroundColor: "#048ffd !important",
              },
            },
          }}
          className="mt-6 flex w-full flex-col items-center self-stretch pb-2 pl-2"
        >
          <div className="mr-2 ">
            <div className={`flex items-center justify-between w-full p-3 ${isWorkSpaceOpen ? "bg-[#048ffd] rounded-[8px]" : ""}`}>
              <div
                onClick={() => {
                  setSelectedItem("Workspace");
                  props.onMenuItemClick("Workspace")}
                }
                className="flex items-center cursor-pointer gap-3"
              >
                <Img src="images/workspace.svg" className="h-[24px] w-[24px]" />
                <span className="text-[14px] text-[#e8eaf6] font-semibold uppercase">
                  Workspace
                </span>
              </div>
              <FaChevronRight
                onClick={() => toggleSubMenu("Workspace")}
                className={`cursor-pointer text-white-a700 text-[9px] transition-transform ${
                  isWorkSpaceOpen ? "rotate-90 duration-500" : ""
                }`}
              />
            </div>

            {/* {
            isWorkSpaceOpen && ( */}
            <div
              className={`pl-4 overflow-y-scroll relative transition-all duration-500 ease-in-out ${
                isWorkSpaceOpen
                  ? "max-h-[190px] opacity-100"
                  : "max-h-0 opacity-0"
              }`}
              style={{
                transitionProperty: "opacity, max-height",
              }}
            >
              <div className="flex justify-end pr-3 mt-3">
                <img className="" src="images/edit.svg" alt="" />
              </div>
              <p className="text-[12px] text-[#FFFFFF] font-bold leading-[12.8px]">
                Today
              </p>
              <p className="text-[12px] text-[#ADADAD] font-normal leading-[13.8px] mt-2">
                Lorem ipsum dolor sit amet lorem ip
              </p>
              <div className="h-[1px] w-full bg-[#FFFFFF33] my-2"></div>
              <p className="text-[12px] text-[#ADADAD] font-normal leading-[13.8px] mt-2">
                Lorem ipsum dolor sit amet lorem ip
              </p>
              <div className="h-[1px] w-full bg-[#FFFFFF33] my-2"></div>
              <p className="text-[12px] text-[#FFFFFF] font-bold leading-[12.8px]">
                Yesterday
              </p>
              <p className="text-[12px] text-[#ADADAD] font-normal leading-[13.8px] mt-2">
                Lorem ipsum dolor sit amet lorem ip
              </p>
              <div className="h-[1px] w-full bg-[#FFFFFF33] my-2"></div>
              <p className="text-[12px] text-[#ADADAD] font-normal leading-[13.8px] mt-2">
                Lorem ipsum dolor sit amet lorem ip
              </p>
              <div className="h-[1px] w-full bg-[#FFFFFF33] my-2"></div>
            </div>

            {/* )
           } */}
          </div>


          <div className="mr-2 ">
            <div className={`flex items-center justify-between w-full p-3 ${isSharedThreadsOpen ? "bg-[#048ffd] rounded-[8px]" : ""}`}>
              <div
                onClick={() => {
                  setSelectedItem("Shared THREADS");
                  props.onMenuItemClick("Shared THREADS")}
                }
                className="flex items-center cursor-pointer gap-3"
              >
                <Img src="images/workspace.svg" className="h-[24px] w-[24px]" />
                <span className="text-[14px] text-[#e8eaf6] font-semibold uppercase">
                Shared THREADS
                </span>
              </div>
              <FaChevronRight
                onClick={() => toggleSubMenu("Shared THREADS")}
                className={`cursor-pointer text-white-a700 text-[9px] transition-transform ${
                  isSharedThreadsOpen ? "rotate-90 duration-500" : ""
                }`}
              />
            </div>

           
            <div
              className={`pl-4 overflow-y-scroll relative transition-all duration-500 ease-in-out ${
                isSharedThreadsOpen
                  ? "max-h-[190px] opacity-100"
                  : "max-h-0 opacity-0"
              }`}
              style={{
                transitionProperty: "opacity, max-height",
              }}
            >
            <MenuItem>Submenu Item</MenuItem>
            </div>

            {/* )
           } */}
          </div>

          <div className="mr-2 flex flex-col gap-1.5 self-stretch bg-[#031627] relative z-[10]">
            
            <MenuItem
              icon={
                <Img
                  src="images/img_bx_file.svg"
                  alt="Bxfile"
                  className="h-[24px] w-[24px]"
                />
              }
              // onClick={() => handleMenuItemClick("DATA INGESTION")}
              onClick={() => props.onMenuItemClick("DATA INGESTION")}
              style={
                selectedItem === "DATA INGESTION"
                  ? { color: "#ffffff", backgroundColor: "#048ffd" }
                  : {}
              }
            >
              DATA INGESTION
            </MenuItem>
            <MenuItem
              icon={
                <Img
                  src="images/settings.svg"
                  alt="Icon"
                  className="h-[24px] w-[24px]"
                />
              }
              onClick={() => props.onMenuItemClick("settings")}
              style={
                selectedItem === "settings"
                  ? { color: "#ffffff", backgroundColor: "#048ffd" }
                  : {}
              }
            >
              settings
            </MenuItem>

            <MenuItem
              icon={
                <Img
                  src="images/img_group.svg"
                  alt="Image"
                  className="h-[20px] w-[16px]"
                />
              }
              onClick={() => {
                props.onMenuItemClick("alert");
                //   props.Alert()
              }}
              style={
                selectedItem === "alert"
                  ? { color: "#ffffff", backgroundColor: "#048ffd" }
                  : {}
              }
            >
              <Text className="bg-[#FF0000] max-w-[12px] max-h-[12px] p-[7px] text-[9px] text-[#FFFFFF] font-bold rounded-full  absolute top-[12px] left-[22px] flex justify-center items-center">
                1
              </Text>
              ALERT
            </MenuItem>
            <MenuItem
              icon={
                <Img
                  src="images/img_icon_indigo_50.svg"
                  alt="Icon"
                  className="h-[24px] w-[24px]"
                />
              }
              onClick={() => {
                //   props.HelpCenter();
                props.onMenuItemClick("helpcenter");
              }}
              style={
                selectedItem === "helpcenter"
                  ? { color: "#ffffff", backgroundColor: "#048ffd" }
                  : {}
              }
            >
              Help center
            </MenuItem>
            {/* Repeat for other items as necessary */}
          </div>
          <div className="px-4 mt-2">
            <Heading
              size="headingxs"
              as="p"
              className="mt-2.5 text-[10px] font-semibold uppercase tracking-[-0.10px] text-white-a700 text-left"
            >
              light mode
            </Heading>
            {/* <Img
            src="images/switch.png"
            alt="Icon"
            className=" w-[40%] mx-auto mt-2"
          /> */}
            <Switch
              checked={enabled}
              onChange={setEnabled}
              className="group relative flex h-[30px] cursor-pointer rounded-full switch-btn-gradient border border-[#fff] w-[84px] mt-3 p-1 duration-200 ease-in-out focus:outline-none data-[focus]:outline-1 data-[focus]:outline-white data-[checked]:bg-white/10"
            >
              <span
                aria-hidden="true"
                className="pointer-events-none inline-block size-5 translate-x-0 rounded-full  ring-0 shadow-lg transition duration-200 ease-in-out group-data-[checked]:translate-x-14"
              >
                <img src="images/toggle.svg" alt="" />
              </span>
            </Switch>
          </div>
          {/* <div className="mt-1.5 flex w-[40%] rounded-[12px] border-[0.5px] border-solid border-white-a700 bg-gradient mx-auto">
          <div className="h-[18px] w-[18px] rounded-lg bg-white-a700" />
        </div> */}
          <div className="mr-2 mt-[120px] mob:mt-5 self-stretch ">
            <Link to="/">
              <MenuItem
                icon={
                  <Img
                    src="images/img_icon_indigo_50_24x24.svg"
                    alt="Icon"
                    className="h-[24px] w-[24px]"
                  />
                }
              >
                Log out
              </MenuItem>
            </Link>
           </div>
           <div className="h-[1px] w-full bg-[#FFFFFF33] my-2 "></div>
            <div className="flex flex-row-reverse items-center justify-center w-full mt-6">
              {/* <FaChevronLeft
                className="text-white-a700 text-[20px] cursor-pointer"
                // onClick={toggleSidebar}
              /> */}
              <Img
                src="images/logo.svg"
                alt="Hide Sidebar"
                className=" cursor-pointer w-[150px]"
              />
            </div>
         
        </Menu>
      </Sidebar>
      {/* {!visible && (
      <div className="bg-[#fff] fixed cursor-pointer z-[10] bottom-0 top-[700px] w-[40px] h-[50px] py-10 rounded-r-[100px] flex items-center ">
      <FaChevronRight className="text-[#000] text-[30px]" onClick={toggleSidebar} />
       
        </div>
      )} */}
    </>
  );
}
