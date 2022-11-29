import React, { useContext } from 'react';
import { useNavigate, useRouteError } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';

const DisplayError = () => {
    const { logOut } = useContext(AuthContext);
    const error = useRouteError();
    const navigate = useNavigate();
    const handlelogout = () => {
        logOut()
            .then(() => {
                navigate('/login');

            })
            .catch(error => console.error(error))
    }
    return (
        <div>
            <p className='text-red-500'> something went wrong</p>
            <p className='text-red-400'>{error.statusText || error.message}</p>
            <h4 className='text-3xl'>Please <button onClick={handlelogout}>signOut</button></h4>
        </div>
    );
};

export default DisplayError;