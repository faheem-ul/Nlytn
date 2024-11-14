import React from "react";
import { useNavigate } from "react-router-dom";

import { Heading } from "components/Heading";
import { Text } from "components/Text";
// import ResponsiveSidebar from "components/ResponsiveSidebar";

interface Props {
  openWorkspace?: () => void;
}

const SharedThreads: React.FC<Props> = ({ openWorkspace }) => {
  const navigate = useNavigate();

  const relatedQuestion = [
    "Lorem ipsum dolor sit amet?",
    "Lorem ipsum dolor sit amet?",
    "Lorem ipsum dolor sit amet?",
    "Lorem ipsum dolor sit amet?",
    "Lorem ipsum dolor sit amet?",
    "Lorem ipsum dolor sit amet?",
    "Lorem ipsum dolor sit amet?",
    "Lorem ipsum dolor sit amet?",
    "Lorem ipsum dolor sit amet?",
    "Lorem ipsum dolor sit amet?",
    "Lorem ipsum dolor sit amet?",
  ];
  return (
    <div className="threads-bg bg-[#010A12CC]/100 bg-opacity-80 flex justify-center items-center mob:py-10 w-full mx-auto relative px-[60px] mob:px-12  mob:mb-[30px] mob:bg-[#05141D] min-h-screen">
      <div className="absolute inset-0 bg-[#000000] opacity-70 mob:bg-[#010A12]"></div>
      <button
        onClick={openWorkspace}
        className="text-white-a700 text-[9px] font-semibold absolute mob:hidden top-5 mob:top-[90px] left-10 bg-[#0F2A37]  rounded-full w-[55px] h-[21px] flex justify-center items-center gap-1"
      >
        <img src="images/Arrowbaack.svg" alt="" /> Back
      </button>

      <div className="w-full flex justify-center h-full items-center ">
        <div className="flex px-5 relative w-full  justify-center items-center signin-gradient border border-solid border-[#fff]/20 rounded-[20px]">
          <div className="flex flex-col items-start justify-center w-full rounded-[20px] px-5 py-[34px] mob:px-0">
            <div className="flex justify-between items-center w-full mt-[55px] mb-[31px] mob:mt-[7px] mob:mb-[15px]">
              <Heading
                as="h1"
                className="text-shadow-ts font-bold mob:text-center text-white-a700 mob:text-[24px] mob:leading-[28px] text-[32px]"
              >
                When was the last time Person X went to Location Y?
              </Heading>
              <img
                src="images/edit.svg"
                alt=""
                className="w-[25px] h-[25px] mob:hidden"
              />
            </div>
            <div className="flex gap-[90px] mob:flex-col mob:gap-5">
              <div className="w-full max-w-[530px] text-white-a700">
                <Text className="text-[16px] font-bold mb-5">Answer</Text>
                <Text className="text-[13px]  mb-8 px-5 mob:mb-5 font-[400] mob:text-center mob:px-0 font-poppins mob:leading-[24px]">
                  (MOCK TS//REL TO USA, GBR) Lorem ipsum dolor sit amet, sed do
                  eiusmod tempor incididunt ut labore et dolore magna do eiusmod
                  tempor incididunt ut labore et dolore magna. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit anim id est laborum [1][2]. <br /> <br />
                  (MOCK TS//REL TO USA, GBR) Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. Duis aute irure dolor in
                  reprehenderit in. Excepteur sint occaecat cupidatat [3].
                </Text>
                <Text className="text-[13px] mob:text-center font-light mb-5 mob:mb-2 font-poppins px-5 text-[#048FFD] text-right mob:leading-[22px]">
                  (MOCK TS//REL TO USA, GBR) Lorem ipsum dolor sit sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua ?
                </Text>
                <Text className="text-[13px] mob:text-center mb-5 px-5 max-w-[530px] font-poppins font-[400] mob:leading-[22px]">
                  Lorem ipsum sit sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua ?
                </Text>
              </div>
              <div className="text-white-a700 mob:mb-5">
                <Text className="text-[16px] font-bold mb-5 font-poppins">
                  Sources{" "}
                  <span className="text-[#048FFD] text-[8px] font-[400] ml-[40px]">
                    View All Sources
                  </span>
                </Text>
                <div className="flex items-center gap-2 px-5 mob:px-0 font-poppins">
                  <img src="images/export.svg" alt="" />
                  <Text className="text-[14px] font-[400] font-poppins">
                    [1] Source Doc Title 1 on pp.7
                  </Text>
                </div>
                <div className="flex items-center gap-2 mt-6 px-5 mob:px-0">
                  <img src="images/export.svg" alt="" />
                  <Text className="text-[14px] font-[400] font-poppins">
                    [2] Source Doc Title 2 on pp.82
                  </Text>
                </div>
              </div>
            </div>
            <input
              type="text"
              className="w-full mb-[31px] bg-[#041320] mob:mt-5 focus:border-[#fff] focus:ring-0 focus:outline-none pl-[26px] pr-[14px] mob:px-2 mob:text-[12px] mob:placeholder:text-center text-white-a700 rounded-[10px] threads-input-with-image h-[54px]"
              placeholder="Ask follow-up questions or related tasks"
            />
            <Text className="text-[16px] font-bold mb-5 text-white-a700">
              Related Questions
            </Text>
            <div className="max-h-[100px] w-full overflow-y-scroll custom-mine-scrollbar text-white-a700">
              {relatedQuestion.map((question, index) => (
                <ul className="list-disc list-inside">
                  <li
                    key={index}
                    className="text-[14px] font-[400] mb-[10px] underline px-5 mob:px-0 font-poppins"
                  >
                    {question}
                  </li>
                </ul>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SharedThreads;
