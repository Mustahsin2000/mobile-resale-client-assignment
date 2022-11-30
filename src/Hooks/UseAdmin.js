import React, { useEffect, useState } from 'react';

const UseAdmin = email => {
    const [isAdmin, setIsAdmin] = useState(false);
    const [isAdminLoading, setisAdminLoading] = useState(true);
    useEffect(() => {
        if (email) {
            fetch(`https://mobile-resale-server.vercel.app/users/admin/${email}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setIsAdmin(data.isAdmin);
                    setisAdminLoading(false);
                })
        }
    }, [email])
    return [isAdmin, isAdminLoading]
};

export default UseAdmin;