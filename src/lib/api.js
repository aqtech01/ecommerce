export const fetchDataFromApi = async () => {
  try {
    const response = await fetch("https://fakestoreapi.com/products");

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const post = await response.json();
    return post;
  } catch (error) {
    console.log("Something went wrong: ", error.message);
    return null; // Return null in case of an error
  }
};
