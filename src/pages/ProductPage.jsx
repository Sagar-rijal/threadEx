import React from "react";
import { useParams } from "react-router-dom";

function ProductPage() {
  const { id } = useParams();
  return <h1>Product page for ID: {id}</h1>;
}

export default ProductPage;