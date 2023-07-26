/*
 *** Parcel Feature ***
 * Created A Server
 * HMR - Hot Module Replacement
 * File Watcher algorithm - C++ (Execute File when changes occur)
 * BUNDLING
 * MINIFY
 * Cleaning our Code (Example - Remove Console.log)
 * Dev and Production Build
 * Super Fast build algorithm
 * Image Optimization
 * Caching while development
 * Compression
 * Compatible with older version of browser
 * HTTPS on dev [Example - npx parcel index.html --https]
 * Port Number [Example - If port number using in localhost then it will change in port number in another project running on localhost]
 * Consistent Hashing Algorithm
 * Zero Config
 * Tree shaking
 *
 *
 * Transitive Dependencies
 */


 import React from 'react';
 import ReactDOM from 'react-dom/client';



const firstHeading = React.createElement("h1", {}, "Hello from Parcel");
const secondHeading = React.createElement("h2", {
    id:"second",
    style: {
        background:"red",
      },
    className: "secondHeading"
}, "This react was cretaed from zero using Parcel, not with the use of create-react-app functionality");


const container = React.createElement("div",{},[firstHeading,secondHeading]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(container);