
//⏩ Create a nested header element using React.createElement(h1 ,h2 , h3 inside a div with class "title")🔴🔴🔴🔴🔴🔴..............................


// import React from "react";
// import ReactDOM from "react-dom/client";

// const header = React.createElement("div", {}, [
//     React.createElement("h1", {}, "This is h1 Tag"),
//     React.createElement("h2", {}, "This is h2 Tag"),
//     React.createElement("h3", {}, "This is h3 Tag")
// ])

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(header)




//⏩ Create the same element using JSX 🔴🔴🔴🔴🔴🔴..................................
// import React from "react";
// import ReactDOM from "react-dom/client";

// const header = (
//     <div>
//         <h1>This is header 1 </h1>
//         <h2>This is header 2 </h2>
//         <h3>This is header 3 </h3>
//     </div>
// )


// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(header)



// ⏩ Create a functional component of the same code with JSX 🔴🔴🔴🔴🔴🔴
// import React from "react";
// import ReactDOM from "react-dom/client";

// const Header = ()=>{
//     return (
//         <div>
//             <h1>This is header 1 </h1>
//             <h2>This is header 2 </h2>
//             <h3>This is header 3 </h3>
//         </div>
//     )
// }
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Header />)



// Pass attribute into the tag JSX🔴🔴🔴🔴🔴🔴

// import React from "react";
// import ReactDOM from "react-dom/client";

// const Header = () => {
//     return (
//         <div style={{background:"yellow"}}>
//             <h1 style={{color:"red"}}>This is header 1 </h1>
//             <h2>This is header 2 </h2>
//             <h3>This is header 3 </h3>
//         </div>
//     )
// }
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Header />)

// ⏩ Composition of Component (Add a component inside another) 🔴🔴🔴🔴🔴🔴

// import React from "react";
// import ReactDOM from "react-dom/client";


// const AnotherComponent = function () {
//     return <h2> This is Another Component</h2>
// }

// const Header = () => {
//     return (
//         <div className="Title" key="title">
//             <h1 style={{ color: "blue" }} key="h1">This is h1 tag</h1>
//             <h2 style={{ color: "palevioletred" }} key="h2">This is h2 tag</h2>
//             <AnotherComponent />
//             <h3 style={{ color: "green" }} key="h3">This is h3 tag</h3>
//         </div>
//     );
// };
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Header />)



//⏩ `{TitleComponent}` vs `{<TitleComponent/>}` vs `{<TitleComponent></TitleComponent>}` in JSX.🔴🔴🔴🔴🔴🔴

// import React from "react";
// import ReactDOM from "react-dom/client";


// const element = <h1>This is React Element</h1>; // This is React element or {TitleComponent}
// const TitleElement = () => {
//     return <h2 style={{ color: "red" }}>This Title Element</h2>;
// };

// const Header = () => {
//     return (
//         <div className="Title" key="title">
//             {/* This is {TitleComponent} */}
//             {element}
//             <h1 style={{ color: "blue" }} key="h1">
//                 This is h1 tag
//             </h1>
//             {/* This is {<TitleComponent/>}*/}
//             <TitleElement />
//             <h2 style={{ color: "palevioletred" }} key="h2">
//                 This is h2 tag
//             </h2>
//             {/* This is {<TitleComponent></TitleComponent>}*/}
//             <TitleElement></TitleElement>
//             <h3 style={{ color: "green" }} key="h3">
//                 This is h3 tag
//             </h3>
//         </div>
//     );
// };
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Header />)

// 🔴🔴🔴🔴🔴create a Header Component from scratch using Functional Component with JSX
{/* 

🔴Add a Logo on left
🔴Add a search bar in middle 
🔴Add User icon on right 
🔴Add css to make it look nice

*/}
import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css"

const Header = () => {
    return (
        <>
            <header className="header">
                <div className="left"> <img src={"https://rednebulainc.com/wp-content/uploads/2013/10/creative-logos-2-catch.jpg"} alt="Logo" /></div>
                <div className="center">
                    <input className="input" type="text" placeholder="Search anything you want..." />
                    <button type="submit"> search </button>
                </div>
                <div className="right"> <img src={"https://cdn-icons-png.flaticon.com/512/666/666201.png"} alt="User Icon" /> </div>
            </header>
        </>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header />)