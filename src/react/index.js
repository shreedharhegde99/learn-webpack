function createElement(type, props, ...children) {
  return {
    type,
    props: { ...props },
    children: children.map((child) =>
      typeof child === "object" ? child : textElement(child)
    ),
  };
}

function textElement(elem) {
  return {
    type: "TEXT_ELEMENT",
    props: {
      nodeValue: elem,
      children: [],
    },
  };
}

const React = { createElement };

//const elem = React.createElement("div", {}, "hello world", "hello masai");
// type: 'div', props: {…}, children: Array(2)}children: (2) [{…}, {…}]props: {}type: "div"[[Prototype]]: Object
function render(element, container) {
  const dom =
    element.type === "TEXT_ELEMENT"
      ? document.createTextNode("")
      : document.createElement(element.type);
  Object.keys(element.props)
    .filter((key) => key !== "children")
    .forEach((name) => {
      dom[name] = element.props[name];
    });

  element.children?.forEach((child) => render(child, dom));
  container.append(dom);
}

const ReactDOM = { render };

export default React;
export { ReactDOM };
