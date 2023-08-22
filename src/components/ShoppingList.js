import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {

  const [filterBy, setFilterBy] = useState("All")
  const [groceries, setGroceries] = useState(items)

  const groceriesToDisplay = groceries.filter((grocery) => {
    if (filterBy === "All") {
      return true;
    } else {
      return grocery.category === filterBy;
    }
  });

  function handleFilterChange(event) {
    setFilterBy(event.target.value)
  }

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleFilterChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {groceriesToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
