import './App.css';
// everything in curly braces in JSX can be used for JavaScript expressions (e.g. function execution)
const title = "React";
const newTitle ={
  name:"Seeing this",
  name2:"Have a good day"
};

const newParagraph = <p>If you are {newTitle.name}, may you {newTitle.name2}</p>

function greetMe(title){
  return `Hello ${title}`;
}

function App() {
  return (
   <div>
     <h1 class="header">Hello {title}</h1>
     {newParagraph}
     <p>This is my first React App</p>

    <h2>I have called a Greet function here - {greetMe("Dear")}</h2>

   </div>
  );
}

export default App;
