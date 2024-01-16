import React,{useEffect,useState} from 'react';
// import Navbar from '../03.Components/Navbar';
import axios from 'axios'
import { NavLink} from "react-router-dom";


const HomePage = () => {
    const [data,setData] = useState([])

    useEffect (()=>{
        axios
        .get(`http://localhost:3000/recipes`)
        .then((res) => {setData(res.data.data)
        })
    },[])

    console.log(data);
    return (
        <div className="h-full w-full">
            <div className='bg-white py-4 px-8'>

                <div className='max-w-6xl flex justify-between m-auto'>
                    <h2 className='font-Grotesk-Black text-2xl tracking-tight'>Kebab master</h2>
                    <NavLink to="/login">
                        <button className='border border-solid border-slate-300 hover:bg-slate-100 duration-200 px-4 py-1 rounded'>Admin</button>
                    </NavLink>
                </div>
            </div>
            <div className='flex flex-wrap p-8 gap-8 m-auto'>
                {data.map((e, index)=> {
                    return(
                    <div key={index} className='bg-white min-w-64 w-80 h-52 rounded-lg shadow-sm hover:shadow-md duration-150  cursor-pointer max-w-52 flex flex-col'>
                    <img className='bg-neutral-400 w-full h-3/4 rounded-t-lg'></img>
                        <div className='p-2 flex flex-col gap-2'>
                            <h3 className=''>{e.name}</h3>
                        <button className='bg-orange-400 w-fit py-1 px-4 rounded-md text-white font-medium hover:bg-orange-500 duration-150' value={e.id}>Voir</button>
                        </div>
                    </div>
                    )
                })}    
            </div>
        </div>
    );
};

export default HomePage;
