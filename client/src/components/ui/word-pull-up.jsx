"use client";
import { cn } from "@/lib/utils";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

export default function WordPullUp({
  children,
  className,
  as: Component = "h1",
  variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  },
  wordVariants = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 },
  },
  startOnView = false,
}) {
  const MotionComponent = motion.create(Component);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50% 0px -50% 0px" });
  const shouldAnimate = startOnView ? inView : true;

  return (
    <div>
      <MotionComponent
        ref={ref}
        variants={variants}
        initial="hidden"
        animate={shouldAnimate ? "show" : "hidden"}
        className={cn(
          "text-xl font-bold leading-[2rem] tracking-[-0.02em]",
          className
        )}
      >
        {children.split(" ").map((word, i) => (
          <motion.span
            key={i}
            variants={wordVariants}
            style={{ display: "inline-block", paddingRight: "8px" }}
          >
            {word === "" ? <span>&nbsp;</span> : word}
          </motion.span>
        ))}
      </MotionComponent>
    </div>
  );
}
