import React, {useEffect,useState} from 'react';
import './App.css';




function App() {
  const [gridNumber,setGridNumber]=useState(16);
  const [boxColor,setBoxColor]=useState("white");
  const [boxElements,addBoxElements]=useState([])//
  const [noEvenet,setNoEvent]=useState(false);

  useEffect(()=>{
    addBoxElements([]);
    setBoxColor("white");
    let elements=[];
    let divContainer=document.getElementsByClassName("container")[0];
    divContainer.style.gridTemplateRows=`repeat(${gridNumber},1fr)`;
    divContainer.style.gridTemplateColumns=`repeat(${gridNumber},1fr)`;
    for (let i = 0; i < gridNumber*gridNumber; i++) {
      const obj={"id":i,
              "isEntered":false
    }
      elements.push(obj);
    
    }
    
    addBoxElements(elements); 

  },[gridNumber]);




  const reset =()=>{
   
    const val=prompt("How many squares per side do you want?It must be minimum 16 and maximum 100");
    if(val>100 || val <16)
    return;
    setGridNumber(val);
    setNoEvent(false);

  }
  const color =()=>{
    clear();
    setBoxColor("color");
    setNoEvent(true);
  
  }
  const black =()=>{


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


    
   
  }
const changeBox=index=>e=>{

 let newArr = [...boxElements]; 
  newArr[index].isEntered =true; 
  addBoxElements(newArr); 
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
      <div className="divBtn">
        <button className="btn" onClick={reset} >Reset Board</button>
        <button className="btn"  onClick={black} >Black</button>
        <button className="btn"  onClick={clear}>Clear Board</button>
        <button className="btn"  onClick={color}>Random Color</button>
      </div>
     <div className="container">
    
     {boxElements.map((data, index) => {
      
        return (<div   onMouseEnter={noEvenet?changeBox(index):null} className={ data.isEntered?` box ${boxColor}`:" white box "} key={data.id}></div> ) 
      })}
    
       
     </div>
    </div>
  );
}

export default App;
