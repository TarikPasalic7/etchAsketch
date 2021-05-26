import React, {useEffect,useState} from 'react';
import './App.css';
import Box from './components/Box';



function App() {
  const [gridNumber,setGridNumber]=useState(16);
  const [boxColor,setBoxColor]=useState("white");
  const [boxElements,addBoxElements]=useState([])//
  //const [isClear,setIsClear]=useState([]);
  useEffect(()=>{
    addBoxElements([]);
    setBoxColor("white");
    let elements=[];
    
    for (let i = 0; i < gridNumber*gridNumber; i++) {
      const obj={"id":i,
              "isEntered":false
    }
      elements.push(obj);
     
     
     console.log(i);
    
    }
    
    addBoxElements(elements);
  console.log(boxElements);
  

  },[gridNumber]);




  const reset =()=>{
   
    const val=prompt("How many squares per side do you want");
    setGridNumber(val);
    

  }
  const black =()=>{
  /**  var element = document.getElementsByClassName("box");
    console.log(element);
    for(let i =0;i<element.length;i++)
    element[i].classList.add("black"); */
    var red= Math.floor((Math.random()*255));
	var green= Math.floor((Math.random()*255));
	var blue= Math.floor((Math.random()*255));
    
  setBoxColor("black");
    
   

  }
  const clear =()=>{
    //setBoxColor("white");
    //setIsClear(true);
 
    


   /**  
    * var element = document.getElementsByClassName("box");
    * for(let i =0;i<element.length;i++)
    {
      element[i].classList.remove("black");
      element[i].classList.add("white")

    }*/
    
   
  }
const changeBox=index=>e=>{

  console.log('index: ' + index);

 let newArr = [...boxElements]; 
  newArr[index].isEntered =true; 
  console.log(newArr[index]);

  addBoxElements(newArr); // ??//
console.log(boxElements);
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
    
     {boxElements.map((data, index) => {
        //return <Box boxNumber={gridNumber} boxColor={boxColor} isClear={isClear} key={index}/>
        return (<div /*onMouseEnter={()=>setIsClear([])} / onMouseEnter={()=>isClear[index]=true}*/   onMouseEnter={changeBox(index)} className={ data.isEntered?` box ${boxColor}`:" white box "} key={index}>{gridNumber}</div> ) 
      })}
    
       
     </div>
    </div>
  );
}

export default App;
