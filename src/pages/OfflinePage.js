import React from "react";
import bannerImage from "../assets/images/banner.jpeg";
import "../styles/OfflinePage.css";

const OfflinePage = () => {
  return (
    <div className="overlay">
      <div className="coming-soon-container">
        <img
          src={bannerImage}
          alt="Banner oceanica"
        />
      </div>
    </div>
  );
};

export default OfflinePage;
