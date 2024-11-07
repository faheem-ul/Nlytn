import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Img, Text, Heading } from "../../components";

import Sidebar1 from "../../components/Sidebar1";
import AllResources from "components/AllResources";
import Worksapce from "components/Workspace";
import SharedThreads from "components/SharedThreads";

export default function RdScreenHomePage() {
  const [RdScreen, setRdScreen] = useState(false);
  const [ShowAllResources, setShowAllResources] = useState(false);
  const [ShowWorkspace, setShowWorkspace] = useState(true);
  const [ShowThreads, setShowThreads] = useState(false)


  const handleAllResouces = () => {
    // console.log("something")
    setShowAllResources(true);
    setRdScreen(false);
    setShowWorkspace(false)
  }
  const handleShowRdScreen = () =>{
    console.log("antghing")
    setShowAllResources(false);
    setRdScreen(true);
    setShowWorkspace(false)
    setShowThreads(false)
  }

  const handleWorkspace = () => {
    setShowWorkspace(true);
    setRdScreen(false);
    setShowAllResources(false)
    setShowThreads(false)
  }

  const handleSharedThreads = ()=>{
    // console.log("something")
    setShowAllResources(false);
    setRdScreen(false);
    setShowWorkspace(false)
    setShowThreads(true)
    // navigate to shared threads page
  }


  return (
    <>
      <Helmet>
        <title>Rd screen home page</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>
      <div className="flex w-full items-start bg-black-900" id="RdScreenHome">
        <Sidebar1 Allresources = {handleAllResouces} Workspace={handleWorkspace} SharedThreads={handleSharedThreads} />
        {
          ShowWorkspace && (
            <Worksapce />
          )
        }
        {
          ShowAllResources && (
            <>
            <AllResources id="#allResources" showRdScreen={handleShowRdScreen} />
            </>
          )
        }

        {
          ShowThreads && (
           <>
           <SharedThreads/>
           </>
          )
        }

        
      </div>
    </>
  );
}
