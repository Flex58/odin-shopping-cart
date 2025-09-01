async function getStoreApi() {
  try {
    const respone = await fetch("https://fakestoreapi.com/products");
    if (!respone.ok) {
      throw new Error(
        `Response Status: ${respone.status}, Response Message: ${respone.statusText}`
      );
    }
    const data = await respone.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export default getStoreApi;
