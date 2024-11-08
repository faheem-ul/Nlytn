import React, { useState } from "react";
import { Text } from "components/Text";

type Badge = {
    color: string;
    text: string;
  };
type Card = {
    id: number;
    isChecked: boolean;
    badges: Badge[];
    question: string;
    username: string;
    date: string;
   
  };

  
  const initialCards: Card[] = [
    {
      id: 1,
      isChecked: false,
      badges: [
        { color: "#E9DD42", text: "Notification" },
        { color: "#E9DD42", text: "Urgent" },
        { color: "#E9DD42", text: "Notification" },
      ],
      question: "What does the Conti group org structure look like?",
      username: "User123123776",
      date: "05 Sep 2024",

    },
    {
      id: 2,
      isChecked: false,
       badges: [
        { color: "#E9DD42", text: "Notification" },
        { color: "#E9DD42", text: "Urgent" },
      ],
      question: "Can I get the latest sales report?",
      username: "User567890123",
      date: "06 Sep 2024",

    },
    {
      id: 3,
      isChecked: false,
       badges: [
        { color: "#E9DD42", text: "Notification" },
        { color: "#E9DD42", text: "Urgent" },
      ],
      question: "Is the server maintenance scheduled?",
      username: "User789012345",
      date: "07 Sep 2024",

    },
    {
      id: 4,
      isChecked: false,
       badges: [
        { color: "#E9DD42", text: "Notification" },
        { color: "#E9DD42", text: "Urgent" },
      ],
      question: "What are the project deadlines?",
      username: "User345678901",
      date: "08 Sep 2024",

    },
    {
      id: 5,
      isChecked: false,
       badges: [
        { color: "#E9DD42", text: "Notification" },
        { color: "#E9DD42", text: "Urgent" },
      ],
      question: "Who is the contact for HR inquiries?",
      username: "User234567890",
      date: "09 Sep 2024",

    },
    {
      id: 6,
      isChecked: false,
       badges: [
        { color: "#E9DD42", text: "Notification" },
        { color: "#E9DD42", text: "Urgent" },
      ],
      question: "How do I access the analytics dashboard?",
      username: "User456789012",
      date: "10 Sep 2024",

    },
    {
      id: 7,
      isChecked: false,
       badges: [
        { color: "#E9DD42", text: "Notification" },
        { color: "#E9DD42", text: "Urgent" },
      ],
      question: "How do I access the analytics dashboard?",
      username: "User456789012",
      date: "10 Sep 2024",

    },
  ];
  
interface props {
  id?: string;
  openWorkspace : ()=> void
}

const DataIngestion: React.FC<props> = ({ id, openWorkspace }) => {
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
    <div className="min-h-screen bg-[#05141D] w-full py-3 px-8" id={id}>
      <div className="flex justify-end">
        <img
          className="w-[18.67px] h-[19.04px] cursor-pointer"
          src="images/cross.png"
          alt=""
          onClick={openWorkspace}
        />
      </div>
      <Text className="text-[32px] font-semibold text-[#fff] leading-[38.73px] mt-2">
      Data Ingestion
      </Text>
      {showUploadDiv && (
        <div className="w-full max-w-[165px] bg-[#fff] px-[10px] mr-14 rounded-[8px] py-2 ml-auto ">
          <Text className="font-black font-inter text-[10px]  text-[#000] cursor-pointer">
            Upload from your computer
          </Text>
          <hr className="my-[10px]" />
          <Text className="font-medium font-inter text-[10px] text-[#000] cursor-pointer">
            Connect to Google Drive
          </Text>
        </div>
      )}
      <div className="relative">
        <input
          className={`h-[40px] relative w-full input-with-image text-[#ADADAD] text-[16px] rounded-[4px] px-5 border border-[#ADADAD] bg-transparent ${
            showUploadDiv ? "mt-0" : "mt-8"
          }`}
          type="text"
          placeholder="keyword filter"
        />
        <img
          className={`absolute top-0 cursor-pointer right-0 mr-[43px] ${
            showUploadDiv ? "mt-2" : "mt-10"
          }`}
          onClick={handleShowUploadDiv}
          src="images/upload.svg"
          alt="cahtimg"
        />
      </div>

      <div className="flex mt-4 justify-between items-center mb-[30px]">
        <img
          className="w-[32px] h-[32px]"
          src="images/octicon_filter-16.png"
          alt=""
        />

        <div className=" pr-[40px] ">
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
          <div className="flex flex-wrap gap-[25px] mt-2">
           

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
              <div className="flex flex-wrap gap-3 my-4">
            {card.badges.map((badge, index) => (
              <div
                key={index}
                className="border border-[#DBE1F5] rounded-[50px] px-3 py-1 flex items-center gap-2"
              >
                <div
                  className="w-[7px] h-[7px] rounded-full"
                  style={{ backgroundColor: badge.color }}
                ></div>
                <span className="text-[10px] text-[#DBE1F5]">{badge.text}</span>
              </div>
            ))}
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
           
          </div>
        </div>
      ))}
          </div>

          {/* Pagination controls */}
          <div className="flex justify-between items-center mt-8 w-full">
            <button className="text-[#ffff] border border-white-a700 bg-[#07F6F933] font-medium px-4 py-1 mr-auto rounded-[24px] h-[30px]">
              Done
            </button>

            <div className="flex space-x-4 mt-4 items-center bg-[#07F6F933] px-3 py-4 rounded-[40px]">
              <button
                onClick={handlePrevious}
                disabled={currentPage === 1}
                className="px-2 py-1 text-[#fff] text-[22px] bg-[#05141D] rounded-full "
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

export default DataIngestion;
