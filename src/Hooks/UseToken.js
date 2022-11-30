import { useEffect, useState } from "react";

const UseToken = email => {
    const [token, setToken] = useState('');
    useEffect(() => {
       if(email){
        fetch(`https://mobile-resale-server.vercel.app/jwt?email=${email}`)
        .then(res => res.json())
        .then(data => {
            if (data.accessToken) {
                localStorage.setItem('accessToken', data.accessToken);
                setToken(data.accessToken);
                // navigate('/');
            }
        });
       }
    }, [email]);
    return [token];
}
export default UseToken;