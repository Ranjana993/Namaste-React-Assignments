import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", {}, [
    React.createElement("div", {}, [
        React.createElement("h1", {}, "This is heading 1 ."),
        React.createElement("h1", {}, "This is heading 2 .")
    ]),
    React.createElement("div", {}, [
        React.createElement("h1", {}, "This is heading 1  inside 2nd div."),
        React.createElement("h1", {}, "This is heading 2 inside 2nd div .")
    ])
]

)

const root = ReactDOM.createRoot(document
    .getElementById("root"));
root.render(parent)