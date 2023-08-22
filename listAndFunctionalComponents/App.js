import React from "react";
import ReactDOM from "react-dom/client";


let resources = [
    {
        info: {
            id: 1,
            data: "My Data for react",
            age: 23,
            city: "Fullerton"
        }
    },
    {
        info: {
            id: 2,
            data: "My Data for react Two",
            age: 12,
            city: "Fullerton"
        }
    },
    {
        info: {
            id: 3,
            data: "My Data for react Three",
            age: 19,
            city: "San Bernadino"
        }
    },
    {
        info: {
            id: 4,
            data: "My Data for react Four",
            age: 12,
            city: "Anaheim"
        }
    },
    {
        info: {
            id: 5,
            data: "My Data for react Five",
            age: 34,
            city: "Los Angeles"
        }
    },
    {
        info: {
            id: 6,
            data: "My Data for react Six",
            age: 12,
            city: "Costa Mesa"
        }
    },
    {
        info: {
            id: 7,
            data: "My Data for react Seven",
            age: 19,
            city: "Riverside"
        }
    },
    {
        info: {
            id: 8,
            data: "My Data for react Eight",
            age: 24,
            city: "NewJersey"
        }
    }


];

const Heading = ({ id, data, age, city }) => (
    <div className="inside-card">
    <h1>{id} is id and data is {data}</h1>
    <h2>Age is {age} and Lives in {city}</h2>
    </div>);


const HeadingComponent = () => (
    <>
    <div className="card">

    
        {
            resources.map((resource) => (
                <Heading {...resource.info} key={resource.info.id}/>
            ))
        }
        </div>
    </>
)


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<HeadingComponent />);
