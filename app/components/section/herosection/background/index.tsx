"use client";

import { cn } from "@/app/lib/utils";
import styles from "./background.module.css";

export default function Background() {
  return (
    <div className={`${styles.main}  `}>
      <div
        className={cn(
          " mask-stars-horizon mt-[-2000px] relative my-[-12.8rem] h-[60rem] overflow-hidden",
          "inset-0  before:absolute before:opacity-40"

          // "after:absolute after:top-1/2 after:-left-1/2 after:aspect-[1/0.7] after:w-[200%] after:rounded-[50%] after:border-t-[rgba(120,119,198,0.4)] after:bg-background"
        )}
        style={
          {
            "--color": "#585959",
          } as React.CSSProperties
        }
      ></div>
      <div className={styles.content} />
    </div>
  );
}
