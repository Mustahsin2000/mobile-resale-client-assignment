import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';
import Loading from '../../Shared/Loading/Loading';

const MyProducts = () => {

    const [deleteProduct,setDeletingproduct] = useState(null);

    const closeModal = () =>{
        setDeletingproduct(null);
    }
    const { data: products,isLoading,refetch } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            try {
                const res = await fetch('http://localhost:5000/addproducts', {
                    headers: {
                        authorization: `bearer ${localStorage.getItem('accessToken')}`

                    }
                });
                const data = await res.json();
                return data;
            } catch (error) {

            }
        }
    })

    if(isLoading){
        return <Loading></Loading>
    }

    const handledeleteproduct = product => {
        fetch(`http://localhost:5000/addproducts/${product._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch();
                    toast.success(` ${product.name}  Deleted Successfully`)
                }
            })
    }
    return (
        <div>
            {/* <h2 className='text-3xl font-bold text-primary mb-6'>Manage Doctors:{doctors?.length}</h2> */}
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th>

                            </th>
                            <th>Product</th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Location</th>
                            <th>Delete</th>
                            <th>Payment</th>
                           
                        </tr>
                    </thead>
                    <tbody>
                        {/* <!-- row 1 --> */}
                        {
                          
                            products.map((product, i) => <tr key={product._id}>
                                <th>
                                    <label>
                                        {i + 1}
                                    </label>
                                </th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={product.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td className='font-semibold text-primary'>
                                    {product.name}
                                    <br />
                                   
                                </td>
                                <td className='font-bold'>{product.price}</td>
                                <th>
                                    <button className="btn btn-ghost btn-xs">{product.Location}</button>
                                </th>
                                <th>
                                    <label  onClick={()=>setDeletingproduct(product)}   htmlFor="confirmation-modal" className="btn btn-outline  btn-primary">Delete</label>

                                </th>
                                <th>
                                    {
                                        product.price && !product.paid && 
                                        <Link to={`/dashboard/payment/${product._id}`}><button className='btn btn-primary btn-outline'>Pay</button></Link>
                                    }
                                    {
                                        product.price && product.paid &&
                                        <span className='text-primary'>Sold</span>
                                    }
                                    {
                                        product.price && !product.paid &&
                                        <Link to='/add'><button><span className='text-primary '>Add</span></button></Link>
                                    }

                                </th>
                            </tr>)
                        }
                    </tbody>


                </table>
            </div>
            {
                deleteProduct && <ConfirmationModal
                    title={`Are you sure you want to delete?`}
                    message={`If you delete ${deleteProduct.name}. It can't be data back`}
                    closeModal={closeModal}
                    successAction={handledeleteproduct}
                    modalData={deleteProduct}
                    successButtonName="Delete"
                ></ConfirmationModal>
            }
        </div>
    );
};

export default MyProducts;