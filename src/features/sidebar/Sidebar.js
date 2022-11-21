import React from "react";
import "./sidebar.scss";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../../firebase";
import Addtask from "../../SaveTask";
import {
  selectActiveAnalysisIndex,
  changeActiveAnalysisIndex,
  selectAnalyses,
} from "../table/tableSlice";

const Sidebar = ({ user }) => {
  const dispatch = useDispatch();
  const analyses = useSelector(selectAnalyses);
  const activeAnalysisIndex = useSelector(selectActiveAnalysisIndex);

  function signOut() {
    console.log(" I AM CALLING THE SIGNOUT");
    auth.signOut();
  }

  return (
    <div
      class="main d-flex flex-column flex-shrink-0 p-3 text-dark "
      style={{ width: "280px", height: "100%" }}
    >
      <a
        href="/"
        class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"
      >
        <svg class="bi me-2" width="40" height="32"></svg>
        <span class="fs-4">Overview of your hypothesis</span>
      </a>
      <hr />
      <ul class="nav nav-pills flex-column mb-auto">
        {analyses.map((analysis, index) => (
          <li
            onClick={() => {
              dispatch(changeActiveAnalysisIndex({ index: index }));
            }}
            class="nav-item"
          >
            <a
              href="#"
              className={`nav-link ${
                activeAnalysisIndex === index ? "active" : "text-dark"
              }`}
              aria-current="page"
            >
              <svg class="bi me-2" width="16" height="16"></svg>
              {analysis.analysisName}
            </a>
          </li>
        ))}
      </ul>

      <span>this is where the data should be stored</span>

      <hr />
      <div class="dropdown">
        <a
          href="#"
          class="d-flex align-items-center text-dark text-decoration-none dropdown-toggle"
          id="dropdownUser1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            src={user.userPic}
            alt="user"
            class="rounded-circle me-2"
            width="32"
            height="32"
          />
          <strong>{user.displayName || user.email}</strong>
        </a>
        <ul
          class="dropdown-menu dropdown-menu-dark text-small shadow"
          aria-labelledby="dropdownUser1"
        >
          <li>
            <a class="dropdown-item" href="#">
              New project...
            </a>
          </li>
          <li>
            <a class="dropdown-item" href="#">
              Settings
            </a>
          </li>
          <li>
            <a class="dropdown-item" href="#">
              Profile
            </a>
          </li>
          <li>
            <hr class="dropdown-divider" />
          </li>
          <li>
            <a class="dropdown-item" onClick={signOut} href="#">
              Sign out
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;