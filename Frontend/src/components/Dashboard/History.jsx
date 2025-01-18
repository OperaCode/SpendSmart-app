import React from 'react'
import { CiMenuKebab } from "react-icons/ci";
import SideBar from '../Layouts/SideBar';

const transactions = [
  {
    title: "Orlando",
    category: "Bank account",
    method: "Bank Transfer",
    date: Date.now(),
    amount: "$4,850.00",
  },
  {
    title: "PayPal",
    category: "",
    method: "Credit Card",
    date: Date.now(),
    amount: "$3,600.00",
  },
  {
    title: "Netflix",
    category: "Entertainment",
    method: "Bank Transfer",
    date: Date.now(),
    amount: "$400.00",
  },
];
const History = () => {
  return (
   <div className="lg:flex items-cent bg-indigo-600 p-1 font-bodyFont">
    <SideBar/>
    <div className='flex w-full'>
    <div className="w-full p-6 bg-white rounded-lg mt-4 shadow-md">
         {/* Header */}
         <div className="flex justify-between items-center  md:text-lg">
           <div>
             <h2 className="text-s md:text-lg font-semibold text-gray-800">
               Recent Transactions
             </h2>
             <p className=" text-xs p-2 md:text-gray-500">Check your transaction history</p>
           </div>
           <button className="text-sm p-3 md:px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
             See all
           </button>
         </div>
   
         {/* Transactions Table */}
         <div className="border rounded-lg">
           <table className="w-full text-xs md:text-lg">
             <thead>
               <tr className="bg-gray-100 ">
                 <th className="text-center text-base text-gray-700">Title</th>
                 <th className="text-center text-base  text-gray-700 ">Category</th>
                 <th className="text-center text-base text-gray-700 hidden md:block">Transaction Method</th>
                 <th className="text-center text-base  text-gray-700">Date</th>
                 <th className="text-center text-base text-gray-700">Amount</th>
                 <th className="text-center  text-base text-gray-700 md:hidden">Action</th>
               </tr>
             </thead>
             <tbody>
               {transactions.map((transaction, index) => (
                 <tr
                   key={index}
                   className={`${
                     index % 2 === 0 ? "bg-white" : "bg-gray-50"
                   } hover:bg-gray-100 `}
                 >
                   <td className="text-center text-base p-2 text-gray-800">{transaction.title}</td>
                   <td className="text-center text-base p-2 text-gray-800 ">{transaction.category}</td>
                   <td className="text-center text-base p-2 hidden md:block text-gray-600">{transaction.method}</td>
                   <td className="text-center text-base p-2 text-gray-600">{transaction.date}</td>
                   <td className="text-center text-base p-2 text-green-500">
                     {transaction.amount}
                   </td>
                   <td className="p-2 md:px-6 text-base md:hidden text-indigo-900">
                   <CiMenuKebab className="m-auto" />
                   </td>
                 </tr>
               ))}
             </tbody>
           </table>
         </div>
       </div>
    </div>
   </div>
  )
}

export default History