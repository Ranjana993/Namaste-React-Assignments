
// JS WAY OF RENDING THE CONTENT ......................................

// const root = document.getElementById('root');
// const heading = document.createElement('h1');
// heading.innerHTML = "NAMSTE REACT 🚀 ";
// root.appendChild(heading);




// REACT WAY OF RENDERING CONTENT ............
const heading = React.createElement("h1", { id: "title", style: { background: "red", }, className: "title" }, "heading");
const heading1 = React.createElement("h1", { id: "title", }, "heading1");
const container = React.createElement("div", { id: "container", }, [heading, heading1]);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);