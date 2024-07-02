import { CDN_URL } from "../utils/constants";

const ResturantCard = (props) => {
  const { resData } = props;

  return (
    <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-300">
      <img
        className="rounded-lg"
        alt="res-logo"
        src={CDN_URL + resData.cloudinaryImageId}
      />
      <h3 className="font-bold py-4 text-md">{resData.name}</h3>
      <h4>{resData.cuisines.join(", ")}</h4>
      <h4>{resData.avgRating}</h4>
      <h4>{resData.costForTwo}</h4>
      <h4>{resData.sla.deliveryTime + "mins"}</h4>
    </div>
  );
};

// Higher Order Component

export const withPromotedLabel = (ResturantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Promoted</label>
        <ResturantCard  {...props} /> 
      </div>
    );
  };
};

export default ResturantCard;
