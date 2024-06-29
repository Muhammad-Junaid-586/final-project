import React from "react";
import "../style.css";
import { useState } from "react";
import Markdown from "react-markdown";

function Markdownreact() {
  const [markDown, setMarkDown] = useState("Welcome to Markdown");
  return (
    <>
      <h1 style={{ textAlign: "center" }}>React Markdown </h1>
      <div className="center-div">
        <textarea
          className="left-side"
          value={markDown}
          onChange={(e) => setMarkDown(e.target.value)}
        ></textarea>
        <div className="right-side">
          <Markdown>{markDown}</Markdown>
        </div>
      </div>
    </>
  );
}

export default Markdownreact;
