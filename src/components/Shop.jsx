import { useOutletContext } from "react-router-dom";
import Cards from "./Cards";

function Shop() {
    const [storeData]= useOutletContext()
  return (
    <>
      <div>This is the Shop</div>
      <div> 
        {storeData.map((item) => (
          <Cards key={item.id} props={item}/>
        ))}
      </div>
    </>
  );
}

export default Shop;
