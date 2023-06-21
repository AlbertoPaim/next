// import { students } from "../data/students"

// export const Grade = ()=>{
// return(
//     <div className="">
//         <table className=" w-full text-left mx-auto container">
//             <thead className=" bg-slate-800">
//                 <tr className="">
//                     <th className="p-4">Name</th>
//                     <th className="p-4">Status</th>
//                     <th className="p-4">Grade1</th>
//                     <th className="p-4">Grade2</th>
//                     <th className="p-4">Final Grade</th>
//                 </tr>
//             </thead>
//             <tbody className="bg-gray-500">
//                 {students.map(per => 
                    
//                     <tr key={per.id}className="border-b border-slate-700">
//                     <td className="p-4">
//                         <div className="flex gap-4 items-center">
//                             <img className = "w-10 rounded-full"src={per.avatar} alt = {per.name}/>
//                             <div>
//                                 <p>{per.name}</p>
//                                 <p>{per.email}</p>
//                             </div>
//                         </div>   
//                     </td>

//                     <td className="p-4">
//                     {per.active === true?<button className="py-1 px-2 bg-green-500 rounded-md mx-4">Ativo</button>  :<button className="py-1 px-2 bg-red-500 rounded-md mx-4">Inativo</button> }
                        
//                     </td>
//                     <td className="p-4">{per.grade1}</td>
//                     <td className="p-4">{per.grade2}</td>
//                     <td className="p-4"><td>{((per.grade1 + per.grade2) / 2).toFixed(1)}</td></td>
//                     </tr>
//                     )}
                
//             </tbody>
//         </table>
//     </div>
// )


// }