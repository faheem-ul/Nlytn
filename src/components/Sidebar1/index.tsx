import { Img, Heading } from "./..";
import React from "react";
import { MenuItem, SubMenu, Menu, Sidebar, sidebarClasses } from "react-pro-sidebar";

interface Props {
  className?: string;
}

export default function Sidebar1({ ...props }: Props) {
  return (
    <Sidebar
      {...props}
      width="234px !important"
      className={`${props.className} flex flex-col h-screen pt-6 top-0 px-1.5 sm:pt-5 !border-gray-800 !border-r !border-solid bg-gray-900 !sticky overflow-auto`}
    >
      <Img src="images/img_logo.png" alt="Logo" className="mx-2 h-[68px] w-full rounded-lg object-cover" />
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
            [`&:hover, &.ps-active`]: { color: "#ffffff", backgroundColor: "#048ffd !important" },
          },
        }}
        className="mt-6 flex w-full flex-col items-center self-stretch pb-2 pl-2"
      >
        <div className="mr-2 self-stretch">
          <MenuItem
            icon={<Img src="images/img_ri_dashboard_line.svg" alt="Ridashboard" className="h-[24px] w-[24px]" />}
          >
            Workspace
          </MenuItem>
        </div>
        <div className="mt-[38px] flex items-start justify-end self-stretch">
          <div className="h-[184px] w-[2px] self-center rounded-[1px] bg-white-a700_19" />
          <div className="relative ml-[-2px] h-[56px] w-[2px] rounded-[1px] bg-white-a700" />
        </div>
        <div className="mr-2 flex flex-col gap-1.5 self-stretch">
          <SubMenu
            icon={<Img src="images/img_mingcute_comment_line.svg" alt="Mingcute" className="h-[24px] w-[24px]" />}
            label="Shared THREADS"
          >
            <MenuItem>Submenu Item</MenuItem>
          </SubMenu>
          <MenuItem icon={<Img src="images/img_bx_file.svg" alt="Bxfile" className="h-[24px] w-[24px]" />}>
            DATA INGESTION
          </MenuItem>
          <MenuItem icon={<Img src="images/img_icon.svg" alt="Icon" className="h-[24px] w-[24px]" />}>
            settings
          </MenuItem>
          <MenuItem icon={<Img src="images/img_group.svg" alt="Image" className="h-[20px] w-[16px]" />}>ALERT</MenuItem>
          <MenuItem icon={<Img src="images/img_icon_indigo_50.svg" alt="Icon" className="h-[24px] w-[24px]" />}>
            Help center
          </MenuItem>
        </div>
        <Heading
          size="headingxs"
          as="p"
          className="mt-2.5 text-[10px] font-semibold uppercase tracking-[-0.10px] text-white-a700"
        >
          light mode
        </Heading>
        <div className="mt-1.5 flex w-[40%] rounded-[12px] border-[0.5px] border-solid border-white-a700 bg-gradient">
          <div className="h-[18px] w-[18px] rounded-lg bg-white-a700" />
        </div>
        <div className="mr-2 mt-[150px] self-stretch">
          <MenuItem icon={<Img src="images/img_icon_indigo_50_24x24.svg" alt="Icon" className="h-[24px] w-[24px]" />}>
            Log out
          </MenuItem>
        </div>
      </Menu>
      <div className="mx-2 mt-2.5 flex items-start justify-center gap-3 self-stretch">
        <Img
          src="images/img_sidebar_logo.png"
          alt="Sidebarlogo"
          className="h-[58px] w-[162px] self-center object-contain"
        />
        <Img src="images/img_arrow_down.svg" alt="Arrowdown" className="mt-3 h-[24px] w-[24px]" />
      </div>
    </Sidebar>
  );
}
