import { Helmet } from "react-helmet";
import { Img, Text, Heading } from "../../components";
import Sidebar1 from "../../components/Sidebar1";
import React from "react";

export default function RdScreenHomePage() {
  return (
    <>
      <Helmet>
        <title>Rd screen home page</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex w-full items-start bg-black-900">
        <Sidebar1 />
        <div className="flex-1 px-11 md:px-5">
          <div className="flex flex-col items-start rounded-[20px] border border-solid border-white-a700 bg-gray-900 px-5 py-[34px] sm:py-5">
            <Heading
              as="h1"
              className="text-shadow-ts text-[36px] font-bold text-white-a700 md:text-[34px] sm:text-[32px]"
            >
              How Can We Help You Today?
            </Heading>
            <Text as="p" className="mt-2 w-[44%] text-[14px] font-light leading-[128%] text-gray-500 md:w-full">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum.
            </Text>
            <Img
              src="images/img_clock.svg"
              alt="Clock"
              className="mb-[592px] mt-[34px] h-[16px] w-[16px] self-center"
            />
          </div>
        </div>
        
      </div>
    </>
  );
}
