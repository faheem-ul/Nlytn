import React, { useState } from "react";

// import ResponsiveSidebar from "components/ResponsiveSidebar";
import { Text } from "components/Text";


type Card = {
    id: number;
    isChecked: boolean;
    badge: {
      color: string;
      text: string;
    };
    question: string;
    username: string;
    date: string;
    icons: {
      checkIcon: string;
      trashIcon: string;
    };
  };

  
  const initialCards: Card[] = [
    {
      id: 1,
      isChecked: false,
      badge: {
        color: "#E9DD42",
        text: "Notification",
      },
      question: "What does the Conti group org structure look like?",
      username: "User123123776",
      date: "05 Sep 2024",
      icons: {
        checkIcon: "/images/check 4.svg",
        trashIcon: "/images/Trash.svg",
      },
    },
    {
      id: 2,
      isChecked: false,
      badge: {
        color: "#E9DD42",
        text: "Notification",
      },
      question: "Can I get the latest sales report?",
      username: "User567890123",
      date: "06 Sep 2024",
      icons: {
        checkIcon: "/images/check 4.svg",
        trashIcon: "/images/Trash.svg",
      },
    },
    {
      id: 3,
      isChecked: false,
      badge: {
        color: "#E9DD42",
        text: "Notification",
      },
      question: "Is the server maintenance scheduled?",
      username: "User789012345",
      date: "07 Sep 2024",
      icons: {
        checkIcon: "/images/check 4.svg",
        trashIcon: "/images/Trash.svg",
      },
    },
    {
      id: 4,
      isChecked: false,
      badge: {
        color: "#E9DD42",
        text: "Notification",
      },
      question: "What are the project deadlines?",
      username: "User345678901",
      date: "08 Sep 2024",
      icons: {
        checkIcon: "/images/check 4.svg",
        trashIcon: "/images/Trash.svg",
      },
    },
    {
      id: 5,
      isChecked: false,
      badge: {
        color: "#E9DD42",
        text: "Notification",
      },
      question: "Who is the contact for HR inquiries?",
      username: "User234567890",
      date: "09 Sep 2024",
      icons: {
        checkIcon: "/images/check 4.svg",
        trashIcon: "/images/Trash.svg",
      },
    },
    {
      id: 6,
      isChecked: false,
      badge: {
        color: "#E9DD42",
        text: "Notification",
      },
      question: "How do I access the analytics dashboard?",
      username: "User456789012",
      date: "10 Sep 2024",
      icons: {
        checkIcon: "/images/check 4.svg",
        trashIcon: "/images/Trash.svg",
      },
    },
    {
      id: 7,
      isChecked: false,
      badge: {
        color: "#E9DD42",
        text: "Notification",
      },
      question: "How do I access the analytics dashboard?",
      username: "User456789012",
      date: "10 Sep 2024",
      icons: {
        checkIcon: "/images/check 4.svg",
        trashIcon: "/images/Trash.svg",
      },
    },
  ];
  
interface props {
  id?: string;
  openWorkspace?: () => void;
}

