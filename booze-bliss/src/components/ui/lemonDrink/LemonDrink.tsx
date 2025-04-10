"use client";

import React, { useEffect, useState, useRef } from "react";
import styles from "./LemonDrink.module.css";
import Image from "next/image";
import { motion } from "framer-motion";

export default function LemonDrinks() {
  const MAX_FRAMES = 53;
  const [frame, setFrame] = useState(1);
  const [isVisible, setIsVisible] = useState(true); // Controla si el componente es visible
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const updateMaxScroll = () => {
      if (sectionRef.current) {
        return sectionRef.current.offsetHeight - window.innerHeight;
      }
      return 0;
    };

    let maxScroll = updateMaxScroll();

    const handleResize = () => {
      maxScroll = updateMaxScroll();
    };

    const handleScroll = () => {
      if (!sectionRef.current) return;

      const scrollPosition = window.scrollY - sectionRef.current.offsetTop;
      const fraction = Math.max(0, Math.min(scrollPosition / maxScroll, 1));
      const newFrame = Math.floor(fraction * MAX_FRAMES) || 1;
      setFrame(newFrame);

      // Ocultar el componente si el usuario llegó al final del scroll
      if (fraction >= 0.98) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.section
      ref={sectionRef}
      className="h-[300dvh]"
      initial={{ opacity: 1 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className={styles.imageContainer}>
        <Image
          src={`/frames/lemonDrinks/ezgif-frame-${String(frame).padStart(3, "0")}.png`}
          width={500}
          height={500}
          alt="Cóctel"
          className={styles.image}
        />
      </div>
    </motion.section>
  );
}

