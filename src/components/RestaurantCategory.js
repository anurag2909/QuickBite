import ItemList from "./ItemList";
import { useState } from "react";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  
  const handleClick = () => {
    setShowIndex();
  };
  return (
    <div>
      {/* header */}
      <div className="w-6/12 mx-auto my-4 p-5 bg-gray-50 shadow-lg rounded-lg">
        <div className="flex justify-between cursor-pointer" onClick={handleClick}>
          <span className="font-bold text-md">
            {data.title} ({data.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>
        { showItems &&  <ItemList items={data.itemCards} /> } 
      </div>
    </div>
  );
};

export default RestaurantCategory;
