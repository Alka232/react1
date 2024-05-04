import React, { useState } from 'react'
const Counter = ()=>{
     const [count1,setCount1]=useState(0)
      const handleIncrement = (()=>{
            setCount1(count1+1);
            console.log(count1);
      })

      const handleDecrement =(()=>{
        if(count1>0){
        setCount1(count1-1);
        console.log(count1);
    }
      })
      const handleReset = () => {
        setCount1(0)
      }

    return(
        <div className='py-32' >
            <h1 className="text-white text-9xl text-center">{count1}</h1>
            <div className='flex gap-8 justify-center pt-10'>
                <button className="border-4 border-green-700 rounded-lg py-2 px-5 bg-green-400 text-black font-bold" onClick={() => handleIncrement()}>Increment</button>
                <button className="border-4 border-blue-700 rounded-lg py-2 px-5 bg-blue-400 text-black font-bold" onClick={()=>handleReset()}>Reset</button>
                <button className="border-4 border-red-700 rounded-lg py-2 px-5 bg-red-400 text-black font-bold" onClick={()=>handleDecrement()}>Decrement</button>
            </div>
        </div>
    )
}
export default Counter