import React, {useState} from "react";

function Item({ name, category }) {
const[inCart, setinCart] = useState(false)
function handleAddCart() {
  setinCart((inCart) => !inCart)
}
  return (
    <li className={inCart ? "in-cart" : " "}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleAddCart}className={inCart ? "remove" : "add"}>{inCart ? "Remove From Cart" : "Add To Cart"}</button>
    </li>
  );
}

export default Item;
