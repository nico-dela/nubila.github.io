import React from "react";
import SocialMediaIcon from "./SocialMediaIcon";
import "../styles/SocialMedia.css";

const socialMediaLinks = [
  {
    name: "Instagram",
    url: "https://www.instagram.com/nubila___/",
    className: "instagram-link",
  },
  {
    name: "Spotify",
    url: "https://open.spotify.com/artist/6fWZzJGm1glU7LAu374FSL?si=wsUOfKliQ9613oxyqYk7NA",
    className: "spotify-link",
  },
  {
    name: "Youtube",
    url: "https://www.youtube.com/@nubila5910",
    className: "youtube-link",
  },
];

const SocialMedia = () => {
  return (
    <div id="main-container">
      {socialMediaLinks.map((link, index) => (
        <a
          key={index}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`social-link ${link.className}`}
        >
          <SocialMediaIcon icon={link.name} />
        </a>
      ))}
    </div>
  );
};

export default SocialMedia;
