import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { NavLink } from "react-router-dom";
import { FaPencilAlt, FaTrash } from "react-icons/fa";

const Admin = () => {

    const [data, setData] = useState([])
    useEffect(() => {
        axios
            .get(`http://localhost:3000/recipes`)
            .then((res) => {
                setData(res.data.data)
            })
    }, [])

    const handleDeleted = (e) => {
        if(e !== null){
            axios
            .delete(`http://localhost:3000/recipes/${e}`)
        }
        
        
        
    }
    data
    return (
        <div className='h-full w-full'>
            <div className='bg-white py-4 px-8'>

                <div className='max-w-6xl flex justify-between m-auto'>
                    <h2 className='font-Grotesk-Black text-2xl tracking-tight'>Kebab master</h2>
                    <NavLink to="/">
                        <button className='border border-solid border-slate-300 hover:bg-slate-100 duration-200 px-4 py-1 rounded'>Home</button>
                    </NavLink>
                </div>
            </div>
            <div className='flex justify-center py-10 min-h-screen'>
                <div className='flex flex-col  w-1/2 h-fit items-end'>
                    <button className='bg-orange-600 text-white py-2 px-5 my-2 w-fit h-fit rounded-xl font-bold'>Ajouter</button>
                    {data.map((e) => { 
                        return (
                            <div className='h-fit flex flex-row justify-between border-solid border-2 shadow-md my-1 py-2 rounded-lg w-full gap-5 px-5 bg-white'>
                                <div className='flex flex-row w-1/2 justify-between'>
                                    <h3 className='font-bold'>{e.name}</h3>
                                    <p>{e.creation_date }</p>
                                </div>
                                <div className='flex gap-5'>
                                    <button><FaPencilAlt className='text-blue-600' />  </button>
                                    <button onClick={() => handleDeleted(e.id)}><FaTrash className='text-red-500'/>  </button>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
};

export default Admin;