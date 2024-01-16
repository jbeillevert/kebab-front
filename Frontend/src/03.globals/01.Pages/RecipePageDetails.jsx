import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";


const RecipePageDetails = () => {
    const { id } = useParams();
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:3000/recipes/${id}`)
            .then((result) => {
                setData(result.data.data);
            })
            .catch((err) => {
                console.error("Error fetching datas : ", err);
            })
    }, [])


    return <div>
        <div className='bg-white py-4 px-8'>
            <div className='max-w-6xl flex justify-between m-auto'>
                <h2 className='font-Grotesk-Black text-2xl tracking-tight'>Kebab master</h2>
                <NavLink to="/login">
                    <button className='border border-solid border-slate-300 hover:bg-slate-100 duration-200 px-4 py-1 rounded'>Admin</button>
                </NavLink>
            </div>
        </div>
        <div className="flex justify-center items-center mt-5">
            {data && data.map((el, index) => {
                return (
                    <div key={index} className="bg-white min-w-64 rounded-xl shadow-sm max-w-52 p-5">
                        <h3 className="font-Grotesk-Extrabold text-3xl text-center">{el.name}</h3>
                        <div className="h-52 flex rounded-xl border-2 border-slater-600">
                            <img className="rounded-xl border-2 border-slater-600" src={el.picture} alt="" />
                        </div>
                        <div className="w-full h-[2px] mt-2 bg-slate-600" />
                        <p>Type : {el.type}</p>
                        <p>Description : {el.description}</p>
                        <p>Temps de cuisson : {el.cooking_time} minutes</p>

                    </div>
                )
            })}

        </div>
    </div>
}

export default RecipePageDetails;