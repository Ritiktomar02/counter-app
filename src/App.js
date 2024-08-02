import { useState } from "react";

function App(){
    
  const [count,setcount]=useState(0);
  return(
    
    <div className=" bg-gray-800 w-screen h-screen flex-col gap-y-5 flex justify-center items-center">

      <div className="text-xs text-blue-400">Increament & Decrement</div>

      <div className="flex justify-around w-[200px] py-3 bg-white rounded-sm font-bold text-2xl">
        <button onClick={()=>setcount(count+1)} >+</button>
        <div className=" border-l-2 border-r-2  border-gray-300 h-full px-8">{count}</div>
        <button onClick={()=>setcount(count-1)}>-</button>
      </div>

      <button onClick={()=>setcount(0)} className="px-6 bg-blue-400 text-white py-1 rounded-sm">Reset</button>
    </div>
  )

}

export default App;