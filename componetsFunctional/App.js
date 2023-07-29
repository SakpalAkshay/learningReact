import React from "react";
import  ReactDOM  from "react-dom/client";


// this is functional component which we are creating

const RightTitle = ()=>{
    return (<h3>RightTitle</h3>)
}

const LeftTitle = ()=>{
    return <h3>LeftTitle</h3>
}

const header = <header key='header'>I am header</header>

const BigHeader = ()=>{
    return(<div className="bigHeader">
        <RightTitle/>
        {header}
        <LeftTitle/>
    </div>)
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(BigHeader());
