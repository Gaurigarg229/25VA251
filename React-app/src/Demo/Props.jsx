import React from 'react'

function Props(props) {
  return (
    <>

   <div style={{border:"2px solid black" , width:"200px" , margin:"10px auto"}}>
     <h1>Student Details</h1>
    <h2>{props.nae}</h2>
    <h2>{props.rollno}</h2>
    <h2>{props.marks}</h2>
   </div>
    </>

   
  )
}

export default props