import getStoreApi from "./getStoreApi";

async function getLoaderHelper() {
  if (sessionStorage.getItem("storeData")) {
    return JSON.parse(sessionStorage.getItem("storeData"));
  }
  const storeData = await getStoreApi();
  sessionStorage.setItem("storeData", JSON.stringify(storeData));
  return storeData;
}

export default getLoaderHelper;
