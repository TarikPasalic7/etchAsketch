import React,{useState,useEffect} from 'react';

const Box=({boxNumber,boxColor,isClear})=>{
const [isEntered,setIsEntered]=useState(false);
console.log("isentered",isEntered);

const changeBox =(e) =>{
//

setIsEntered(true);
isClear=true;
console.log(isClear);

}

    return(
     
   <div onMouseEnter={changeBox}   className={  isEntered?` box ${boxColor}`:" white box "}>
         
   
   {
    
  boxNumber}
  

   </div> 
  

    )

    
}

export default Box;