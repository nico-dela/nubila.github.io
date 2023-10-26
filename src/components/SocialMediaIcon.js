import React from "react";
import instagramIcon from "../assets/images/instagram.svg";
import spotifyIcon from "../assets/images/spotify.svg";
import youtubeIcon from "../assets/images/youtube.svg";

const iconMap = {
  Instagram: instagramIcon,
  Spotify: spotifyIcon,
  Youtube: youtubeIcon,
};

const SocialMediaIcon = ({ icon }) => {
  const iconPath = iconMap[icon];

  return (
    <img
      src={iconPath}
      alt={icon}
      style={{ width: "35px", height: "35px" }}
    />
  );
};

export default SocialMediaIcon;
