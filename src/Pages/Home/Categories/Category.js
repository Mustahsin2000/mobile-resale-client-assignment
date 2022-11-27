import React from 'react';
import { Link } from 'react-router-dom';


const Category = ({ category }) => {
    const { img, title, description,_id } = category;
    return (
        <div className="card  shadow-xl p-3">
            <figure><img className='h-36 ' src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <Link to='/products'><button className="btn btn-primary">products</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Category;