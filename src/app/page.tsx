"use client"

import { useState } from "react"

const Page = () =>{
  const [msg, setMsg] = useState('')
  
 return (


   

<div className=" container flex  flex-col mx-auto justify-center items-center w-screen h-screen bg-gray-400">
<div>Seu nome é {msg}</div>
<input type="text" className="text-xl p-4 text-black"
placeholder="Digite seu Nome"
value={msg}
onChange={(e)=> setMsg(e.target.value) }
/>

</div>
  )
}

export default Page;