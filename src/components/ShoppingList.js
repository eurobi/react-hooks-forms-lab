import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ setItems, items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState('')
  const [itemFormData, setItemFormData] = useState({
    name: '',
    category: 'Produce',
  })

  function onFormSubmit(event){
    event.preventDefault()
    if (itemFormData.name.length > 0){
      const newItems = [itemFormData, ...items]
      setItems(newItems)
  }

  }

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function onSearchChange(event){
    setSearchTerm(event.target.value)
  }


  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All" && item.name.toLowerCase().includes(searchTerm.toLocaleLowerCase())) return true;

    return item.category === selectedCategory;
  });



  return (
    <div className="ShoppingList">
      <ItemForm setItemFormData={setItemFormData} itemFormData={itemFormData} onFormSubmit={onFormSubmit} />
      <Filter onSearchChange={onSearchChange} onCategoryChange={handleCategoryChange} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
