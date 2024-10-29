import React from 'react'

interface FilterProps {
    setSearchCocktail: (cocktail: string) => void;
  }

const Filter: React.FC<FilterProps> = ({ setSearchCocktail }) => {
    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchCocktail(e.target.value);
    };

    return (
        <input
            type="text"
            placeholder="Buscar..."
            onChange={handleSearchChange}
            className='mb-4 p-2  bg-[rgb(61,61,61)] rounded border-none outline-none text-white'
        />
    )
}

export default Filter;
