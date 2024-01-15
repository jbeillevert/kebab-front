import React from 'react';

const Login = () => {
    return (
        <div className='h-full w-full flex items-center justify-center'>
                <form action="submit" className='bg-white border-solid border-2 h-1/2 w-1/2 border-orange-600 flex flex-col justify-center p-16 rounded-lg gap-4'>
                    <h1 className='font-black text-2xl'>Content de vous revoir</h1>
                    <p className='text-2xl'>Connectez-vous et créer vos recettes</p>
                    <div className='flex flex-col'>
                        <label htmlFor="">Votre mail</label>
                        <input className="border-2 border-solid border-orange-600 rounded-sm h-[32px] pl-5" placeholder="Email@NomDeDomaine.com" type="text" />
                    </div>
                    <div className='flex flex-col gap'>
                        <label htmlFor="">Votre password</label>
                        <input className="border-2 border-solid border-orange-600 rounded-sm h-[32px] pl-5" placeholder="Password" type="text" />
                    </div>
                    <button className='bg-orange-600 rounded-xl m-5 py-2 text-white' type='submit'>Se Connecter</button>
                    <div className=' w-full flex flex-row justify-center gap-5 items-center'>
                        <div className='h-[1px] w-[11rem] bg-orange-600 justify-center'></div>
                        <p className='text-orange-600 font-bold'>ou</p>
                        <div className='h-[1px] w-[11rem] bg-orange-600'></div>
                    </div>
                    
                    <p>Vous n'avez pas encore de compte ? <button className='text-orange-600 font-bold'>Créer un compte</button>
                    </p>
                </form>
        </div>
    );
};

export default Login;