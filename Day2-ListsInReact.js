import logo from './logo.svg';
import './App.css';
//we use the map functionality to render our Lists in React
const list = [{id: 1 , name:'Mohawk', lastName: "Chaturvedi", age:15}, {id: 2, name:'Javed', lastName: "Smith", age:17}];
const detailedList = list.map((items)=>{
  return <li key = {items.id}>{items.name} {items.lastName} is {items.age} years old.</li>
})

let numbers = [1,2,3,4,5];
let newNum = numbers.map((num)=>{
  return <li>{num*num}</li>
});
function App() {
  return (
    <div>
  <h1>New name</h1>
    <p></p>
   <ul>{newNum}</ul>
   <ol>{detailedList}</ol>
    </div>
    
  );
}

export default App;
