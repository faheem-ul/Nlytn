import React from "react";

import { useNavigate } from "react-router-dom";

import { Text } from "components/Text";
import Navbar from "components/Navbar";

const Signin = () => {
  const navigate = useNavigate();
  const handleSignInFrom = () => {
    navigate("/rdscreenhome");
  };
  return (
    <div className="signin-bg bg-[#010A12CC]/100 w-full min-h-[100vh]  h-full relative ">
      <Navbar />
      <div className="absolute inset-0 bg-[#000000] opacity-80 mob:opacity-70"></div>
      <div className="flex justify-center items-center relative mt-[138px]  flex-col px-5 mob:px-12 ">
        <div className="signin-gradient w-full max-w-[562px] py-[58px] px-[60px] mob:px-[40px] mob:py-[38px] border-[0.5px] border-[#FFFFFF]/20 rounded-[20px] mob:mb-[138px]">
          <Text className="text-[#fff] font-bold text-[48px] mob:text-[24px] mob:text-center shadow">
            Sign in
          </Text>
          <Text className="text-[16px] mob:leading-[22px] mob:text-center font-light mt-[10px] mb-10 text-[#ADADAD]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
          </Text>
          <form action="" onSubmit={handleSignInFrom}>
            <input
              className="w-full max-w-[437px] h-[53px] focus:outline-none focus:border-[#fff] text-[#ffffff] font-medium focus:ring-0 email-input-with-image border border-solid border-[#FFFFFF]/20 mb-[24px] bg-transparent px-[18px] py-[12px] text-[15px] "
              type="email"
              required
              placeholder="Enter Your Email"
            />
            <input
              className="w-full max-w-[437px] h-[53px] password-input-with-image border border-solid text-[#ffffff] border-[#FFFFFF]/20 focus:outline-none focus:border-[#fff] font-medium focus:ring-0 mb-[24px] bg-transparent px-[18px] py-[12px] text-[15px] "
              type="password"
              required
              placeholder="Password"
            />
            <button className="w-full max-w-[437px] h-[53px] signin-btn-gradient text-[#fff] font-semibold rounded-[5px] text-[16px]">
              Sign In
            </button>
          </form>
          <Text className="font-[300] text-[16px] mb-4 text-[#fff] mt-[33px] hidden mob:block text-center mob:leading-[22px]">
            Donot have an account?{" "}
            <span
              className="text-[#058FFD] cursor-pointer"
              onClick={() => {
                navigate("/signup");
              }}
            >
              Sign up
            </span>
          </Text>
          <Text className="text-[#058FFD] text-[16px] font-light mob:block hidden text-center">
            Forgot password
          </Text>
        </div>
        <Text className="font-[300] text-[16px] mb-4 text-[#fff] mt-[33px] mob:hidden">
          Donot have an account?{" "}
          <span
            className="text-[#058FFD] cursor-pointer"
            onClick={() => {
              navigate("/signup");
            }}
          >
            Sign up
          </span>
        </Text>
        <Text className="text-[#058FFD] text-[16px] font-light mob:hidden">
          Forgot password
        </Text>
      </div>
    </div>
  );
};

export default Signin;
