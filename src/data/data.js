import { useEffect, useState } from "react";
import { fetchDataFromApi } from "../lib/api";

export const useFetchedDataFromApi = () => {
  const [photos, setPhotos] = useState([]);
  const dataGet = async () => {
    try {
      const data = await fetchDataFromApi();
      setPhotos(data);
    } catch (error) {
      console.log("Something went Wrong", error);
    }
  };
  useEffect(() => {
    dataGet();
  }, []);
  return { photos };
};
