import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Img, Text, Heading } from "../../components";

import Sidebar1 from "../../components/Sidebar1";
import AllResources from "components/AllResources";
import Worksapce from "components/Workspace";
import SharedThreads from "components/SharedThreads";
import DataIngestion from "components/DataIngestion";
import Alert from "components/Alert";
import HelpCenter from "components/HelpCenter";

export default function RdScreenHomePage() {
  // const [RdScreen, setRdScreen] = useState(false);
  const [ShowAllResources, setShowAllResources] = useState(false);
  const [ShowWorkspace, setShowWorkspace] = useState(true);
  const [ShowThreads, setShowThreads] = useState(false)
  const [ShowDataIngestion, setShowDataIngestion] = useState(false)
  const [ShowAlert, setShowAlert] = useState(false)
  const [ShowHelpCenter, setShowHelpCenter] = useState(false)


  const handleAllResouces = () => {
    // console.log("something")
    setShowAllResources(false);
    // setRdScreen(false);
    setShowWorkspace(false)
    setShowThreads(false)
    setShowDataIngestion(true)
    setShowAlert(false)
    setShowHelpCenter(false)
    
  }
  const handleShowRdScreen = () =>{
    // console.log("antghing")
    setShowAllResources(false);
    // setRdScreen(true);
    setShowWorkspace(false)
    setShowThreads(false)
    setShowDataIngestion(false)
    setShowAlert(false)
    setShowHelpCenter(false)
  }

  const handleWorkspace = () => {
    setShowWorkspace(true);
    // setRdScreen(false);
    setShowAllResources(false)
    setShowThreads(false)
    setShowDataIngestion(false)
    setShowAlert(false)
    setShowHelpCenter(false)
  }

  const handleSharedThreads = ()=>{
    // console.log("something")
    setShowAllResources(false);
    // setRdScreen(false);
    setShowWorkspace(false)
    setShowThreads(true)
    setShowDataIngestion(false)
    setShowAlert(false)
    setShowHelpCenter(false)
    // navigate to shared threads page
  }

  const handleAlert = ()=>{
    // console.log("something")
    setShowAllResources(false);
    // setRdScreen(false);
    setShowWorkspace(false)
    setShowThreads(false)
    setShowDataIngestion(false)
    setShowAlert(true)
    setShowHelpCenter(false)
    // navigate to alert page
  }

  const handleHelpCenter = ()=>{
    // console.log("something")
    setShowAllResources(false);
    // setRdScreen(false);
    setShowWorkspace(false)
    setShowThreads(false)
    setShowDataIngestion(false)
    setShowAlert(false)
    setShowHelpCenter(true)
    // navigate to help center page
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
        <Sidebar1 Allresources = {handleAllResouces} Workspace={handleWorkspace} SharedThreads={handleSharedThreads} Alert={handleAlert} HelpCenter={handleHelpCenter}/>
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
           <SharedThreads openWorkspace={handleWorkspace}/>
           </>
          )
        }
        {
          ShowAlert && (
           <>
           <Alert openWorkspace={handleWorkspace}/>
           </>
          )
        }
        {
          ShowDataIngestion && (
           <>
           <DataIngestion openWorkspace={handleWorkspace}/>
           </>
          )
        }

        {
          ShowHelpCenter && (
            <>
            <HelpCenter openWorkspace={handleWorkspace}/>
            </>
          )
        }

        
      </div>
    </>
  );
}
