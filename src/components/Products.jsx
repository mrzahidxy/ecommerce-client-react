import styled from "styled-components";
import Product from "./Product";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = ({ sort, filters, cat }) => {
  const [products, setProducts] = useState([]);
  const [filterProducts, setFilterProducts] = useState([]);

  // console.log("filter", sort, filters, cat);

  console.log("products", filterProducts);

  console.log(cat);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          cat
            ? `https://ecommerce-mern-api.vercel.app/api/products?category=${cat}`
            : `https://ecommerce-mern-api.vercel.app/api/products`
        );
        setProducts(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    getProducts();
  }, []);

  useEffect(() => {
    cat &&
      setFilterProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, cat, filters]);

  useEffect(() => {
    if (sort === "new") {
      setFilterProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setFilterProducts((prev) => [...prev].sort((a, b) => a.price - b.price));
    } else if (sort === "desc") {
      setFilterProducts((prev) => [...prev].sort((a, b) => b.price - a.price));
    }
  }, [sort]);

  return (
    <Container>
      {cat
        ? filterProducts.map((item) => (
            <div key={item._id}>
              <Product item={item} />
            </div>
          ))
        : products.map((item) => (
            <div key={item._id}>
              <Product item={item} />
            </div>
          ))}
    </Container>
  );
};

export default Products;
