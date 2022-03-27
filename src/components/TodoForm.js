import React, { useState } from "react";
import Item from "./Item";
function TodoForm(props) {
  const [text, setText] = useState("");

  function addItem(event) {
    event.preventDefault();
    if (text) {
      props.onAddItem(text);
      setText("");
    }
/*     localStorage.setItem() */

  }
  function handleChange(event) {
    let t = event.target.value;
    setText(t);
  }
/*   localStorage.clear();
 */
  return (
    <form>
      <input
        onChange={handleChange}
        maxLength="80"
        placeholder="Digite aqui sua tarefa"
        type="text"
        value={text}
      ></input>
      <button className="addButton" onClick={addItem}>
        Adicionar
      </button>
    </form>
  );
}

export default TodoForm;
