import React, { useState } from "react";
import WikiPicture from "./WikiPictureOfOrganization";

interface organisationDataFetchedFromWikipediaProps {
  currentOrganizationWikiLink: string;
  currentOrganization: string;
}

//this component fetches data about the organisation from wikipedia asynchronously and showcases it
const OrganisationDataFetchedFromWikipedia = (
  props: organisationDataFetchedFromWikipediaProps
) => {


  const [wikipediaFetchedText, setwikipediaFetchedText] = useState("");

  const spinningWheelIcon = (
    <svg
      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      ></circle>
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      ></path>
    </svg>
  );


  //getting only real page name from specific wikipedia url
  let currentOrganizationWikiPageName =
    props.currentOrganizationWikiLink.split("/")[
    props.currentOrganizationWikiLink.split("/").length - 1
    ];

  //link to fetch content of wikipedia
  let currentOrganizationWikiLinkRefactored =
    "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&origin=*&titles=" +
    currentOrganizationWikiPageName;


  //fetching from wikipedia
  fetch(currentOrganizationWikiLinkRefactored)
    .then((res) => res.json())
    .then((json) => json.query.pages[Object.keys(json.query.pages)[0]].extract)
    .then((text) => {
      setwikipediaFetchedText(text);
    });

  return (
    <div>
      {/* Fetching the title picture of wikipedia page */}
      <WikiPicture
        currentOrganizationWikiPageName={currentOrganizationWikiPageName}
      ></WikiPicture>
      <h1 className="text-2xl text-slate-200 uppercase  m-2">
        About {props.currentOrganization}
      </h1>
      <p className=" text-gray-300 bg-gradient-to-b flex justify-center  from-slate-900 to-slate-800  rounded-sm p-7">
        {wikipediaFetchedText !== "" ? wikipediaFetchedText : spinningWheelIcon}
      </p>
    </div>
  );
};

export default OrganisationDataFetchedFromWikipedia;
