import { useOutletContext } from "react-router-dom";

function Shop() {
    const [storeData]= useOutletContext()
  return (
    <>
      <div>This is the Shop</div>
      <div>
        {storeData.map((item) => (
          <div key={item.id}>
            <div>{item.title}</div>
            <div>{item.price}</div>
            <hr />
          </div>
        ))}
      </div>
    </>
  );
}

export default Shop;
