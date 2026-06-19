import React from 'react'

function UseEffect() {
    const[timer , setTimer]=useState(0);

    useEffect()=>{
        setTimeout((timer)=>timer+1);
    },1000
    };

    //fetch data api
    const[data , dataApi]=useState(null);
    useEffect(()=>{
        fetch('').then(response=>response.json())
        .then(data => setApiData(data.id));
    },[]);
  return (
    <div>UseEffect</div>
    <h2>{timer}</h2>
  
  )
}

export default UseEffect