import { Outlet, useOutletContext } from "react-router-dom";
import Cards from "./Cards";

function Shop() {
  const [storeData, cart] = useOutletContext();
  return (
    <>
      <div>This is the Shop</div>
     <Outlet context={cart}/>
      <div>
        {storeData.map((item) => {
          return <Cards key={item.id} props={item} cart={cart} />;
        })}
      </div>
    </>
  );
}

export default Shop;
