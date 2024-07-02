import ItemList from "./itemList";

const RestaurantCategory = ({ data }) => {
  console.log(data);
  return (
    <div>
      {/* header */}
      <div className="w-6/12 mx-auto my-4 p-5 bg-gray-50 shadow-lg rounded-lg">
        <div className="flex justify-between ">
          <span className="font-bold text-md">
            {data.title} ({data.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>
        <ItemList items={data.itemCards} />
      </div>
    </div>
  );
};

export default RestaurantCategory;
