import React, { useState } from "react";

function Item({ name, category }) {

  const [added, isAdded] = useState(false)

  function handleAdd(event) {
    isAdded(!added)
  }

  return (
    <li className={ added ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleAdd}>{ added ? "Remove From Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
