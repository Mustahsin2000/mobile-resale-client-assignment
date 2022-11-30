import React, { useContext, useState } from 'react';

import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import useToken from '../../Hooks/UseToken';


const Signup = () => {
    const { register, formState:{errors},handleSubmit } = useForm();

    const {createUser,updateUser} = useContext(AuthContext);

    const [signupError,setsignuperror] = useState('');

    const [createdUserEmail,setcreatedUserEmail] = useState(''); 
    const [token] = useToken(createdUserEmail);
    // const [createdUserEmail,setcreatedUserEmail] = useState('');
    // const [token] = useToken(createdUserEmail);

    const navigate = useNavigate();

    if(token){
        navigate('/');
    }

    // if(token){
    //     navigate('/');
    // }

    const handleSignup = (data) =>{
    // console.log(data);
    setsignuperror('');
    createUser(data.email,data.password)
    .then(result=>{
        const user = result.user;
        console.log(user);
        toast.success('user sign up successfully');
        const userInfo = {
            displayName : data.name
        }
        updateUser(userInfo)
        .then(()=>{
            saveUser(data.name,data.email );
            
         })
        .catch(err=>console.log(err))
    })
    .catch(error=>{
        
        console.log(error)
        setsignuperror(error.message);
    })
    }


    const saveUser = (name,email) =>{
        const user = {name,email};
        fetch('https://mobile-resale-server.vercel.app/users',{
            method:'POST',
            headers:{
                'content-type' : 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res=>res.json())
        .then(data=>{
            // setcreatedUserEmail(email);
            // console.log(data)
            // getusertoken(email);
            setcreatedUserEmail(email);
            
            
        })
    }

 
    return (
        <div className='h-[800px]  flex justify-center items-center'>
        <div className='w-96 p-7'>
            <h2 className='text-xl font-bold  mb-3'>Signup</h2>
          
            <form onSubmit={handleSubmit(handleSignup)}>


            <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text"
                        {...register("name", { required: 'Name is required' })}
                        className="input input-bordered w-full max-w-xs " />
                    {errors.name && <p className='text-red-700 font-semibold'>{errors.name?.message}</p>}
                </div>


                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="text"
                        {...register("email", { required: 'Email Address is required' })}
                        className="input input-bordered w-full max-w-xs " />
                    {errors.email && <p className='text-red-700'>{errors.email?.message}</p>}
                </div>


                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">password</span>
                    </label>
                    <input type="password"
                        {...register("password", {
                            required: 'password is required',
                            minLength: { value: 6, message: 'password must be 6 characters'},
                            pattern:{value:/(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z])/,
                             message:'password must be strong'
                        }
                        })}
                        className="input input-bordered w-full max-w-xs" />
                    {errors.password && <p className='text-red-700 font-semibold'>{errors.password?.message}
                    </p>}
                </div>


                
                <input className='btn btn-accent w-full mt-6 text-white' type="submit" value="signup" />
            {
                signupError && <p className='text-red-600 font-bold'>{signupError}</p>
            }
            
            </form>
            <p className='text-sm ml-6 mt-3'>Already have an account <Link className='text-secondary' to='/login'>please log in</Link></p>
            <div className='divider'>OR</div>
            <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
        </div>
    </div>
    );
};

export default Signup;