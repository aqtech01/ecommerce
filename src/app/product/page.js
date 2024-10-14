import React from "react";
import { useFetchedDataFromApi } from "../../data/data";
import Image from "next/image";
import Link from "next/link";

export default function Product() {
  const { photos } = useFetchedDataFromApi();

  return (
    <>
      <div className="bg-gray-900 py-16 mt-2">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-8">
            Introducing Our Latest Product
          </h2>
          {photos.length === 0 ? (
            <h2 className="text-3xl font-bold text-white mb-8">
              No Data Found
            </h2>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {photos.map((photo) => (
                <div
                  className="bg-white rounded-lg shadow-lg p-8"
                  key={photo.id}
                >
                  <div className="relative overflow-hidden">
                    <Image
                      width={400} // You can adjust the width and height
                      height={400} // Next.js optimizes images, but actual size will depend on your layout
                      className="object-cover w-full h-44"
                      src={photo.image}
                      alt={photo.title}
                    />
                    <div className="absolute inset-0 bg-black opacity-40"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Link href={`/product/${photo.id}`}>
                        <button className="bg-white text-gray-900 py-2 px-6 rounded-full font-bold hover:bg-gray-300">
                          View Product
                        </button>
                      </Link>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mt-4">
                    {photo.title.length > 20
                      ? photo.title.substring(0, 20)
                      : photo.title}
                  </h3>
                  <p className="text-gray-500 text-sm mt-2">
                    {photo.description.length > 40
                      ? photo.description.substring(0, 40)
                      : photo.description}
                  </p>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-gray-900 font-bold text-lg">
                      {photo.price}
                    </span>
                    <button className="bg-gray-900 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800">
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
