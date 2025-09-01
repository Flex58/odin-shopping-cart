import { Outlet, useLoaderData} from "react-router-dom";
import NavBar from "./NavBar";

function Store() {
  const { storeData } = useLoaderData();
  return (
    <>
      <NavBar />
      <Outlet context={storeData}/>
    </>
  );
}

export default Store;
