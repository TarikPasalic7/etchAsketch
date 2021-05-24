import React, {useEffect,useState} from 'react';
import './App.css';
import Box from './components/Box';


const elements=[];
function App() {
const [gridNumber,setGridNumber]=useState(16)

  const reset =()=>{
   
    const val=prompt("How many squares per side do you want");
    setGridNumber(val);

  }

for (let i = 0; i < gridNumber*gridNumber; i++) {
  elements.push(i);
  
}

  return (
    <div className="App">
      <div>
        <button onClick={reset} >Reset Board</button>
        <button>Black</button>
        <button>Clear Board</button>
        <button>Random Color</button>
      </div>
     <div className="container">
     {elements.map((value, index) => {
        return <Box boxNumber={gridNumber} key={index}/>
      })}
    
    
       
     </div>
    </div>
  );
}

export default App;
