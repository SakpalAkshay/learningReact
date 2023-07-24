// Manipulate the HTML DOM using Javscript
// const heading = document.createElement("h1");
// heading.innerHTML = "Namaste Everyone";
// const root = document.getElementById("root");
// root.appendChild(heading);


//Mainpulate the HTML DOM using React
const firstHeading = React.createElement("h1", {}, "I am heading 1");
const secondHeading = React.createElement("h2", {
    id:"second",
    style: {
        background:"red",
      },
    className: "secondHeading"
}, "I am second heading");


const container = React.createElement("div",{},[firstHeading,secondHeading]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(container);