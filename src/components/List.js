import React from "react";

function DoneImg(props) {
  if (props.done) {
    return <img className="LIIcon" src="./assets/on1.png" alt="done"></img>;
  } else {
    return <img className="LIIcon" src="./assets/off1.png" alt="undone"></img>;
  }
}


function List(props) {
  return (
    <ul>
      {props.items.map((item) => (
        <li className={item.done ? "done" : ""} key={item.id}>
          {item.text}
          <div className="buttonsDiv">
            <button
              className="buttons"
              onClick={() => {
                props.onDone(item);
              }}
            >
              <DoneImg done={item.done}></DoneImg>
            </button>

            <button
              className="buttons"
              onClick={() => {
                props.onItemDeleted(item);
              }}
            >
              <img className="LIIcon" src="./assets/trashCan.png"></img>
            </button>
          </div>

        </li>
      ))}
    </ul>
  );
}

export default List;
