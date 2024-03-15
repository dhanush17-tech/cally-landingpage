"use client";
import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGooglePlay,
  faProductHunt,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  AnimatePresence,
  motion,
  motionValue,
  useInView,
  useMotionValue,
  useTransform,
} from "framer-motion";
import Link from "next/link";
import style from "./hero.module.css";
import Background from "./background";
import { cn } from "@/app/lib/utils";

import { ContainerScroll } from "./mockup";

export default function HeroSection({ signedIn }: { signedIn: boolean }) {
  const scrollY = useMotionValue(0); // MotionValue for scroll position

  // Handle scroll and update scrollY MotionValue
  const handleScroll = () => {
    const position = window.pageYOffset;
    scrollY.set(position);
    if (position <= 20) {
      translateYIcon.set(30);
    }
    setIsInMockUpView(rotateX.get() < 20);
    console.log(isInMockUpView);
    console.log(position); // Check if this logs the scroll position
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const [isInMockUpView, setIsInMockUpView] = useState(false);

  // Define motion values
  // Adjust the following ranges as per your page's scroll length and desired effect
  const rotateX = useTransform(scrollY, [0, 300], [40, 0]);
  const translateY = useTransform(scrollY, [0, 120], ["0%", "0%"]);

  const opacity = useTransform(scrollY, [0, 120], [1, 0]);

  const ref = React.useRef(null);
  const isInView = useInView(ref) as boolean;

  const FADE_DOWN_ANIMATION_VARIANTS = {
    hidden: { opacity: 0, y: -10 },
    show: { opacity: 1, y: 0, transition: { type: "spring" } },
  };
  const [count, setCount] = useState(0);
  const targetCount = 350; // The target number you want to reach
  const translateYIcon = useMotionValue(0);
  const combinedTranslateYIcon = useTransform(
    translateYIcon,
    (value) => value - 30
  );

  useEffect(() => {
    // Set an interval to update the count
    const interval = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount < targetCount) {
          return prevCount + 1; // Increment the count
        } else {
          clearInterval(interval); // Clear the interval when target is reached
          return prevCount;
        }
      });
    }, 4); // Adjust the interval time as needed

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, []);

  return (
    <div className=" overflow-auto  top-0 mx-auto w-full px-6   h-[100vh]  flex flex-col justify-center lg:px-8">
      <div className=" absolute translate-y-1/4 left-0 bottom-0  ">
        <ContainerScroll
          rotate={rotateX}
          translate={translateY}
          isInView={isInMockUpView}
        />
      </div>
      <div className="mx-auto max-w-full z-20   text-center">
        <motion.div
          initial="hidden"
          className="max-w-2xl"
          ref={ref}
          animate={isInView ? "show" : "hidden"}
          viewport={{ once: true }}
          style={{ opacity: opacity }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          <motion.h1
            variants={FADE_DOWN_ANIMATION_VARIANTS}
            className="font-headingAlt font-bold tracking-tight"
            style={{
              lineHeight: "1.2",
              fontSize: "clamp(2.5rem, 5vw + 1rem, 4rem)", // Adjust the values according to your design
            }}
          >
            <span>When </span>{" "}
            <span className={cn(style.magicText, "inline") + ""}>AI </span>
            <span>meets your </span>
            <span className={cn(style.magicText, "inline")}>Calendar</span>
          </motion.h1>

          <motion.p
            variants={FADE_DOWN_ANIMATION_VARIANTS}
            style={{
              lineHeight: "1.2",
              fontSize: "clamp(0.8rem, 2.8vw, 1.6rem)", // Adjust the values according to your design
            }}
            className="leading-8 mt-5   "
          >
            AI to manage your day better and{" "}
            <span className="inline-flex relative text-[#319cff] before:absolute before:inset-0 before:bg-blue-200 dark:before:bg-blue-500 before:opacity-10 before:-z-10 before:-rotate-1 before:translate-y-1/4">
              10x your productivity
            </span>
          </motion.p>

          {/* <motion.p
            variants={FADE_DOWN_ANIMATION_VARIANTS}
            style={{
              lineHeight: "1.2",
              fontSize: "clamp(1.5rem, 2.5vw, 2rem)", // Adjust the values according to your design
            }}
            className="leading-8 mt-8  text-blue-300 font-bold"
          >
            {count}+ Downloads
          </motion.p> */}

          <motion.div
            variants={FADE_DOWN_ANIMATION_VARIANTS}
            style={{ fontSize: "clamp(0.8rem, 2.5vw, 1.2rem)" }}
            className="mt-10 flex items-center justify-center gap-x-10 "
          >
            {/* <Link
              href={
                "https://play.google.com/store/apps/details?id=com.priceTracker.shopwise&pcampaignid=web_share"
              }
            >
              {" "}
              <div className="btn bg-white font-bold text-blue-500 space-x-5">
                <FontAwesomeIcon className="mr-2" icon={faGooglePlay} />
                Download Now
              </div>
            </Link>

            <Link
              href="https://www.producthunt.com/products/shopwise"
              style={{ fontSize: "clamp(0.8rem, 2.5vw, 1.2rem)" }}
              className="bg-transparent flex justify-center align-center gap-2 text-xl"
            >
              Upvote on
              <FontAwesomeIcon className="text-xl mt-1 " icon={faProductHunt} />
            </Link> */}
          </motion.div>
        </motion.div>
      </div>
      {/* <motion.div style={{ translateY: combinedTranslateYIcon }}>
        <Link href={"https://twitter.com/geeky_dan"}>
          <FontAwesomeIcon
            className="text-4xl     text-center self-center w-full mt-8  ]  "
            icon={faXTwitter}
          />
        </Link>
      </motion.div> */}
      <div
        style={{ backgroundImage: "url('https://yashverma.me/grid.svg')" }}
        className="absolute top-0 left-0 z-[-2] h-screen w-full opacity-50 "
      >
        <div className="absolute top-0 left-0  h-screen w-full bg-radial-gradient"></div>
      </div>

      <div className="mt-16 flow-root sm:mt-24">
        <motion.div
          className="rounded-md"
          initial={{ y: 100, opacity: 0 }} // Image starts from 100px below and fully transparent
          animate={{ y: 0, opacity: 1 }} // Image ends at its original position and fully opaque
          transition={{ type: "spring", stiffness: 50, damping: 20 }} // transition specifications
        >
          <AnimatePresence mode="wait">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            ></motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
