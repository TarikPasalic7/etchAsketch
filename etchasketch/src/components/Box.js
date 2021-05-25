import React,{useState} from 'react';

const Box=({boxNumber,boxColor})=>{
 
    const [isEntered,setIsEntered]=useState(false);
const changeBox =(e) =>{

setIsEntered(true);

}

    return(
     
   <div onMouseEnter={changeBox}  className={isEntered?` box ${boxColor}`:"white box "}>
         
   
   {
    
  boxNumber}
  

   </div> 
  

    )

    
}

export default Box;