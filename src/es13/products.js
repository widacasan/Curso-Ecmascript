import fetch from "node-fetch";

const response = await fetch("https://fakestoreapi.com/products");
const products = await response.json();

export { products };