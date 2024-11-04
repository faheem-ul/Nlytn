import React from "react";
import { Helmet } from "react-helmet";
import { Img, Text, Heading } from "../../components";

import Sidebar1 from "../../components/Sidebar1";

export default function RdScreenHomePage() {
  return (
    <>
      <Helmet>
        <title>Rd screen home page</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>
      <div className="flex w-full items-start bg-black-900">
        <Sidebar1 />
        <div className="flex-1 px-11 md:px-5">
          <div className="flex flex-col items-start rounded-[20px] border border-solid border-white-a700 bg-gray-900 px-5 py-[34px] sm:py-5">
            <div className="flex justify-between w-full">
              <Heading
                as="h1"
                className="text-shadow-ts text-[36px] font-bold text-white-a700 md:text-[34px] sm:text-[32px]"
              >
                How Can We Help You Today?
              </Heading>
              <div className="flex items-center gap-3">
                <button className="w-[82px] h-[46px] rounded-[8px] bg-[#048FFD] text-[#ffffff] font-semibold text-[14px] font-inter">
                  SHARE
                </button>
                <button className="max-w-[235px] h-[46px] rounded-[8px] text-[#fff] bg-[#048FFD] px-3">
                  <div className="flex gap-3 justify-center items-center">
                    {/* <img src="../../../public/images/question.svg" alt="" /> */}
                    <div className="h-[25px] w-[25px]  border-2 border-[#fff] rounded-full font-semibold">
                      ?
                    </div>
                    <Text className="uppercase font-semibold text-[#fff] text-[11px] font-inter">
                      Help Center
                    </Text>
                  </div>
                </button>
              </div>
            </div>

            <Text
              as="p"
              className="mt-2 w-[44%] text-[14px] font-light leading-[128%] text-gray-500 md:w-full"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum.
            </Text>
            <div className="w-full flex gap-2 justify-end px-[30px] mb-[27px]">
              <Img
                src="images/img_clock.svg"
                alt="Clock"
                className="h-[16px] w-[16px] self-center"
              />
              <div className="w-full max-w-[450px] min-h-[60px] border border-[#fff]/50 px-3 py-4 rounded-[8px]">
                <Text className="text-[#048FFD] text-[14px] text-right leading-[17px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  vulputate libero et velit interdum.
                </Text>
              </div>
            </div>
            <div className="w-full flex gap-2 justify-center px-[30px] mb-[27px]">
              <Img
                src="images/img_clock.svg"
                alt="Clock"
                className="h-[16px] w-[16px] self-center"
              />
              <div className="w-full max-w-[550px] min-h-[60px] border border-[#fff]/50 px-3 py-4 rounded-[8px]">
                <Text className="text-[#048FFD] max-w-[450px] text-[14px] text-left leading-[17px] mb-[42px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  vulputate libero et velit interdum.
                </Text>
                <div className="flex w-full justify-between items-center">
                <Img
                src="images/link.svg"
                alt="Clock"
                className=""
              />
              <div className="flex items-center gap-1">
                <button className="text-[#fff] border border-[#fff] rounded-[4px] px-[7px] py-[2px] bg-transparent text-[14px]">Cancel</button>
                <button className="px-[7px] py-[2px] bg-[#031627] text-[#fff] border border-[#fff] rounded-[4px] text-[14px]">Send</button>
              </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
