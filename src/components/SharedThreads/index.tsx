import React from "react";

import { Heading } from "components/Heading";
import { Text } from "components/Text";

const SharedThreads = () => {
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
]
  return (
    <div className="threads-bg bg-[#010A12CC]/100 bg-opacity-80 w-full mx-auto relative px-5">
      <div className="absolute inset-0 bg-[#000000] opacity-70"></div>
      <div className="w-full flex justify-center h-full items-center min-h-[100vh]">
        <div className="flex px-5 relative w-full max-w-[1144px] justify-center items-center signin-gradient border border-solid border-[#fff]/20 rounded-[20px]">
          <div className="flex flex-col items-start justify-center w-full max-w-[1046px] rounded-[20px] px-5 py-[34px] sm:py-5">
            <div className="flex justify-between items-center w-full mt-[55px] mb-[31px]">
              <Heading
                as="h1"
                className="text-shadow-ts font-bold  text-white-a700 text-[32px]"
              >
                When was the last time Person X went to Location Y?
              </Heading>
              <img src="images/edit.svg" alt="" className="w-[25px] h-[25px]" />
            </div>
            <div className="flex gap-[90px]">
              <div className="w-full max-w-[530px] text-white-a700">
                <Text className="text-[16px] font-bold mb-5">Answer</Text>
                <Text className="text-[13px]  mb-8 px-5 font-[400]">
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
                <Text className="text-[13px] font-light mb-5 px-5 text-[#048FFD] text-right">
                  (MOCK TS//REL TO USA, GBR) Lorem ipsum dolor sit sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua ?
                </Text>
                <Text className="text-[13px]  mb-5 px-5 max-w-[530px] font-[400]">
                  Lorem ipsum sit sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua ?
                </Text>
              </div>
              <div className="text-white-a700">
                <Text className="text-[16px] font-bold mb-5">
                  Sources{" "}
                  <span className="text-[#048FFD] text-[8px] font-[400] ml-[40px]">
                    View All Sources
                  </span>
                </Text>
                <div className="flex items-center gap-2 px-5">
                  <img src="images/export.svg" alt="" />
                  <Text className="text-[14px] font-[400]">
                    [1] Source Doc Title 1 on pp.7
                  </Text>
                </div>
                <div className="flex items-center gap-2 mt-6 px-5">
                  <img src="images/export.svg" alt="" />
                  <Text className="text-[14px] font-[400]">
                    [2] Source Doc Title 2 on pp.82
                  </Text>
                </div>
              </div>
            </div>
            <input
              type="text"
              className="w-full mb-[31px] bg-[#041320] pl-[26px] pr-[14px] text-white-a700 rounded-[10px] threads-input-with-image h-[54px]"
              placeholder="Ask follow-up questions or related tasks"
            />
            <Text className="text-[16px] font-bold mb-5 text-white-a700">
              Related Questions
            </Text>
            <div className="max-h-[100px] w-full overflow-scroll text-white-a700">
             
               {
                relatedQuestion.map((question, index)=>(
                 
                    <ul className="list-disc list-inside">
                    <li key={index}  className="text-[14px] font-[400] mb-[10px] underline px-5" >
                      {question}
                    </li>
                    </ul>
                ))
               }
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SharedThreads;