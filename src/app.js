import React, { ReactDOM } from "./react/index";
// import ReactDOM from "react-dom";

// import React from "react";
// import ReactDOM from "react-dom";

const list = React.createElement("li", { id: "one" }, "list item1");
const list1 = React.createElement("li", { id: "two" }, "hello masai");
const list2 = React.createElement("li", { className: "one" }, "hello world");

// const elem = React.createElement("div", {}, "Masai school", list1, list2, list);
const root = document.querySelector(".root");

ReactDOM.render(elem, root);
