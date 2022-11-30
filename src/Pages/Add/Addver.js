import React from 'react';

const Addver = ({ add }) => {
    const { name, image } = add;
    return (
        <div className="card  shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {name}
                    <div className="badge badge-secondary">ADD</div>
                </h2>
            </div>
        </div>
    );
};

export default Addver;