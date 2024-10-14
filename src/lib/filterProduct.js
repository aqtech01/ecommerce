import React from "react";
import { useFetchedDataFromApi } from "../data/data";

export function FilterProduct({ productId }) {
  productId = parseInt(productId);
  const { photos } = useFetchedDataFromApi();

  if (photos.length === 0) {
    return null; // No photos yet
  }

  const filteredProduct = photos.find((product) => product.id === productId);

  if (!filteredProduct) {
    console.log("Product Not Found");
    return null;
  }

  return filteredProduct;
}
