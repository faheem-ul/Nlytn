import React, { useState } from "react";

import { Heading } from "components/Heading";
import { Text } from "components/Text";
import { Img } from "components/Img";

import useDisclosure from "components/hooks/useDisclosure";
import MyModal from "components/ui/Modal";
import ResponsiveSidebar from "components/ResponsiveSidebar";

const Worksapce = () => {
  const [images, setImages] = useState([]);
  const [text, setText] = useState("");
  const [currentAnswer, setCurrentAnswer] = useState(1);
  //   const totalAnswers = 4;
  const { isOpen, onOpen, onClose } = useDisclosure();

  const answers = [
    <div className="w-full flex gap-2 justify-start">
      <div className="w-full max-w-[550px] min-h-[60px] flex flex-wrap gap-[30px] border border-[#FFFFFF] rounded-[8px] p-4">
        {Array(10)
          .fill(0)
          .map((_, index) => (
            <img
              key={index}
              className="w-[75px] h-[64px]"
              src="images/Mask group@2x.png"
              alt="chatimg"
            />
          ))}
      </div>
    </div>,
    <div className="w-full flex gap-2 justify-start">
      <div className="w-full max-w-[550px] min-h-[60px] border border-[#fff]/50 px-3 py-4 rounded-[8px]">
        <Text className="text-[#249cff] max-w-[450px] text-[14px] text-left leading-[17px] mb-[42px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum.
        </Text>
      </div>
    </div>,
    <div className="w-full flex gap-2 justify-start">
      <div className="w-full max-w-[550px] min-h-[60px] border border-[#fff]/50 px-3 py-4 rounded-[8px]">
        <Text className="text-[#249cff] max-w-[450px] text-[14px] text-left leading-[17px] mb-[42px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum.
        </Text>
      </div>
    </div>,
  ];

  const handleNext = () => {
    if (currentAnswer < answers.length) {
      setCurrentAnswer(currentAnswer + 1);
    }
  };

  const handlePrevious = () => {
    if (currentAnswer > 1) {
      setCurrentAnswer(currentAnswer - 1);
    }
  };
  const workspacecards = [
    {
      imageURl: "images/card.svg",
      CardHeading: "Getting Started",
      CardDescrip: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
    },
    {
      imageURl: "images/card.svg",
      CardHeading: "Building and creation",
      CardDescrip: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
    },
    {
      imageURl: "images/card.svg",
      CardHeading: "Apps and integrations",
      CardDescrip: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
    },
    {
      imageURl: "images/card.svg",
      CardHeading: "Account settings",
      CardDescrip: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
    },
  ];

  // Handle multiple image selections
  const handleImageChange = (e) => {
    const files = Array.from(e.target.files) as File[]; // Cast files to an array of File objects
    const newImages = files.map((file) => URL.createObjectURL(file));
    setImages((prevImages) => [...prevImages, ...newImages]);
  };

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const maxVisibleImages = 3;

  return (
    <div className="workspace-bg bg-[#010A12CC]/100 bg-opacity-80 w-full min-h-[100vh] h-full relative ">
      <div className="absolute inset-0 bg-[#000000] opacity-70"></div>
      <ResponsiveSidebar />
      <div className="flex-1 px-8 mob:px-5 pb-[100px] mob:py-10 relative mt-16 mob:mt-0">
        <div className="flex flex-col items-start rounded-[20px] border border-solid border-white-a700 bg-gray-900 px-5 py-[34px]">
          <div className="flex justify-between w-full">
            <Heading
              as="h1"
              className="text-shadow-ts mob:w-full text-[36px] mob:text-[20px] mob:text-center font-bold text-white-a700 md:text-[34px] sm:text-[32px]"
            >
              How Can We Help You Today?
            </Heading>
            <div className="flex items-center gap-3 mob:hidden">
              <button
                className="w-[82px] h-[46px] rounded-[8px] bg-[#048FFD] text-[#ffffff] font-semibold text-[14px] font-inter"
                onClick={onOpen}
              >
                SHARE
              </button>
              <MyModal
                title="Share Thread"
                isOpen={isOpen}
                closeModal={onClose}
              >
                <div className="relative flex items-center justify-center">
                  {/* Left Image */}
                  <img
                    src="images/user.svg"
                    alt="Left Icon"
                    className="absolute left-10 top-11 "
                  />

                  {/* Input field */}
                  <input
                    type="text"
                    className="w-[525px] mt-[27px] h-[51px] pl-10 mb-[99px] focus:border-[#fff] text-white-a700 border border-[#fff]/30 bg-transparent"
                    placeholder="Add a name, group, or email"
                  />

                  {/* Right Images */}
                  <div className="absolute right-10 top-11 flex gap-1">
                    <img
                      src="images/eye.svg"
                      alt="Right Icon 1"
                      className="w-6 h-6"
                    />
                    <img
                      src="images/down-arrow.svg"
                      alt="Right Icon 2"
                      className="w-6 h-6"
                    />
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <img src="images/group-persons.svg" alt="" />
                  <div className="flex gap-5 items-center">
                    <Text
                      className=" font-semibold text-[16px] text-white-a700 cursor-pointer"
                      onClick={onClose}
                    >
                      Cancel
                    </Text>
                    <button className="w-[117px] h-[51px] signin-btn-gradient rounded-[5px] text-white-a700 font-semibold">
                      Send
                    </button>
                  </div>
                </div>
              </MyModal>
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
            className="mt-2 w-[44%] mob:text-[12px] mob:w-full mob:text-center text-[14px]  font-light leading-[128%] text-gray-500 md:w-full"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum.
          </Text>
          <div className="w-full flex gap-2 justify-end px-[30px] mob:px-0 mb-[27px] mt-7">
            <Img
              src="images/img_clock.svg"
              alt="Clock"
              className="h-[16px] w-[16px] self-center"
            />
            {/* img */}
            <div>
              <div className="w-full max-w-[450px] mob:max-w-[215px] min-h-[60px] border border-[#fff]/50 px-3 py-4 rounded-[8px]">
                <Text className="text-[#048FFD] text-[14px] text-right leading-[17px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  vulputate libero et velit interdum.
                </Text>
              </div>
            </div>
          </div>
          {/* text edit */}
          <div className="w-full flex gap-2 justify-center mob:justify-start px-[30px] mob:px-0  mb-[27px]">
            <div className="w-full max-w-[550px] mob:max-w-[215px] min-h-[60px] border border-[#fff]/50 px-3 py-4 rounded-[8px]">
              <Text className="text-[#048FFD] max-w-[450px] text-[14px] text-left leading-[17px] mb-[42px] mob:mb-2">
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
          <Text
            as="p"
            className="mt-1 text-[14px] max-w-[450px] mob:max-w-[215px] leading-[18px] text-white-a700"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum.
          </Text>
          <div className="max-w-[500px]">
            <div className="border border-[#fff] w-full px-2 py-2 max-w-[520px] rounded-[23px] mb-[12px] flex justify-evenly mt-10">
              {answers.map((_, index) => (
                <Text
                  key={index}
                  className={`font-semibold cursor-pointer text-white-a700 ${
                    currentAnswer === index + 1 ? "text-[#249cff]" : ""
                  }`}
                  onClick={() => setCurrentAnswer(index + 1)}
                >
                  Answer {index + 1}
                </Text>
              ))}
            </div>

            <div className="w-full max-w-[516px] mt-3 bg-white-a700 flex mb-[24px]">
              {answers.map((_, index) => (
                <div
                  key={index}
                  className={`flex-1 h-[1px] ${
                    currentAnswer === index + 1
                      ? "bg-[#249cff]"
                      : "bg-transparent"
                  }`}
                ></div>
              ))}
            </div>

            {answers[currentAnswer - 1]}

            <Text className="mt-3 w-full text-end max-w-[550px] text-[#f0ecec] font-medium">
              <span className="cursor-pointer" onClick={handlePrevious}>
                &lt;
              </span>{" "}
              Answer {currentAnswer}/{answers.length}{" "}
              <span className="cursor-pointer" onClick={handleNext}>
                &gt;
              </span>
            </Text>
          </div>
          .{/* searches */}
          <div className="w-full items-center flex gap-[21px] justify-end px-[30px] mb-[27px] mob:px-5 mob:gap-2 mt-7">
            <Text as="p" className="font-medium text-[#ADADAD] text-[12px]">
              Popular Searches:
            </Text>
            <div className="border border-[#ADADAD] px-1 py-2 mob:w-full flex items-center justify-center gap-1 rounded-[5px]">
              <Img src="images/search.svg" alt="search"></Img>
              <Text className="text-[#ADADAD] text-[12px]">How to</Text>
            </div>
            <div className="border border-[#ADADAD] px-1 py-2 mob:w-full flex items-center justify-center gap-1 rounded-[5px]">
              <Img src="images/search.svg" alt="search"></Img>
              <Text className="text-[#ADADAD] text-[12px]">Cybersecurity</Text>
            </div>
            <div className="border border-[#ADADAD] px-1 py-2 mob:hidden flex items-center justify-center gap-1 rounded-[5px]">
              <Img src="images/search.svg" alt="search"></Img>
              <Text className="text-[#ADADAD] text-[12px]">Lorem Ipsum</Text>
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
              className="w-full text-white-a700 bg-transparent font-semibold border-none outline-none focus:outline-none focus:ring-0  mob:pl-8 pl-14 pr-[60px]"
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
          <div className="mob:flex w-full justify-center mb-4 items mt-[24px] items-center gap-3  hidden">
              <button
                className="w-[82px] h-[46px] rounded-[8px] bg-[#048FFD] text-[#ffffff] font-semibold text-[14px] font-inter"
                onClick={onOpen}
              >
                SHARE
              </button>
              <MyModal
                title="Share Thread"
                isOpen={isOpen}
                closeModal={onClose}
              >
                <div className="relative flex items-center justify-center">
                  {/* Left Image */}
                  <img
                    src="images/user.svg"
                    alt="Left Icon"
                    className="absolute left-10 top-11 "
                  />

                  {/* Input field */}
                  <input
                    type="text"
                    className="w-[525px] mt-[27px] h-[51px] pl-10 mb-[99px] focus:border-[#fff] text-white-a700 border border-[#fff]/30 bg-transparent"
                    placeholder="Add a name, group, or email"
                  />

                  {/* Right Images */}
                  <div className="absolute right-10 top-11 flex gap-1">
                    <img
                      src="images/eye.svg"
                      alt="Right Icon 1"
                      className="w-6 h-6"
                    />
                    <img
                      src="images/down-arrow.svg"
                      alt="Right Icon 2"
                      className="w-6 h-6"
                    />
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <img src="images/group-persons.svg" alt="" />
                  <div className="flex gap-5 items-center">
                    <Text
                      className=" font-semibold text-[16px] text-white-a700 cursor-pointer"
                      onClick={onClose}
                    >
                      Cancel
                    </Text>
                    <button className="w-[117px] h-[51px] signin-btn-gradient rounded-[5px] text-white-a700 font-semibold">
                      Send
                    </button>
                  </div>
                </div>
              </MyModal>
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
      </div>
     
      <div className="relative mb-[400px] flex w-full items-center flex-wrap gap-[55px] mob:mb-10 justify-center">
        {workspacecards.map((card, num) => (
          <div
            key={num}
            className="py-7 px-[20px] border border-[#fff]/60 w-full max-w-[220px] rounded-[20px] card-bg max-h-[260px]"
          >
            <img src={card.imageURl} alt="image" className="mx-auto" />
            <Text className="text-[14px] font-bold leading-[17px] text-white-a700 text-center mt-[22px] mb-2">
              {card.CardHeading}
            </Text>
            <Text className="text-[12px] font-light leading-[17px] w-full text-[#ADADAD] text-center">
              {card.CardDescrip}
            </Text>
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default Worksapce;
