// The cocktail DB

interface Cocktail {
    idDrink: string;
    strDrink: string;
    strCategory: string;
    strAlcoholic: string;
    strGlass: string;
    strInstructions: string;
    strInstructionsES: string;
    strDrinkThumb: string;
    strIngredient1: string;
    strIngredient2: string;
    strIngredient3: string;
    strIngredient4: string;
    strIngredient5: string;
    strIngredient6: string;
    strIngredient7: string;
    strIngredient8: string;
    strIngredient9: string;
    strIngredient10: string;
    strIngredient11: string;
    strIngredient12: string;
    strIngredient13: string;
    strIngredient14: string;
    strIngredient15: string;
    strMeasure1: string;
    strMeasure2: string;
    strMeasure3: string;
    strMeasure4: string;
    strMeasure5: string;
    strMeasure6: string;
    strMeasure7: string;
    strMeasure8: string;
    strMeasure9: string;
    strMeasure10: string;
    strMeasure11: string;
    strMeasure12: string;
    strMeasure13: string;
    strMeasure14: string;
    strMeasure15: string;
}

export async function fetchAllCocktails(): Promise<Cocktail[]> {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    let allCocktails: Cocktail[] = [];
  
    for (const letter of alphabet) {
      try {
        const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`);
        const data = await response.json();
        if (data.drinks) {
          allCocktails = allCocktails.concat(data.drinks);
        }
      } catch (error) {
        console.error(`Error fetching cocktails for letter ${letter}:`, error);
      }
    }
    //los pongo aleatorios
    allCocktails.sort(() => Math.random() - 0.5);
    
    return allCocktails;
  }