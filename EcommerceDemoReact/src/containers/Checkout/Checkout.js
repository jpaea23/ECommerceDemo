import React, { useContext, useEffect, useState } from 'react';
import Cart from '../../components/Cart/Cart';
import { CartContext } from '../../hoc/Context/CartContext';
import { Link } from 'react-router-dom';
import { RemoveItemInArray, CalculatePurchase } from './Index';
import axios from 'axios';

function Checkout() {

    useEffect(() => {
        getShippingCost();
    })
    const [cart,setCart] = useContext(CartContext);
    const [shipping,setShipping] = useState(0);
    const [isError, setIsError] = useState(false);
    const [error, setError] = useState("");

    const getShippingCost = async () => {
        try {
            const response = await axios.post(`https://localhost:44397/api/Cart/ShippingCost`, cart)
            setShipping(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    const deleteProduct = (productId) => {
        const products = cart.products;
        const product = cart.products.find(x => x.id === productId);
        const updatedProducts = RemoveItemInArray(products, product)
        setCart({
            ...cart,    
            products : updatedProducts
        });
        
        getShippingCost();
    }

    const placeOrder = async () => {
        try {
            const response = await axios.post(`https://localhost:44397/api/Cart/PlaceOrder`, cart);
            if (response.status === 200)
            {
                window.location.href = "/Confirmation";
            }
        } catch(error) {
            setIsError(true);
            setError(error.message);
        }
    }
     
    const products = cart.products.map((x,i) => {
        return <Cart name={x.name}
            description={x.description}
            cost={x.cost}
            key={i}
            id={x.id}
            delete={deleteProduct}/>
    });

    const purchaseAmount = CalculatePurchase(cart.products);
    const isDisabled = (cart.products.length === 0);
    const noDataMessage = (isDisabled) ? <h3>You don't have any products to show.</h3> : "";
    const total = shipping + purchaseAmount;

    return (
        <div className="p-2">
            {noDataMessage}
           <div className="table-responsive">
                <table className="table table-bordered w-75 mx-auto rounded ">
                    <tbody>
                        {products}
                    </tbody>
                </table>
            </div>
            <div className="p-2 border rounded w-50">
               <div className="d-flex justify-content-between">
                    <h5>Purchase:</h5> 
                    <p>${purchaseAmount}</p>
                </div>
                <div className="d-flex justify-content-between">
                    <h5>Shipping:</h5> 
                    <p>${shipping}</p>
                </div>
                <div className="d-flex justify-content-between">
                    <h3>Total:</h3> 
                    <p>${total}</p>
                </div>
            </div>
            <div className="mt-2 d-flex flex-row-reverse w-50">
                <button disabled={isDisabled} onClick={placeOrder} className="btn btn-primary">
                    Place Order
                </button>
            </div>
            { (isError) ? (
                    <div>
                        <h6 className="bold">Something has gone wrong!</h6>
                        <p className="text-danger">{error}</p>
                    </div>
                ) : null}
            <div className="d-flex flex-row-reverse">
                <Link to="/">Continue shopping</Link>
            </div>
        </div>
    );
}

export default Checkout;