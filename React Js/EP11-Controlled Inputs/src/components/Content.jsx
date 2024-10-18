import React, { useState } from "react";
import Shop from "./Shop";
import { FaTrashCan } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";

const Content = ({ user }) => {
  let [items, setItems] = useState([
    { id: 1, label: "Html & CSS", checked: true },
    { id: 2, label: "Javascript", checked: true },
    { id: 3, label: "React Js", checked: false },
  ]);

  let [newItem, setNewItem] = useState("");
  let [isEditing, setIsEditing] = useState( false )

  let handleChecked = (id) => {
    let newListItems = items.map((item) => {
      return item.id === id ? { ...item,  checked: !item.checked } : item;
    });

    setItems(newListItems);
  };
 
  let handleUpdate = () => {
    setIsEditing( true )
  }

  return (
    <main>
      {/* <Shop user = {user} /> */}
      <div>
        <input
          type="text"
          value={newItem}
          placeholder="Add New Item"
          onChange={(e) => {
            setNewItem(e.target.value);
          }}
        />
        <button> { isEditing ? "Save" : "Add"  } </button>
      </div>
      <ul>
        {items.map((item) => {
          return (
            <li key={item.id} className="item">
              <input
                type="checkbox"
                checked={item.checked}
                onChange={() => handleChecked(item.id)}
              />
              <label> {item.label} </label>
              <FaEdit role="button" tabIndex={0} onClick={ handleUpdate } />
              <FaTrashCan role="button" tabIndex={0} />
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default Content;
