import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Img, Text, Heading } from "../../components";

import Sidebar1 from "../../components/Sidebar1";

export default function RdScreenHomePage() {
  const [AnswerOne, setAnswerOne] = useState(true);
  const [AnswerTwo, setAnswerTwo] = useState(false);
  const [AnswerThree, setAnswerThree] = useState(false);
  const [images, setImages] = useState([]);
  const [text, setText] = useState("");
  const [currentAnswer, setCurrentAnswer] = useState(1);

  const handleNext = () => {
    if (currentAnswer < 3) {
      setCurrentAnswer(currentAnswer + 1);
    }
  };

  const handlePrevious = () => {
    if (currentAnswer > 1) {
      setCurrentAnswer(currentAnswer - 1);
    }
  };

  // Handle multiple image selections
  const handleImageChange = (e) => {
    const files = Array.from(e.target.files) as File[]; // Cast files to an array of File objects
    const newImages = files.map((file) => URL.createObjectURL(file));
    setImages((prevImages) => [...prevImages, ...newImages]);
  };
  const handleAnswerOne = () => {
    setAnswerOne(true);
    setAnswerTwo(false);
    setAnswerThree(false);
  };
  const handleAnswerTwo = () => {
    setAnswerOne(false);
    setAnswerTwo(true);
    setAnswerThree(false);
  };
  const handleAnswerThree = () => {
    setAnswerOne(false);
    setAnswerTwo(false);
    setAnswerThree(true);
  };
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const maxVisibleImages = 3;

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
        <div className="flex-1 px-11 md:px-5 py-[100px]">
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
                    <p className="uppercase font-semibold text-[#ffffff] text-[11px] font-inter">
                      Help Center
                    </p>
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
            <div className="w-full flex gap-2 justify-end px-[30px] mb-[27px] mt-7">
              <Img
                src="images/img_clock.svg"
                alt="Clock"
                className="h-[16px] w-[16px] self-center"
              />
              {/* img */}
              <div>
                <div className="flex flex-wrap gap-[15px] justify-end mb-2">
                  <img
                    className="w-[89.56px] h-[76.34px]"
                    src="images/Mask group@2x.png"
                    alt="cahtimg"
                  />
                  <img
                    className="w-[89.56px] h-[76.34px]"
                    src="images/Mask group@2x.png"
                    alt="cahtimg"
                  />
                  <img
                    className="w-[89.56px] h-[76.34px]"
                    src="images/Mask group@2x.png"
                    alt="cahtimg"
                  />
                </div>
                {/* text chat */}
                <div className="w-full max-w-[450px] min-h-[60px] border border-[#fff]/50 px-3 py-4 rounded-[8px]">
                  <Text className="text-[#048FFD] text-[14px] text-right leading-[17px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vulputate libero et velit interdum.
                  </Text>
                </div>
              </div>
            </div>
            {/* text edit */}
            <div className="w-full flex gap-2 justify-center px-[30px] mb-[27px]">
              {/* <Img
                src="images/img_clock.svg"
                alt="Clock"
                className="h-[16px] w-[16px] self-center"
              /> */}
              <div className="w-full max-w-[550px] min-h-[60px] border border-[#fff]/50 px-3 py-4 rounded-[8px]">
                <Text className="text-[#048FFD] max-w-[450px] text-[14px] text-left leading-[17px] mb-[42px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  vulputate libero et velit interdum.
                </Text>
                <div className="flex w-full justify-between items-center">
                  <Img src="images/link.svg" alt="Clock" className="" />
                  <div className="flex items-center gap-1">
                    <button className="text-[#fff] border border-[#fff] rounded-[4px] px-[7px] py-[2px] bg-transparent text-[14px]">
                      Cancel
                    </button>
                    <button className="px-[7px] py-[2px] bg-[#000] text-[#fff] border border-[#fff] rounded-[4px] text-[14px]">
                      Send
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* <Text
              as="p"
              className="mt-1 text-[14px] max-w-[450px] leading-[18px] text-white-a700"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum.
            </Text> */}
            {/* 
            <div className="w-full flex gap-2 justify-end px-[30px] mb-[27px] mt-7">
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
            </div> */}
            <Text
              as="p"
              className="mt-1 text-[14px] max-w-[450px] leading-[18px] text-white-a700"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum.
            </Text>
            <div className="border border-[#fff] w-full px-2 py-2 max-w-[520px] rounded-[23px] mb-[12px] flex justify-between mt-10">
              <Text
                className="font-semibold cursor-pointer text-white-a700"
                onClick={() => setCurrentAnswer(1)}
              >
                Answer 1
              </Text>
              <Text
                className="font-semibold cursor-pointer text-white-a700"
                onClick={() => setCurrentAnswer(2)}
              >
                Answer 2
              </Text>
              <Text
                className="font-semibold cursor-pointer text-white-a700"
                onClick={() => setCurrentAnswer(3)}
              >
                Answer 3
              </Text>
            </div>
            <div className="w-full max-w-[516px] mt-3 bg-white-a700 flex mb-[24px]">
              <div
                className={`w-[172px] h-[1px] ${
                  currentAnswer === 1 ? "bg-[#249cff]" : ""
                }`}
              ></div>
              <div
                className={`w-[172px] h-[1px] ${
                  currentAnswer === 2 ? "bg-[#249cff]" : ""
                }`}
              ></div>
              <div
                className={`w-[172px] h-[1px] ${
                  currentAnswer === 3 ? "bg-[#249cff]" : ""
                }`}
              ></div>
            </div>
            {currentAnswer === 1 && (
              <>
                <div className="w-full flex gap-2 justify-start ">
                  {/* <Img
              src="images/img_clock.svg"
              alt="Clock"
              className="h-[16px] w-[16px] self-center"
            /> */}
                  <div className="w-full max-w-[550px] min-h-[60px]  flex flex-wrap gap-[30px] border border-[#FFFFFF] rounded-[8px] p-4">
                    <img
                      className="w-[75px] h-[64px]"
                      src="images/Mask group@2x.png"
                      alt="cahtimg"
                    />
                    <img
                      className="w-[75px] h-[64px]"
                      src="images/Mask group@2x.png"
                      alt="cahtimg"
                    />
                    <img
                      className="w-[75px] h-[64px]"
                      src="images/Mask group@2x.png"
                      alt="cahtimg"
                    />
                    <img
                      className="w-[75px] h-[64px]"
                      src="images/Mask group@2x.png"
                      alt="cahtimg"
                    />
                    <img
                      className="w-[75px] h-[64px]"
                      src="images/Mask group@2x.png"
                      alt="cahtimg"
                    />
                    <img
                      className="w-[75px] h-[64px]"
                      src="images/Mask group@2x.png"
                      alt="cahtimg"
                    />
                    <img
                      className="w-[75px] h-[64px]"
                      src="images/Mask group@2x.png"
                      alt="cahtimg"
                    />
                    <img
                      className="w-[75px] h-[64px]"
                      src="images/Mask group@2x.png"
                      alt="cahtimg"
                    />
                    <img
                      className="w-[75px] h-[64px]"
                      src="images/Mask group@2x.png"
                      alt="cahtimg"
                    />
                    <img
                      className="w-[75px] h-[64px]"
                      src="images/Mask group@2x.png"
                      alt="cahtimg"
                    />
                  </div>
                </div>
                <Text className="mt-3 w-full text-end max-w-[550px] text-[#f0ecec] font-medium">
                  <span className="cursor-pointer" onClick={handlePrevious}>
                    &lt;
                  </span>{" "}
                  Answer 1/3{" "}
                  <span className="cursor-pointer" onClick={handleNext}>
                    &gt;
                  </span>
                </Text>
              </>
            )}
            {currentAnswer === 2 && (
              <>
                <div className="w-full flex gap-2 justify-start">
                  {/* <Img
              src="images/img_clock.svg"
              alt="Clock"
              className="h-[16px] w-[16px] self-center"
            /> */}
                  <div className="w-full max-w-[550px] min-h-[60px] border border-[#fff]/50 px-3 py-4 rounded-[8px]">
                    <Text className="text-[#249cff] max-w-[450px] text-[14px] text-left leading-[17px] mb-[42px]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc vulputate libero et velit interdum. Nunc vulputate
                      libero et velit interdum.
                    </Text>
                  </div>
                </div>
                <Text className="mt-3 w-full text-end max-w-[550px] text-[#f0ecec] font-medium">
                  <span className="cursor-pointer" onClick={handlePrevious}>
                    &lt;
                  </span>{" "}
                  Answer 2/3{" "}
                  <span className="cursor-pointer" onClick={handleNext}>
                    &gt;
                  </span>
                </Text>
              </>
            )}
            {currentAnswer === 3 && (
              <>
                <div className="w-full flex gap-2 justify-start">
                  {/* <Img
              src="images/img_clock.svg"
              alt="Clock"
              className="h-[16px] w-[16px] self-center"
            /> */}
                  <div className="w-full max-w-[550px] min-h-[60px] border border-[#fff]/50 px-3 py-4 rounded-[8px]">
                    <Text className="text-[#249cff] max-w-[450px] text-[14px] text-left leading-[17px] mb-[42px]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc vulputate libero et velit interdum. Lorem ipsum dolor
                      sit amet, consectetur adipiscing elit. Nunc vulputate
                      libero et velit interdum.
                    </Text>
                  </div>
                </div>
                <Text className="mt-3 w-full text-end max-w-[550px] text-[#f0ecec] font-medium">
                  <span className="cursor-pointer" onClick={handlePrevious}>
                    &lt;
                  </span>{" "}
                  Answer 3/3{" "}
                  <span className="cursor-pointer" onClick={handleNext}>
                    &gt;
                  </span>
                </Text>
              </>
            )}
            .{/* searches */}
            <div className="w-full items-center flex gap-[21px] justify-end px-[30px] mb-[27px] mt-7">
              <Text as="p" className="font-medium">
                Popular Searches:
              </Text>
              <div className="border border-[#ADADAD] px-1 py-2 flex items-center justify-center gap-1 rounded-[5px]">
                <Img src="images/search.svg" alt="search"></Img>
                <Text>How to</Text>
              </div>
              <div className="border border-[#ADADAD] px-1 py-2 flex items-center justify-center gap-1 rounded-[5px]">
                <Img src="images/search.svg" alt="search"></Img>
                <Text>Cybersecurity</Text>
              </div>
              <div className="border border-[#ADADAD] px-1 py-2 flex items-center justify-center gap-1 rounded-[5px]">
                <Img src="images/search.svg" alt="search"></Img>
                <Text>Lorem Ipsum</Text>
              </div>
            </div>
            <div className="relative w-full border border-[#fff] rounded-t-[12px] input-gradient p-4">
              {/* Images preview area */}
              <div className="relative">
                {images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    className={`w-[260px] h-[260px] absolute top-[-280px] rounded-md transition-opacity duration-300 ${
                      hoveredIndex === index ? "opacity-100" : "opacity-0"
                    }`}
                  />
                ))}

                <div className="flex space-x-2 overflow-x-auto items-center">
                  {/* Display only the first 3 images */}
                  {images.slice(0, maxVisibleImages).map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-[60px] h-[60px] rounded-md"
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(null)}
                    />
                  ))}

                  {/* Show +more count if there are additional images */}
                  {images.length > maxVisibleImages && (
                    <p className="text-[#FFFFFF] text-[14px]">
                      + {images.length - maxVisibleImages} more
                    </p>
                  )}
                </div>
              </div>

              {/* Text input */}
              <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="w-full text-white-a700 bg-transparent font-semibold border-none outline-none focus:outline-none focus:ring-0  pl-14 pr-18"
                // placeholder="Type here..."
              />

              <div className="absolute bottom-[-30px] left-0 transform -translate-y-1/2 pointer-events-none w-[60px] h-[60px] flex justify-center items-center rounded-tr-[10px]">
                <label className="cursor-pointer pointer-events-auto">
                  <Img src="images/link.svg" className="h-[26px] w-auto"></Img>
                  <input
                    type="file"
                    accept="image/*"
                    multiple
                    className="hidden"
                    onChange={handleImageChange}
                  />
                </label>
              </div>

              {/* <img src="images/Polygon.svg" alt="Upload" className=" right-0"/> */}
              {/* Upload button */}
              <div className="absolute bottom-[-30px] right-0 transform -translate-y-1/2 pointer-events-none border border-[#ffffff] w-[60px] h-[60px] flex justify-center items-center rounded-tr-[10px]">
                <img src="images/Polygon.svg" alt="Upload" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
