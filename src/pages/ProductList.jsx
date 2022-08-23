import React from "react";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import styled from "styled-components";
import { mobile } from "../responsive";

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
  ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  ${mobile({ marginRight: "0px" })};
`;

const Select = styled.select`
  margin-left: 20px;
  padding: 10px;
  ${mobile({ margin: "10px 0px" })}
`;

const Option = styled.option``;

const ProductList = () => {
  return (
    <>
      <Navbar />
      <Announcement />
      <Title>Dresses</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products</FilterText>
          <Select>
            <Option disabled selected>
              Color
            </Option>
            <Option>Red</Option>
            <Option>Blue</Option>
            <Option>Black</Option>
            <Option>White</Option>
          </Select>
          <Select>
            <Option disabled selected>
              Size
            </Option>
            <Option>XL</Option>
            <Option>L</Option>
            <Option>M</Option>
            <Option>S</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products</FilterText>
          <Select>
            <Option disabled selected>
              Newest
            </Option>
            <Option>Low to High </Option>
            <Option>How to Low</Option>
          </Select>
        </Filter>
      </FilterContainer>

      <Products />
      <Newsletter />
      <Footer />
    </>
  );
};

export default ProductList;
