import styled from "styled-components";
import { popularProducts } from "../data";
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

  console.log(filters, sort, cat);

  const getProducts = async () => {
    try {
      axios
        .get(`https://ecommerce-mern-api.vercel.app/api/products`)
        .then((response) => setProducts(response.data));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <Container>
      {products.map((item) => (
        <div key={item._id}>
          <Link
            to={`/product/${item._id}`}
            style={{ textDecoration: "none", color: "black" }}
          >
            <Product item={item} />
          </Link>
        </div>
      ))}
    </Container>
  );
};

export default Products;
