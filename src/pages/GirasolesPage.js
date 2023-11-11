import React, { useEffect, useState, Suspense } from "react";
import { motion } from "framer-motion";
import girasolesHorizontalImage from "../assets/images/girasoles-midi-horizontal.jpeg";
import girasolesVerticalImage from "../assets/images/girasoles-midi-vertical.jpeg";
import volverImage from "../assets/images/circle-xmark-regular.svg";
import { Puff } from "react-loader-spinner";
import "../styles/LyricsPage.css";
import { Link } from "react-router-dom";

const imageVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
};

const linkVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
};

const GirasolesPage = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const girasolesImage = isMobile
    ? girasolesVerticalImage
    : girasolesHorizontalImage;

  useEffect(() => {
    const imageLoader = new Image();
    imageLoader.src = girasolesImage;
    imageLoader.onload = () => {
      setLoading(false);
    };
  }, [girasolesImage]);

  return (
    <div className="lyrics">
      <Suspense
        fallback={
          <div className="loading-container">
            {loading && (
              <Puff
                height={80}
                width={80}
                radius={1}
                color="#0A4066"
                ariaLabel="puff-loading"
              />
            )}
          </div>
        }
      >
        <motion.div
          className="image-container"
          variants={imageVariants}
          initial="initial"
          animate="animate"
        >
          {!loading && <img src={girasolesImage} alt="Girasoles partitura" />}
        </motion.div>
      </Suspense>
      <motion.div
        className="back-to-home-link"
        variants={linkVariants}
        initial="initial"
        animate="animate"
      >
        <Link to="/">
          <img src={volverImage} alt="Volver" />
        </Link>
      </motion.div>
    </div>
  );
};

export default GirasolesPage;
