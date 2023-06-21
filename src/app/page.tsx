"use client"

import { useState } from "react"
import { TodoItem } from "../../types/Todotype"

const Page = () =>{
const[input, setInput] = useState('')
const [list, setList] = useState<TodoItem[]>([

  {label:'fazer bolo', checked: false} ,
  {label:'fcomer pizza', checked: false},
  {label:'comprar pão', checked: false} 
]) 

const handleBtn = ()  => {
if (input !== '') {
setList([...list, {label: input, checked: false}])
}  
setInput("")
}

const deleteItem = (n: number) =>{
setList(list.filter((item, key) => n !==key))
}

const toggleItem = (index: number) =>{
let newList = [...list]

newList[index].checked = !newList[index].checked

setList(newList)
}

 return (
<div className="  flex  flex-col  items-center w-screen h-screen bg-slate-600">

<h1 className="text-4xl my-8 text-center">LISTA DE TAREFAS</h1>

<div className=" flex  bg-slate-400 flex-col md:flex-row justify-center items-center p-2 rounded-md w-fit">
<input type="text" 
className="  my-4 md:my-0 p-3 md:text-2xl text-black rounded-md mr-4 bg-none outline-none"
value={input}
onChange={e => (setInput(e.target.value))}
/>
<button className="md:text-2xl transition-all duration-300 bg-slate-600 hover:bg-slate-900 p-3 rounded-md " onClick={handleBtn}>Adicionar Tarefa</button>  
</div>


<ul className="mt-6 p-2">
 {list.map((i, index) => 
  <li key={index} 
  className={`text-2xl my-4 capitalize `}>
  <input type="checkbox" checked={i.checked}
  onClick={()=> toggleItem(index)}
  />
    {i.label} <button onClick={()=> deleteItem(index)} className="bg-red-600 p-1 px-2 rounded-md mx-4 hover:opacity-80">Deletar</button></li>
  )}
  
</ul>

</div>
  )


}

export default Page; 