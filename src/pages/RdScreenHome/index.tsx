import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";

import Sidebar1 from "../../components/Sidebar1";
import AllResources from "components/AllResources";
import Workspace from "components/Workspace";
import SharedThreads from "components/SharedThreads";
import DataIngestion from "components/DataIngestion";
import Alert from "components/Alert";
import HelpCenter from "components/HelpCenter";
import ResponsiveSidebar from "components/ResponsiveSidebar";

export default function RdScreenHomePage() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [selectedComponent, setSelectedComponent] = useState<string | null>(isMobile ? null : "Workspace");

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMenuItemClick = (item: string) => {
    setSelectedComponent(item);
  };

  return (
    <>
      <Helmet>
        <title>Rd screen home page</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>

      <div className="flex w-full mob:flex-col items-start bg-[#000]" id="RdScreenHome">
        {isMobile ? (
          <ResponsiveSidebar onMenuItemClick={handleMenuItemClick} />
        ) : (
          <Sidebar1
            Allresources={() => handleMenuItemClick("DATA INGESTION")}
            Workspace={() => handleMenuItemClick("Workspace")}
            SharedThreads={() => handleMenuItemClick("SharedThreads")}
            Alert={() => handleMenuItemClick("Alert")}
            HelpCenter={() => handleMenuItemClick("HelpCenter")}
          />
        )}

        {/* Render selected component based on selectedComponent */}
        {selectedComponent === "Workspace" && <Workspace />}
        {selectedComponent === "AllResources" && <AllResources />}
        {selectedComponent === "SharedThreads" && <SharedThreads openWorkspace={() => handleMenuItemClick("Workspace")} />}
        {selectedComponent === "Alert" && <Alert openWorkspace={() => handleMenuItemClick("Workspace")} />}
        {selectedComponent === "DATA INGESTION" && <DataIngestion openWorkspace={() => handleMenuItemClick("Workspace")} />}
        {selectedComponent === "HelpCenter" && <HelpCenter openWorkspace={() => handleMenuItemClick("Workspace")} />}
      </div>
    </>
  );
}
