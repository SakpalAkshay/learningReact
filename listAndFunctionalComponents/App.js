import React from "react";
import  ReactDOM  from "react-dom/client";


let resources = [
    {
        info:{
        id:1,
        data: "My Data for react"
    }
},
    {
    info:{
        id:2,
        data: "My Data for react Two"
    }}


];

const Heading = ({id,data})=>(
    <h1>{id} is id and data is {data}</h1>);


const HeadingComponent = ()=>(
    <>
    {
    resources.map( (resource) =>(
        <Heading {...resource.info} />
    ) )
    }
    </>
)


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<HeadingComponent/>);