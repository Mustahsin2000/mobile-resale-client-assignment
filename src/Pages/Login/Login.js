import React, { useContext, useState } from 'react';
import { GoogleAuthProvider } from 'firebase/auth';
import { Link, useLocation, useNavigate,  } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../Context/AuthProvider';
const Login = () => {
    const { register, formState:{errors},handleSubmit } = useForm();
    const {signIn} = useContext(AuthContext);
    const {providerLogin} = useContext(AuthContext);

    const googleProvider = new GoogleAuthProvider();

    // const [loginUserEmail,setLoginUserEmail] = useState('');
    // const [token] = useToken(loginUserEmail);


    const handlegooglesignIN = () =>{
        providerLogin(googleProvider)
        .then(result=>{
            const user = result.user;
            console.log(user);
        })
        .catch(error=>console.error(error))

    }

    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    // if(token){
    //     navigate(from,{replace:true});
    // }

    const [loginerror,setloginerror] = useState('');

    const handleLogin = data =>{
    console.log(data);
    setloginerror('');
    signIn(data.email,data.password)
    .then(result=>{
        const user = result.user;
        console.log(user);
        // setLoginUserEmail(data.email);
        navigate(from,{replace:true});

    })
    .catch(error=>
        {
            console.error(error.message);
            setloginerror(error.message);
        })
    }
    // onSubmit={handleSubmit(handleLogin)}
    return (
        <div className='h-[800px]  flex justify-center items-center'>
            <div className='w-96 p-7'>
            <h2 className='text-xl font-bold  mb-3'>Login</h2>
            <form onSubmit={handleSubmit(handleLogin)}>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="text" 
                    {...register("email",{required:'Email Address is required'})}  
                    className="input input-bordered w-full max-w-xs "/>
                    {errors.email && <p className='text-red-700'>{errors.email?.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">password</span>
                    </label>
                    <input type="password"
                     {...register("password",{required:'password is required',
                     minLength:{value:6,message:'password must be 6 characters'}
                    })}  
                     className="input input-bordered w-full max-w-xs"/>
                    {errors.password && <p className='text-red-700 font-semibold'>{errors.password?.message}</p>}
                    <label className="label">
                        <span className="label-text">Forget password?</span>
                    </label>
                </div>
               <input className='btn btn-accent w-full mt-3 text-white' type="submit" value="login" />
               <div>
                {loginerror && <p className='text-red-500 font-bold mt-3 mr-3'>{loginerror}</p>}
               </div>
            </form>
            <p className='text-sm ml-6 mt-3'>New to doctors-portal ? <Link className='text-secondary' to='/signup'>create new account</Link></p>
            <div className='divider'>OR</div>
            <button className='btn btn-outline w-full' onClick={handlegooglesignIN} >CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Login;