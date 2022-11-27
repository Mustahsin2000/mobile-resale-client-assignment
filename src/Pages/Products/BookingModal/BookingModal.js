import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';

const BookingModal = ({mobile,setMobile}) => {
    const {name,Resale_Price,sellers_name,Location} = mobile;
    const {user} = useContext(AuthContext);

    const handleBook = event =>{
        event.preventDefault();
        const form = event.target;
        const namee = form.namee.value;
        const email = form.email.value;
        const price = form.price.value;
        const phone = form.phone.value;
        const sellername = form.sellername.value;
        const location = form.location.value;
        console.log(name,email,price,phone,sellername,location);

        const booking = {
            sellers_name:sellername,
            Location:location,
            namee,
            mobile:name,
            email,
            phone,
            Resale_Price:price
        }
        console.log(booking);
        setMobile(null);
    }
    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <form onSubmit={handleBook} className='grid grid-cols-1 gap-3 mt-3'>
                    <input name='namee' type="text" defaultValue={user?.displayName} disabled className="input w-full input-bordered input-primary" />
                    <input name='email' type="email" defaultValue={user?.email} disabled  className="input w-full input-bordered " />
                    <input name='price' type="text" defaultValue={Resale_Price} className="input w-full input-bordered " />
                    <input name='phone' type="text" placeholder="Phone" className="input w-full " /> 
                    <input name='sellername' type="text" defaultValue={sellers_name} className="input w-full input-bordered " />
                    <input name='location' type="text" defaultValue={Location} className="input w-full input-bordered " />
                    <br />
                    <input className='btn btn-circle btn-secondary w-full max-w-xsm' type="submit" value="Book" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;