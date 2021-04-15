import React from 'react';

const Products = (props) =>
{
    return (
        <div className="col-6 col-md-3 p-2 m-0">
            <div className="border">
                <div className="text-center">
                 <img className="img-fluid mx-auto border w-50 rounded" src="https://cdn1.vectorstock.com/i/thumb-large/46/50/missing-picture-page-for-website-design-or-mobile-vector-27814650.jpg"/>
                </div>
                <div className="m-2 w-75 mx-auto">
                    <div className="d-flex justify-content-between">
                        <p className="">{props.name}</p>
                        <p className="">{props.cost}</p>
                    </div>
                    <p className="">{props.description}</p>
                    <button className="btn btn-block btn-primary">Add to cart</button>
                </div>
            </div>
        </div>
    );
}

export default Products;