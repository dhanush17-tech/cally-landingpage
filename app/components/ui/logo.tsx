"use client";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="relative" aria-label="Cruip">
      <img
        src="/logo.png"
        alt="Cally ai calendar"
        className="w-[40px] h-[40px] rounded-full"
      />
    </Link>
  );
}
