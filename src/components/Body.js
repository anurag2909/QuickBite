import ResturantCard from "./ResturantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [listOfResturants, setlistOfResturants] = useState(resList);
  
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfResturants.filter(
              (res) => res.avgRating > 4
            );
            setlistOfResturants(filteredList);
          }}
        >
          Top Rated Resturants!
        </button>
      </div>
      <div className="res-container">
        {listOfResturants.map((resturant) => (
          <ResturantCard key={resturant.id} resData={resturant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
