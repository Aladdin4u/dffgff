import React, { useState, useEffect } from "react";
import Product from "../components/Product.js";
import useFetch from "../useFetch.js";
import Loader from "../Loader.js";
import data from "../data/data.js";
import Input from "../components/Input.js";

export default function Products(props) {
  const [products, setProducts] = useState(data);
  const [searchProduct, setSearchProducts] = useState("");
  // const [products, setProducts] = useState([]);
  const { get, loading } = useFetch(
    "https://react-tutorial-demo.firebaseio.com/"
  );

  // const handleSearch = () => {
  //   console.log("search");
  // };

  // useEffect(() => {
  //   get("supermarket.json")
  //     .then((data) => {
  //       setProducts(data);
  //     })
  //     .catch((error) => console.log("Could not load products", error));
  // }, []);

  return (
    <div className="products-layout">
      <div>
        <li className="nav-item">
          <Input
            type="search"
            placeholder="Search..."
            value={searchProduct}
            onChange={(e) => setSearchProducts(e.target.value)}
          />
        </li>
      </div>
      <h1>Products</h1>
      <p>Take a look at our products</p>
      <div className="products-grid">
        {loading && <Loader />}
        {products.map((product) => {
          return (
            <Product
              key={product.id}
              details={product}
              cart={props.cart}
              onProductAdd={props.onProductAdd}
              onProductDelete={props.onProductDelete}
            />
          );
        })}
      </div>
    </div>
  );
}
