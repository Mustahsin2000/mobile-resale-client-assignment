import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Context/AuthProvider';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';
import Loading from '../../Shared/Loading/Loading';

const MyOrders = () => {
    const { user } = useContext(AuthContext);

    const url = `https://mobile-resale-server.vercel.app/bookings?email=${user?.email}`;
    const { data : bookings = []} = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(url,{
                headers:{
                    authorization:`bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
           
            return data;
        }
        
    })
  
    
    return (
        <div>
            <h3 className='text-2xl font-bold text-center text-danger mb-6'>My Orders</h3>

            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th>Index</th>
                            <th>Product</th>
                            <th>Product-Info</th>
                            <th>Seller</th>
                            <th>Location</th>

                            <th></th>
                        </tr>
                    </thead>
                    <tbody>        
                       {
                           
                                (bookings?.length > 0) &&
                            
                            bookings?.map((booking, i) => <tr key={booking._id}>
                                <th>{i + 1}</th>

                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={booking.img} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {booking.mobile}
                                    <br />
                                    <span className="badge badge-ghost badge-sm">{booking.Resale_Price}</span>
                                </td>
                                <td>{booking.namee}
                                    <br />
                                    <span className="badge badge-ghost ">{booking.email}</span>
                                </td>
                                <th>
                                    <button  className="btn btn-ghost btn-xs">{booking.Location}</button>
                                </th>
                            </tr>)
                        
                        }
                       

                    </tbody>

                </table>
            </div>
       
        </div>
    );
};

export default MyOrders;