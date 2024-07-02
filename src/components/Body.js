import ResturantCard, { withPromotedLabel } from "./ResturantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfResturants, setlistOfResturants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredResturant, setFilteredResturant] = useState("");

  const OnlineStatus = useOnlineStatus();
  const ResturantCardPromoted = withPromotedLabel(ResturantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.559441&lng=88.3639986&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    setlistOfResturants(
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );

    setFilteredResturant(
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
  };


  if (OnlineStatus === false) {
    return <h1>Please check your internet connection!!</h1>;
  }

  if (listOfResturants.length == 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="flex items-center">
        <div className="search m-3 p-3">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-3 py-1 bg-green-100 m-4 rounded-lg"
            onClick={() => {
              const filteredResturant = listOfResturants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setFilteredResturant(filteredResturant);
            }}
          >
            Search
          </button>
        </div>
        <div>
          <button
            className="search px-4 py-1 bg-gray-100 rounded-lg"
            onClick={() => {
              const filteredList = listOfResturants.filter(
                (res) => res.info.avgRating > 4.5
              );
              setFilteredResturant(filteredList);
            }}
          >
            Top Rated Resturants!
          </button>
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredResturant.map((resturant) => (
          <Link
            key={resturant.info.id}
            to={"/restaurants/" + resturant.info.id}
          >
            {resturant.info.promoted ? (
              <ResturantCardPromoted resData={resturant.info} />
            ) : (
              <ResturantCard resData={resturant.info} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
