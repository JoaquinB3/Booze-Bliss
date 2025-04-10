"use client";

import { motion } from "framer-motion";
import { Button } from "@mui/material";
import LemonDrinks from "../lemonDrink/LemonDrink";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden text-white flex items-center justify-center gap-[150px]">

      <div className="relative z-10 flex-1 px-6 lg:px-16">
        <div className="max-w-2xl space-y-8">
          <motion.h1 
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          className="text-5xl font-bold tracking-tight sm:text-7xl">
            BOOZE
            {/* <span className="block text-rose-500">BLISS</span> */}
            <span className="block text-primary">BLISS</span>
          </motion.h1>

          <motion.p 
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
          className="text-lg text-gray-400 sm:text-xl">
            Discover the art of cocktail crafting with our curated collection of premium recipes. From classic
            concoctions to modern mixology marvels.
          </motion.p>

          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.7 }}
            className="flex gap-4"
          >
            <Button variant="contained" color="primary">Explore Cocktails</Button>
            <Button variant="outlined" color="secondary">View Recipes</Button>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
        className="relative flex-1 h-screen"
      >
        <LemonDrinks />
      </motion.div>
    </section>
  );
}



