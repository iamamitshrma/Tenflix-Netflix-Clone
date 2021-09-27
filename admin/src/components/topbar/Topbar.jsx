import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";

export default function Topbar() {

  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Tenflix Admin Control</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img  src="https://avatars.githubusercontent.com/u/32084343?s=400&u=67c9706da9d4ae25e3c71aab92ae9dba0f1a313f&v=4" alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  );
}
