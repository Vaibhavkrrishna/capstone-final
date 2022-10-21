import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LikeButton from "../components/Like";
import ProductCard from "../components/ProductCard";
import Header from "../components/Header";
export default function CategoryPage() {
  let { id } = useParams();
  let [products, setProducts] = useState([]);
  let [loading, setLoading] = useState(true);
  const url = "http://localhost:3000/users?category=";

  async function getProducts() {
    setLoading(true);
    let response = await fetch(url + id);
    let result = await response.json();
    console.log(result);
    setProducts(result);
    setLoading(false);
  }

  useEffect(() => {
    getProducts();
  }, [id]);

  return (
    <div className=" mx-auto max-w-6xl">
      <div className="capitalize mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white text-center ">
        {id}
      </div>

      {loading ? (
        "fetching data"
      ) : (
        <>
          <div className="flex flex-wrap justify-between">
            {products.map((product) => {
              return <ProductCard product={product} key={product.id} />;
            })}
          </div>
        </>
      )}
    </div>
  );
}
