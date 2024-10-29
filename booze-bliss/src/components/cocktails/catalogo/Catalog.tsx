"use client";

import React, { useEffect, useState } from "react";
import { fetchAllCocktails } from "@/services/serviceCocktails";
import CardCocktail from "../cardCocktail/CardCocktail";

interface Cocktail {
  idDrink: string;
  strDrink: string;
  strCategory?: string;
  strAlcoholic?: string;
  strGlass?: string;
  strInstructions?: string;
  strDrinkThumb?: string;
}

interface CatalogProps {
  searchCocktail: string;
}

const Catalog: React.FC<CatalogProps> = ({searchCocktail}) => {
  const [cocktails, setCocktails] = useState<Cocktail[]>([]);


  useEffect(() => {
    async function getCocktails() {
      const data = await fetchAllCocktails();

      console.log(data);

      setCocktails(data);
    }

    getCocktails();
  }, []);

  const filteredCocktails = cocktails.filter((cocktail) =>
    cocktail.strDrink.toLowerCase().includes(searchCocktail.toLowerCase())
  );

  return (
    <div className="mt-[120px] w-[70%] h-auto text-white">
      <h1 className="text-center font-medium text-2xl mb-4">CATALOGO</h1>
      
      <ul className="flex flex-wrap justify-center">
        {filteredCocktails.map((cocktail) => (
          <li key={cocktail.idDrink} className="p-2">
            <CardCocktail
              name={cocktail.strDrink}
              image={cocktail.strDrinkThumb || ""}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Catalog;
