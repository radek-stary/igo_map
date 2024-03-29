import React, { useState } from "react";
import "./App.css";
import SearchBar from "./components/searchbar/SearchBar";
import Map from "./components/map/Map";
import "@material-tailwind/react/tailwind.css";
import IntroductionModal from "./components/modals/IntroductionModal";
import OrganizationInfo from "./components/organizationinfo/OrganizationInfo";
import EditModal from "./components/modals/EditModal";
import { InformationCircleIcon } from "@heroicons/react/outline";

function App() {
  //name of intergovernmental organisation the user selected to show
  const [curentOrg, setcurentOrg] = useState("");

  function changeCurrentOrg(org: string) {
    setcurentOrg(org);
  }

  //introduction modal with text about the applicaiton
  const [introductionModalOpen, setintroductionModalOpen] = useState(false);

  function triggerIntroductionModal() {
    setintroductionModalOpen(!introductionModalOpen);
  }

  return (
    <div className="App">
      <div className=" flex flex-row ">
        <SearchBar
          triggerIntroductionModal={triggerIntroductionModal}
          changeCurrentOrg={changeCurrentOrg}
        ></SearchBar>
        <div className=" w-full">
          <Map currentOrganization={curentOrg}></Map>
          {curentOrg ? (
            <OrganizationInfo
              currentOrganization={curentOrg}
            ></OrganizationInfo>
          ) : (
            <></>
          )}
        </div>
        <div
          className={" flex flex-row  h-fit w-fit fixed right-0 m-7 bottom-5 items-start"}
        >
          <div
            onClick={triggerIntroductionModal}
            className=" m-2 w-fit p-4 h-fit bg-slate-100 bg-opacity-80 hover:bg-slate-600 hover:cursor-pointer rounded-full"
          >
            <InformationCircleIcon className=" scale-125 h-5 w-5" />
          </div>
          <IntroductionModal
            triggerIntroductionModal={triggerIntroductionModal}
            open={introductionModalOpen}
          ></IntroductionModal>
          {curentOrg ? (
            <EditModal key={String(curentOrg)} currentOrganization={curentOrg}></EditModal>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
