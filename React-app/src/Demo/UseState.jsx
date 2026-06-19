import React, { useState } from 'react'

function UseState() {
    const[color , setColor]=useState('red');//react predefined in built function 
    const mouseover=()=>{
        setColor(color=='red'? 'blue':'red');

    }
    //inc ,dec and reset
    const[count , setCount]=useState(0);

    const increment=()=>{
        setCount(count+1);
    }
    const decrement=()=>{
        setCount(count-1);
    }
    const reset=()=>{
        setCount(0);
    }

  return (
  <>
    <div>Use State </div>
    <p style={{color:color}} onMouseOver={mouseover}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis beatae modi dolorum, animi nobis officia culpa nihil ipsum harum voluptate. Doloremque earum a minima, dolorem sequi optio voluptatibus fuga libero.</p>
    <div style={{backgroundColor:"green"}}>
        <h2>{count}</h2>
        <button onclick={increment }>+</button>
        <button onclick={decrement }>-</button>
        <button onclick={reset}>Reset</button>
    </div>
  </>
  )
}

export default UseState