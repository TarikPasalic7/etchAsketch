import React, {useEffect,useState} from 'react';
import './App.css';
import Box from './components/Box';


const elements=[];
function App() {
const [gridNumber,setGridNumber]=useState(16);
const [boxColor,setBoxColor]=useState("white");


  const reset =()=>{
   
    const val=prompt("How many squares per side do you want");
    setGridNumber(val);

  }
  const black =()=>{
  /**  var element = document.getElementsByClassName("box");
    console.log(element);
    for(let i =0;i<element.length;i++)
    element[i].classList.add("black"); */
  setBoxColor("black");
    
   

  }
  const clear =()=>{
    setBoxColor("white");
  }

for (let i = 0; i < gridNumber*gridNumber; i++) {
  elements.push(i);
  
}

  return (
    <div className="App">
      <div>
        <button onClick={reset} >Reset Board</button>
        <button onClick={black} >Black</button>
        <button onClick={clear}>Clear Board</button>
        <button>Random Color</button>
      </div>
     <div className="container">
     {elements.map((value, index) => {
        return <Box boxNumber={gridNumber} boxColor={boxColor} key={index}/>
      })}
    
    
       
     </div>
    </div>
  );
}

export default App;