const Alert: React.FC<props> = ({ id, openWorkspace }) => {
//   const images = ["images/Mask.png"]; 
  const imagesPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const [showUploadDiv, setshowUploadDiv] = useState(true);

  const totalPages = Math.ceil(initialCards.length / imagesPerPage);

  const currentImages = initialCards.slice(
    (currentPage - 1) * imagesPerPage,
    currentPage * imagesPerPage
  );

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePageSelect = (page: number) => {
    setCurrentPage(page);
  };
  const handleShowUploadDiv = () => {
    setshowUploadDiv(true);
  };
  // const showRdScreenHome = () => {
  //   const showRdScreenHomeVariable = document.querySelectorAll('#showRdScreenHome')
  //   console.log(showRdScreenHomeVariable);
  // };
  const [cards, setCards] = useState<Card[]>(initialCards);

  // Toggle function for checkbox
  const handleCheckboxChange = (id: number) => {
    setCards((prevCards) =>
      prevCards.map((card) =>
        card.id === id ? { ...card, isChecked: !card.isChecked } : card
      )
    );
  };


  
  return (
    <div className="min-h-screen bg-[#05141D] w-full py-3 px-8 mob:px-5 mob:bg-[#010A12]" id={id}>
      {/* <ResponsiveSidebar/> */}
     <div className="flex justify-between w-full my-4 mob:items-center">
      <Text className="text-[32px] font-semibold text-[#fff] mob:text-center mob:w-full mob:mt-[20px] mob:text-[24px] leading-[38.73px]">
      Alerts & Notifications
      </Text>
        <img
          className="w-[18.67px] h-[19.04px] cursor-pointer mob:hidden"
          src="images/cross.png"
          alt=""
          onClick={openWorkspace}
        />
      </div>
     
      {showUploadDiv && (
        <div className="w-full max-w-[105px] bg-[#0F2A37] px-[10px] my-5 border border-white-a700 rounded-[24px] py-1 ml-auto ">
          
         <button className="text-white-a700 w-full">
         <div className="flex items-center w-full justify-between">
          <Text className="text-[12px]">Delete All</Text>
          <img src="images/Trash.svg" alt="" className="w-[16px]" />
          </div>
          </button>
        </div>
      )}
      <div className="relative mob:mb-7">
        <input
          className={`h-[40px] relative w-full input-with-image text-[#ADADAD] text-[16px] rounded-[4px] px-5 border border-[#ADADAD] bg-transparent ${
            showUploadDiv ? "mt-0" : "mt-8"
          }`}
          type="text"
          placeholder="keyword filter"
        />
        <img
          className={`absolute top-0 cursor-pointer right-0 mr-[43px] mob:mr-3 ${
            showUploadDiv ? "mt-2 mob:mt-3" : "mt-10"
          }`}
          onClick={handleShowUploadDiv}
          src="images/upload.svg"
          alt="cahtimg"
        />
      </div>

      <div className="flex mt-4 justify-between items-center mb-[30px] mob:mb-10">
        <img
          className="w-[32px] h-[32px]"
          src="images/octicon_filter-16.png"
          alt=""
        />

        <div className=" pr-[40px] mob:pr-0">
          <div className="flex items-center gap-[33px] mb-4">
            <Text className="text-[9x] text-[#fff] leading-[13.5px]">
              Select All
            </Text>
            <input
              type="checkbox"
              className="bg-transparent focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-transparent  focus:shadow-none accent-[#fff] border border-white-a700"
            />
          </div>
          <div className="flex items-center gap-[15px] text-[#fff]">
            <Text>Unselect All</Text>
            <input
              type="checkbox"
              className="bg-transparent focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-transparent  focus:shadow-none accent-[#fff] border border-white-a700"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col ">
        {/* <div className="flex flex-wrap gap-[25px] mt-2">
        {currentImages.map((image, index) => (
          <div key={index} className="mb-10">
            <img
              className="w-[358.8px] h-auto max-h-[300px]"
              src={image}
              alt={`Image ${index + 1}`}
            />
          </div>
        ))}
      </div> */}

        {/* images mapping*/}
        <div className="flex flex-col w-full ">
          <div className="flex flex-wrap gap-[25px] mt-2 mob:justify-center">
           

          {currentImages.map((card) => (
        <div
          key={card.id}
          className="w-full max-w-[359px] p-[25px] border border-[#048FFD] rounded-[16px]"
        >
          <input
            type="checkbox"
            checked={card.isChecked}
            onChange={() => handleCheckboxChange(card.id)}
            className="bg-transparent focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-transparent focus:shadow-none accent-[#fff] border border-white-a700"
          />
          <div className="border border-[#DBE1F5] rounded-[50px] px-3 py-1 flex items-center gap-2 max-w-[94px] my-4">
            <div
              className="w-[7px] h-[7px] rounded-full"
              style={{ backgroundColor: card.badge.color }}
            ></div>
            <Text className="text-[10px] text-[#DBE1F5]">{card.badge.text}</Text>
          </div>
          <Text className="text-[16px] text-[#048FFD] font-semibold font-inter min-h-[40px]">
            {card.question}
          </Text>
          <Text className="text-[16px] text-[#FFFFFF] font-semibold font-inter mt-4">
            {card.username}
          </Text>
          <div className="flex items-center justify-between mt-4">
            <Text className="text-[16px] text-[#FFFFFF] font-inter">
              {card.date}
            </Text>
            <div className="flex items-center gap-2">
              <img
                className="w-[22.03px] h-[22.03px]"
                src={card.icons.checkIcon}
                alt="check icon"
              />
              <img
                className="w-[37px] h-[37px]"
                src={card.icons.trashIcon}
                alt="trash icon"
              />
            </div>
          </div>
        </div>
      ))}
          </div>

          {/* Pagination controls */}
          <div className="flex justify-end items-center mt-8 w-full mob:flex-col mob:gap-[20px]">
            <button className="text-[#ffff] border border-white-a700 hidden bg-[#07F6F933] mob:mx-auto font-medium mob:mt-10 px-4 py-1 mr-auto rounded-[24px] h-[30px]">
              Done
            </button>

            <div className="flex space-x-4 mt-4 items-center bg-[#07F6F933] px-3 py-4 rounded-[40px] mob:w-full mob:justify-center mb-8">
              <button
                onClick={handlePrevious}
                disabled={currentPage === 1}
                className="px-2 py-1 text-[#fff] text-[22px] bg-[#05141D]  rounded-full "
              >
                &lt;
              </button>
              {/* 
            <span className="text-lg text-gray-700">
              Page {currentPage} of {totalPages}
            </span> */}

              {/* Page selection dropdown */}
              {/* <select
              value={currentPage}
              onChange={handlePageSelect}
              className="px-2 py-1 border rounded-md text-gray-700"
            >
              {Array.from({ length: totalPages }, (_, i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select> */}
              {/* <button
             onClick={() => setCurrentPage(1)}
             disabled={totalPages < 1}
              className={`px-4 py-2  text-[#fff] text-[18px] rounded-full disabled:opacity-50 ${currentPage === 1 ? "bg-[#fff] text-black-900" : " bg-[#05141D]"}`}
            >
              1
            </button>
            <button
              onClick={() => setCurrentPage(2)}
              disabled={totalPages < 2}
              className={`px-4 py-2  text-[#fff] text-[18px] rounded-full disabled:opacity-50 ${currentPage === 2 ? "bg-[#fff] text-black-900" : " bg-[#05141D]"}`}
            >
              2
            </button>
            <button
              onClick={() => setCurrentPage(3)}
              disabled={totalPages < 3}
              className={`px-4 py-2  text-[#fff] text-[18px] rounded-full disabled:opacity-50 ${currentPage === 3 ? "bg-[#fff] text-black-900" : " bg-[#05141D]"}`}
            >
              3
            </button>
            <button
              onClick={() => setCurrentPage(4)}
              disabled={totalPages < 4}
              className={`px-4 py-2  text-[#fff] text-[18px] rounded-full disabled:opacity-50 ${currentPage === 4 ? "bg-[#fff] text-black-900" : " bg-[#05141D]"}`}
            >
              4
            </button>
            <button
              onClick={() => setCurrentPage(5)}
              disabled={totalPages < 5}
              className={`px-4 py-2  text-[#fff] text-[18px] rounded-full disabled:opacity-50 ${currentPage === 5 ? "bg-[#fff] text-black-900" : " bg-[#05141D]"}`}
            >
              5
            </button> */}
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <button
                    key={page}
                    onClick={() => handlePageSelect(page)}
                    className={`px-4 py-2 text-[#fff] text-[18px] rounded-full ${
                      currentPage === page
                        ? "bg-[#fff] text-black-900"
                        : "bg-[#05141D]"
                    }`}
                  >
                    {page}
                  </button>
                )
              )}

              <button
                onClick={handleNext}
                disabled={currentPage === totalPages}
                className="px-2 py-1 text-[22px] text-[#fff] bg-[#05141D] rounded-full "
              >
                &gt;
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Alert;
