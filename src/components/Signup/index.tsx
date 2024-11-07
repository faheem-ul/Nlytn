import React from "react";
import { useNavigate } from "react-router-dom";

import { Text } from "components/Text";
import Navbar from "components/Navbar";

const Signup = () => {
  const navigate = useNavigate();
  const handleSignupFrom = ()=>{
    
    navigate('/rdscreenhome'); 
  }
  return (
    <div className="signin-bg bg-[#010A12CC]/100 w-full h-full min-h-[100vh]  relative">
      <Navbar />
      <div className="absolute inset-0 bg-[#000000] opacity-80"></div>
      <div className="flex justify-center items-center relative mt-[138px] px-5 flex-col">
        
        <div className="signin-gradient w-full max-w-[562px] py-[58px] px-[60px] border-[0.5px] border-[#fff]/20 rounded-[20px]">
          <Text className="text-[#fff] font-bold text-[48px]">Sign Up</Text>
          <Text className="text-[16px] font-light mt-[10px] mb-10 text-[#ADADAD]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
          </Text>
          <form action="" onSubmit={handleSignupFrom}>
          {/* <input
            className="w-full max-w-[437px] h-[53px] focus:outline-none focus:border-[#fff] font-medium focus:ring-0 email-input-with-image border border-solid border-[#fff]/20 text-[#fff] mb-[24px] bg-transparent px-[18px] py-[12px] text-[15px] text-gray-800"
            type="text"
            required
            placeholder="Enter Your First Name"
          />
            <input
            className="w-full max-w-[437px] h-[53px] focus:outline-none focus:border-[#fff] font-medium focus:ring-0 email-input-with-image border border-solid border-[#fff]/20 text-[#fff] mb-[24px] bg-transparent px-[18px] py-[12px] text-[15px] text-gray-800"
            type="text"
            required
            placeholder="Enter Your Last Name"
          /> */}
          <input
            className="w-full max-w-[437px] h-[53px] focus:outline-none focus:border-[#fff] font-medium focus:ring-0 email-input-with-image border border-solid border-[#fff]/20 text-[#fff] mb-[24px] bg-transparent px-[18px] py-[12px] text-[15px] "
            type="email"
            required
            placeholder="Enter Your Email"
          />
          <input
            className="w-full max-w-[437px] h-[53px] password-input-with-image border border-solid border-[#fff]/20 text-[#fff] focus:outline-none focus:border-[#fff] font-medium focus:ring-0 mb-[24px] bg-transparent px-[18px] py-[12px] text-[15px] "
            type="password"
            required
            placeholder="Password"
          />
          <button className="w-full max-w-[437px] h-[53px] signin-btn-gradient text-[#fff] font-semibold rounded-[5px] text-[16px]" type="submit">
            Sign Up
          </button>
          </form>
        </div>
        <Text className="font-[300] text-[16px] mb-4 text-[#fff] mt-[33px] ">Already have an account? <span className="text-[#058FFD] cursor-pointer" onClick={()=>{
          navigate('/');
        }}>Sign In</span></Text>

      </div>
    </div>
  );
};

export default Signup;
