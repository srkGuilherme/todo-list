import React, { useEffect, useState } from "react";
import List from "./components/List";
import TodoForm from "./components/TodoForm";
import Item from "./components/Item";
import "./Todo.css";

function Todo() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    let savedItems = JSON.parse(localStorage.getItem("savedItems"));
    if (savedItems) {
      setItems(savedItems);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("savedItems", JSON.stringify(items));
  }, [items]);

  function onAddItem(text) {
    let it = new Item(text);

    setItems([...items, it]);
  }

  function onItemDeleted(item) {
    let filteredItems = items.filter((it) => it.id != item.id);
    setItems(filteredItems);
  }

  function onDone(item) {
    let updatedItems = items.map((it) => {
      if (it.id === item.id) {
        it.done = !it.done;
      }

      return it;
    });
    setItems(updatedItems);
  }

  for (let s = 0; s < items.length; s++) {}

  return (
    <div className="container">
      <h1>Lista de Tarefas</h1>
      <TodoForm onAddItem={onAddItem}></TodoForm>
      <List onDone={onDone} onItemDeleted={onItemDeleted} items={items}>
        {" "}
      </List>
    </div>
  );
}

export default Todo;
