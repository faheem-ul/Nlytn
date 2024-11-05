import React, { useState } from "react";
import { Text } from "components/Text";

const AllResources = () => {

    const images = [
        'images/Mask.png',
        'images/Mask.png',
        'images/Mask.png',
        'images/Mask.png',
        'images/Mask.png',
        'images/Mask.png',
        'images/Mask.png',
        'images/Mask.png',
        'images/Mask2.png',
      ]; // Array of image URLs
      const imagesPerPage = 3;
      const [currentPage, setCurrentPage] = useState(1);
    
      const totalPages = Math.ceil(images.length / imagesPerPage);
    
      const currentImages = images.slice(
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
    
      const handlePageSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setCurrentPage(Number(event.target.value));
      };
  return (
    <div className="min-h-screen bg-[#05141D] w-full py-3 px-5 hidden">
      <div className="flex justify-end">
        <img
          className="w-[18.67px] h-[19.04px]"
          src="images/cross.png"
          alt=""
        />
      </div>
      <Text className="text-[32px] font-semibold text-[#f8f8f8] leading-[38.73px] mt-2">
        All Sources (5 Documents)
      </Text>

      <input
        className="h-[40px] w-full mt-6 text-[#ADADAD] text-[16px] rounded-[4px] px-5 border border-[#ADADAD] bg-transparent"
        type="text"
        placeholder="keyword filter"
      />

      <div className="flex mt-4 justify-between items-center">
        <img
          className="w-[32px] h-[32px]"
          src="images/octicon_filter-16.png"
          alt=""
        />

        <div className="">
          <Text className="text-[9x] leading-[13.5px] mb-2">Select All</Text>
          <Text>Unselect All</Text>
        </div>
      </div>

      <div className="flex flex-col items-center">
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

      {/* Pagination controls */}
      <div className="flex flex-col items-center">
      <div className="flex flex-wrap gap-[25px] mt-2">
        {currentImages.map((image, index) => (
          <div key={index} className="mb-10">
            <img
              className="w-[358.8px] h-auto max-h-[300px]"
              src={image}
              alt={`Image ${index + 1}`}
            />
          </div>
        ))}
      </div>

      {/* Pagination controls */}
      <div className="flex space-x-4 mt-4 items-center">
        <button
          onClick={handlePrevious}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-300 text-gray-700 rounded disabled:opacity-50"
        >
          Previous
        </button>

        <span className="text-lg text-gray-700">
          Page {currentPage} of {totalPages}
        </span>

        {/* Page selection dropdown */}
        <select
          value={currentPage}
          onChange={handlePageSelect}
          className="px-2 py-1 border rounded-md text-gray-700"
        >
          {Array.from({ length: totalPages }, (_, i) => (
            <option key={i + 1} value={i + 1}>
              {i + 1}
            </option>
          ))}
        </select>

        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-gray-300 text-gray-700 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
    </div>

    </div>
  );
};

export default AllResources;
