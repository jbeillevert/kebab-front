import React,{useState} from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";




const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault()
    axios
        .post("http://localhost:3000/login", {email: email, password: password})
        .then(() => {
        navigate("/Admin")
    })
    .catch((err) => {
        console.warn("retour err", err);  
    });
}


    return (
        <div className='h-full min-h-screen w-full flex items-center justify-center '>
                <form action="" className='bg-white border-solid border-2 h-fit w-1/2 border-orange-600 flex flex-col justify-center p-16 rounded-lg gap-4' onSubmit={handleSubmit} >
                    <h1 className='font-black text-2xl'>Content de vous revoir</h1>
                    <p className='text-2xl'>Connectez-vous et créer vos recettes</p>
                    <div className='flex flex-col'>
                        <label htmlFor="email">Votre mail</label>
                        <input id='email' className={`border-2 border-solid border-orange-600 rounded-sm h-[32px] pl-5 `} onChange={(event) => setEmail(event.target.value)} placeholder="Email@NomDeDomaine.com" type="text" />
                    </div>
                    <div className='flex flex-col gap'>
                        <label htmlFor="password">Votre password</label>
                        <input id='password' type="password" className={`border-2 border-solid border-orange-600 rounded-sm h-[32px] pl-5`} onChange={(event) => setPassword(event.target.value)} placeholder="Password"/>
                    </div>
                    <button className='bg-orange-600 rounded-xl m-5 py-2 text-white' type='submit'>Se Connecter</button>
                    <div className=' w-full flex flex-row justify-center gap-5 items-center'>
                        <div className='h-[1px] w-1/2 bg-orange-600 justify-center'></div>
                    </div>
                </form>
        </div>
    );
};

export default Login;