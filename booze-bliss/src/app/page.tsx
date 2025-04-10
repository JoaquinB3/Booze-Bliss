"use client"

import Catalog from "@/components/cocktails/catalogo/Catalog";
import Filter from "@/components/cocktails/filters/Filters";
import ScrollGallery from "@/components/cocktails/gallery/Gallery";
import Gallery from "@/components/cocktails/gallery/Gallery";
import HeroSection from "@/components/ui/heroSection/HeroSection";
// import LemonDrinks from "@/components/ui/lemonDrink/LemonDrink";
import { Box } from "@mui/material";
import { useState } from "react";

export default function Home() {
  const [searchCocktail, setSearchCocktail] = useState<string>("");

  return (
    <Box>
      <section
        className="h-[300dvh]"
        style={{
          background: "linear-gradient(0deg, rgba(115,139,164,1) 0%, rgba(93,109,126,1) 23%, rgba(39,45,54,1) 100%)"
        }}
      >
        <HeroSection />
      </section>

      <section className="m-0 p-0 box-border bg-[#000]">
        <ScrollGallery/>
      </section>


      {/* <section>
        <Gallery/>
      </section> */}

      {/* <div className="flex p-8 gap-20">
        <div className="bg-[#000000] w-[25%] mt-[120px] rounded-md flex flex-col p-6 shadow-[4px_16px_49px_-5px_rgba(0,0,0,0.75)]">
          <Filter setSearchCocktail={setSearchCocktail}/>
        </div>
        <Catalog searchCocktail={searchCocktail}/>
      </div> */}
    </Box>
  );
}
