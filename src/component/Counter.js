 import React, { useState } from 'react';
import './counter.css';

 
 const Counter = () => {

 const [count,setCount]= useState(0)

   return (
     <div className='container'>
        <h1 className='font-bold'>Counter App</h1>
        <div>
            
        </div>
       <div>
        <h2 className='font-extrabold'  >count:

            <span className='ml-4 display'>{count}</span>
        </h2>
        <div className='button-group'>
            <button onClick={()=>setCount(count+1)} className='button increment'>Increment</button>
        <button onClick={()=>setCount(count-1)} className='ml-4 button decrement' >Decrement</button>
        {/* <button  onClick={()=>setCount(0)}className='ml-4'>Reset</button> */}
        </div>
       </div>
     </div>
   )
 }
 
 export default Counter
 