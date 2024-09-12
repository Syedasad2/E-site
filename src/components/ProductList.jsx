
import React from "react";
import PropTypes from "prop-types";
import ProductCard from "./ProductCard";

const ProductList = ({ posts }) => {
  return (
    <div className="flex flex-wrap justify-center">
      {posts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

ProductList.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default ProductList;