import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { CSSTransition } from "react-transition-group";

import Sidebar1 from "../../components/Sidebar1";
import Workspace from "components/Workspace";
import SharedThreads from "components/SharedThreads";
import DataIngestion from "components/DataIngestion";
import Alert from "components/Alert";
import HelpCenter from "components/HelpCenter";
import ResponsiveSidebar from "components/ResponsiveSidebar";
import MyModal from "components/ui/Modal";

import { Text } from "components";
import useDisclosure from "components/hooks/useDisclosure";

type SidebarComponent =
  | "Workspace"
  | "SharedThreads"
  | "DATA INGESTION"
  | "settings"
  | "alert"
  | "helpcenter"
  | null;

export default function RdScreenHomePage() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isDivVisible, setIsDivVisible] = useState(false);

  const [selectedComponent, setSelectedComponent] = useState<SidebarComponent>(
    isMobile ? null : "Workspace"
  );
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [lastSelectedComponent, setLastSelectedComponent] =
    useState<SidebarComponent>(null);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const toggleDivVisibility = () => {
    setIsDivVisible((prev) => !prev);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMenuItemClick = (item: SidebarComponent) => {
    setLastSelectedComponent(selectedComponent);
    setSelectedComponent(item);
  };

  return (
    <>
      <Helmet>
        <title>Rd screen home page</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>

      {isDivVisible && (
        <div className="absolute top-[230px] left-[210px] z-20 bg-[#fff] py-2 px-2 w-[60px] rounded shadow-lg">
          <Text
            className="text-[8px] font-medium text-[#000] cursor-pointer"
            onClick={onOpen}
          >
            Share
          </Text>
          <MyModal title="Share Thread" isOpen={isOpen} closeModal={onClose}>
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

            <div className="flex justify-between items-center  ">
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
          <hr className="my-1" />
          <Text className="text-[8px] font-medium text-[#000] cursor-pointer">
            Delete
          </Text>
        </div>
      )}

      <div
        className="flex w-full mob:flex-col items-start bg-[#000]"
        id="RdScreenHome"
      >
        {isMobile ? (
          <ResponsiveSidebar onMenuItemClick={handleMenuItemClick} />
        ) : (
          <Sidebar1
            Allresources={() => handleMenuItemClick("DATA INGESTION")}
            Workspace={() => handleMenuItemClick("Workspace")}
            SharedThreads={() => handleMenuItemClick("SharedThreads")}
            Alert={() => handleMenuItemClick("alert")}
            HelpCenter={() => handleMenuItemClick("helpcenter")}
            selectedComponent={selectedComponent}
            OpenShare={toggleDivVisibility}
          />
        )}

        {/* Workspace component */}
        {!isTransitioning && selectedComponent === "Workspace" && <Workspace />}

        {/* {selectedComponent === "Workspace" && <Workspace />} */}

        {/* SharedThreads component */}
        {selectedComponent === "SharedThreads" && (
          <SharedThreads
            openWorkspace={() => handleMenuItemClick("Workspace")}
          />
        )}
        {/* DataIngestion component */}
        {selectedComponent === "DATA INGESTION" && (
          <DataIngestion
            openWorkspace={() => handleMenuItemClick("Workspace")}
          />
        )}

        {/* Alert component */}
        {selectedComponent === "alert" && !isTransitioning && (
          <Alert openWorkspace={() => handleMenuItemClick("Workspace")} />
        )}

        {/* HelpCenter component */}
        <CSSTransition
          in={selectedComponent === "helpcenter"}
          timeout={600}
          classNames="flip"
          unmountOnExit
          onEnter={() => setIsTransitioning(true)}
          onExited={() => {
            setIsTransitioning(false);
            if (
              selectedComponent === "helpcenter" &&
              selectedComponent === lastSelectedComponent
            ) {
              setSelectedComponent("Workspace");
            }
          }}
        >
          <HelpCenter openWorkspace={() => setSelectedComponent("Workspace")} />
        </CSSTransition>
      </div>
    </>
  );
}
