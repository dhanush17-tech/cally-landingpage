"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

export const ContainerScroll = ({
  rotate,
  translate,
  isInView,
}: {
  rotate: any;
  translate: any;
  isInView: any;
}) => {
  const [canAutoplay, setCanAutoplay] = useState(false);

  useEffect(() => {
    // On iOS, video needs to be muted to autoplay and should allow inline playback
    const video = document.createElement("video");
    video.src = "./mobile_promo.mp4";
    video.muted = true; // Ensure the video is muted
    video.setAttribute("playsinline", ""); // Important for iOS to allow inline playback

    video
      .play()
      .then(() => setCanAutoplay(true))
      .catch(() => setCanAutoplay(false));

    return () => {
      video.pause();
      video.src = "";
    };
  }, []);

  return (
    <div
      className="py-40 w-screen h-screen top-0"
      style={{ perspective: "1000px" }}
    >
      <Card
        rotate={rotate}
        translate={translate}
        isInView={isInView}
        canAutoplay={canAutoplay}
      />
      {/* Additional content here if needed */}
    </div>
  );
};

export const Card = ({
  rotate,
  translate,
  isInView,
  canAutoplay,
}: {
  rotate: any;
  translate: any;
  isInView: any;
  canAutoplay: any;
}) => {
  const [isButtonVisible, setIsButtonVisible] = useState(true);

  // Function to manually play the video
  const handlePlayVideo = () => {
    const videoElement = document.querySelector(
      ".video-element"
    ) as HTMLVideoElement;
    if (videoElement) {
      videoElement.play();
      setIsButtonVisible(false);
    }
  };

  return (
    <motion.div
      style={{ rotateX: rotate, translateY: translate }}
      className="mt-20 transform z-[100] mx-auto border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] aspect-ratio w-full max-w-[300px]"
    >
      {/* ... existing divs ... */}
      <div className="rounded-[2rem] overflow-hidden bg-white aspect-ratio w-full">
        {isInView ? (
          canAutoplay ? (
            <video
              src="./mobile_promo.mp4"
              autoPlay
              className="block w-full h-auto video-element"
            ></video>
          ) : (
            <div className="relative">
              <video
                src="./video.mp4"
                autoPlay
                className="block w-full h-auto video-element"
              ></video>
              {isButtonVisible ? (
                <button
                  onClick={() => {
                    handlePlayVideo();
                    setIsButtonVisible(false);
                  }}
                  className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full bg-gray-500/50 p-2 flex items-center justify-center"
                >
                  <FontAwesomeIcon
                    className="text-xl text-white"
                    icon={faPlay}
                  />
                </button>
              ) : null}
            </div>
          )
        ) : (
          <Image
            src="/cally_screenshot.png"
            width={300}
            height={500}
            className="block w-full h-auto"
            alt="cally ai calendar"
          />
        )}
      </div>
    </motion.div>
  );
};
