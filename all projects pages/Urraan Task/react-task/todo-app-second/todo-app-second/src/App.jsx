import React from "react";
import { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [items, setItems] = useState([]);

  function addItems(e) {
    if (!input) {
    } else {
      setItems([...items, input]);
      setInput("");
    }
  }

  function deleteItem(id) {
    const updateItems = items.filter((elem, indx) => {
      return indx != id;
    });

    setItems(updateItems);
  }
  return (
    <center>
      <h1>Todo App</h1>

      <div className="container ">
        {items.map((elem, indx) => {
          return (
            <div className="container">
              <div className="row">
                <div className="col-4" key={indx}>
                  <h2 className="pe-3">{elem}</h2>
                </div>
                <div className="col-2">
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteItem(indx)}
                  >
                    X
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="container">
        <div className="row">
          <div className="col-4">
            <input
              type="text"
              placeholder="Enter Todo Item"
              value={input}
              onChange={(e) => {
                // console.log(e.target.value);
                setInput(e.target.value);
              }}
            />
          </div>

          <div className="col-2">
            <button className="btn btn-primary" onClick={addItems}>
              Add Todo
            </button>
          </div>
        </div>
      </div>
    </center>
  );
}

export default App;
