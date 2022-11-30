import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const AddAProduct = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const imageHost = process.env.REACT_APP_imgbb_key;

     const navigate = useNavigate();
    // console.log(imageHost);
    const handleaddproduct = data => {
      const image = data.image[0];
      const formData = new FormData();
      formData.append('image',image);
      const url = `https://api.imgbb.com/1/upload?key=${imageHost}`;
      fetch(url,{
        method:'POST',
        body:formData
      })
      .then(res=>res.json())
      .then(imgData=>{
        if(imgData.success){
            console.log(imgData.data.url);
            const product = {
                name:data.name,
                price:data.price,
                condition:data.condition,
                Location:data.Location,
                image:imgData.data.url
            }

            fetch('https://mobile-resale-server.vercel.app/addproducts',{
                method:'POST',
                headers:{
                    'content-type': 'application/json',
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                },
                body:JSON.stringify(product)
            })
            .then(res=>res.json())
            .then(result=>{
                console.log(result);
                toast.success(`${data.name} added successfully`)
                navigate('/dashboard/myproducts');
            })

        }
      })
    }
    return (
        <div className='w-96 p-11'>
            <p className='text-2xl font-bold text-primary'>Add A Product</p>

            <form onSubmit={handleSubmit(handleaddproduct)}>


                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Product Name</span>
                    </label>
                    <input type="text"
                        {...register("name", { required: 'Name is required' })}
                        className="input input-bordered w-full max-w-xs " />
                    {errors.name && <p className='text-red-700 font-semibold'>{errors.name?.message}</p>}
                </div>


                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <input type="number"
                        {...register("price", { required: 'price is required' })}
                        className="input input-bordered w-full max-w-xs " />

                </div>


                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">condition</span>
                    </label>
                    <select
                    {...register('condition')}
                    className="select select-bordered w-full max-w-xs">
                    <option>excellent</option>
                        <option>good</option>
                        <option>fair</option>
                    </select>
                </div>


                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Location</span>
                    </label>
                    <input
                    {...register('Location')}
                    type="text" placeholder="Location" className="input input-bordered w-full max-w-xs" />

                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Photo</span>
                    </label>
                    <input type="file"
                        {...register("image", { required: 'image is required' })}
                        className="input input-bordered w-full max-w-xs " />
                    {errors.img && <p className='text-red-700 font-semibold'>{errors.img.message}</p>}
                </div>




                <input className='btn btn-accent w-full mt-6 text-white' type="submit" value="Add Product" />
                {/* {
                    signupError && <p className='text-red-600 font-bold'>{signupError}</p>
                } */}

            </form>
        </div>
    );
};

export default AddAProduct;