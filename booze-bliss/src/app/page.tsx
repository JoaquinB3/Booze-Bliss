"use client"

import Catalog from "@/components/cocktails/catalogo/Catalog";
import Filter from "@/components/cocktails/filters/Filters";
import { useState } from "react";

export default function Home() {
  const [searchCocktail, setSearchCocktail] = useState<string>("");

  return (
    <div className="flex p-8 gap-20">
      <div className="bg-[#000000] w-[25%] mt-[120px] rounded-md flex flex-col p-6 shadow-[4px_16px_49px_-5px_rgba(0,0,0,0.75)]">
        <Filter setSearchCocktail={setSearchCocktail}/>
      </div>
      <Catalog searchCocktail={searchCocktail}/>
    </div>
  );
}
