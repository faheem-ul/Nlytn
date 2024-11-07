import { Heading } from "components/Heading";
import { Img } from "components/Img";
import { Text } from "components/Text";
import React, { useState } from "react";

const HelpCenter = ({openWorkspace}) => {
  const [text, setText] = useState("");

  return (
    <div className="flex-1 px-11 md:px-5 py-[100px] help-center-bg min-h-[100vh] relative">
       <div className="absolute inset-0 bg-[#000000] opacity-50"></div>
      <button onClick={openWorkspace} className="text-white-a700 text-[9px] font-semibold absolute top-5 left-10 bg-[#0F2A37] rounded-full w-[55px] h-[21px] flex justify-center items-center gap-1">
        <img src="images/Arrowbaack.svg" alt="" /> Back
      </button>
      <div className=" flex-col relative items-start rounded-[20px] border border-solid border-[#fff]/60 help-center-bg-div px-5 pt-5 pb-[60px]">
        <div className="flex justify-center gap-2 w-full">
          <Heading
            as="h1"
            className="text-shadow-ts text-[24px] font-bold text-white-a700 "
          >
            What does the Conti group org structure look like?
          </Heading>
          <div className="w-[32px] h-[32px] cursor-pointer">
            <img src="images/edithelp.svg" alt="" />
          </div>
        </div>

        <div className="relative">
          <div className="border border-[#FFFFFF] mt-10 rounded-[16px] w-full max-w-[510.22px] min-h-[256px] mx-auto p-[20px] bg-gradient">
            <img src="images/file.svg" alt="" />
            <Text className="text-[#FFFFFF] text-[16px] font-bold my-3">
              Relationship graph data (43,022 records from 1 document)
            </Text>
            <img className="mt-8 w-full" src="images/grapgh.png" alt="" />
          </div>

          <div className="bg-[#041320] w-[55px]  rounded-[8px] absolute right-0 bottom-[-30px] py-2 ">
            <img className="mx-auto" src="images/save.svg" alt="" />
            <img className="mx-auto mt-7" src="images/plus.svg" alt="" />
            <div className="border border-[#048FFD] mx-3 my-2"></div>
            <img className="mx-auto " src="images/minus.svg" alt="" />
          </div>
        </div>

        <div className="relative w-full border border-[#043A43]  input-gradient mt-16 flex items-center justify-center">
          {/* Text input */}
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="w-full text-[#BABABA] bg-[#041320]  font-semibold border-none outline-none focus:outline-none focus:ring-0  pl-10 pr-[60px] h-[54px]"
            placeholder="What else can I help with?"
          />

          {/* Upload button */}
          <div className="absolute  right-5 transform  pointer-events-nonew-[60px] h-[60px] flex justify-center items-center rounded-tr-[10px]">
            <img
              className="cursor-pointer"
              src="images/Polygonblue.svg"
              alt="Upload"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpCenter;
