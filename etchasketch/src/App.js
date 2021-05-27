import React, {useEffect,useState} from 'react';
import './App.css';
import Box from './components/Box';



function App() {
  const [gridNumber,setGridNumber]=useState(16);
  const [boxColor,setBoxColor]=useState("white");
  const [boxElements,addBoxElements]=useState([])//
  const [noEvenet,setNoEvent]=useState(false);
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
    setNoEvent(false);

  }
  const color =()=>{
    clear();
    setBoxColor("color");
    setNoEvent(true);
  
  }
  const black =()=>{
  /**  var element = document.getElementsByClassName("box");
    console.log(element);
    for(let i =0;i<element.length;i++)
    element[i].classList.add("black"); */

    clear();
  setBoxColor("black");
    setNoEvent(true);
   

  }
  const clear =()=>{
    setNoEvent(false);
    setBoxColor("white");
    let tempElements=[];
    boxElements.map((data,index)=>{
     
      data.isEntered=false;
      tempElements.push(data);

    });
   addBoxElements(tempElements);
    
    const divBox=document.getElementsByClassName("box");
    for(let i=0;i<divBox.length;i++){

        divBox[i].style.backgroundColor=null;
        
    }

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
if(boxColor==="color"){
  const target=e.target;

  var red= Math.floor((Math.random()*255));
    var green= Math.floor((Math.random()*255));
    var blue= Math.floor((Math.random()*255));
    let newColor="rgb(" + red + "," + green + "," + blue + ")";
    
    target.style.backgroundColor=newColor;

}
}


  return (
    <div className="App">
      <div>
        <button onClick={reset} >Reset Board</button>
        <button onClick={black} >Black</button>
        <button onClick={clear}>Clear Board</button>
        <button onClick={color}>Random Color</button>
      </div>
     <div className="container">
    
     {boxElements.map((data, index) => {
        //return <Box boxNumber={gridNumber} boxColor={boxColor} isClear={isClear} key={index}/>
        return (<div /*onMouseEnter={()=>setIsClear([])} / onMouseEnter={()=>isClear[index]=true}*/   onMouseEnter={noEvenet?changeBox(index):null} className={ data.isEntered?` box ${boxColor}`:" white box "} key={data.id}>{gridNumber}</div> ) 
      })}
    
       
     </div>
    </div>
  );
}

export default App;
