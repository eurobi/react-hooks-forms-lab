import React from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ setItemFormData, itemFormData, onFormSubmit }) {
  const id = uuid()
  function handleCategoryChange(event){
    setItemFormData({
      category: event.target.value,
      name: itemFormData.name,
      id: id
    })
  }

  function handleNameChange(event){
    setItemFormData({
      name: event.target.value,
      category: itemFormData.category,
      id: id
    })
  }

  return (
    <form onSubmit={onFormSubmit} className="NewItem">
      <label>
        Name:
        <input onChange={handleNameChange}  type="text" name="name" />
      </label>

      <label>
        Category:
        <select onChange={handleCategoryChange} name="category">
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
