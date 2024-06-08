import { CDN_URL } from "../utils/constants";

const styleCard = {
  backgroundColor: "#F2F3F4",
};

const ResturantCard = (props) => {
  const { resData } = props;

  return (
    <div className="res-card" style={styleCard}>
      <img
        className="res-logo"
        alt="res-logo"
        src={CDN_URL + resData.cloudinaryImageId}
      />
      <h3>{resData.name}</h3>
      <h4>{resData.cuisines.join(", ")}</h4>
      <h4>{resData.avgRating}</h4>
      <h4>{resData.costForTwo}</h4>
      <h4>{resData.deliveryTime + "mins"}</h4>
    </div>
  );
};

export default ResturantCard;
