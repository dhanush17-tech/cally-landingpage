"use client";
import Image from "next/image";
import HeroSection from "./components/section/herosection";
import Background from "./components/section/herosection/background";
import { ContainerScroll } from "./components/section/herosection/mockup";
import { useMotionValue, useTransform } from "framer-motion";
import { useEffect } from "react";
import { Analytics } from "@vercel/analytics/react";

export default function Home() {
  const scrollY = useMotionValue(0); // MotionValue for scroll position

  // Handle scroll and update scrollY MotionValue
  const handleScroll = () => {
    const position = window.pageYOffset;
    scrollY.set(position);
    console.log(position); // Check if this logs the scroll position
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Define motion values
  // Adjust the following ranges as per your page's scroll length and desired effect
  const rotateX = useTransform(scrollY, [0, 120], [40, 0]);
  const translateY = useTransform(scrollY, [0, 200], ["40%", "0%"]);

  return (
    <>
      <main className="flex w-screen overflow-auto flex-col items-center justify-center bg overflow-x-hidden bg-radial-gradient ">
        {" "}
        <Background /> <Background />
        <HeroSection signedIn={false} />
      </main>
      <Analytics />
    </>
  );
}
