import React, { useContext } from 'react';
import Cart from '../../components/Cart/Cart';
import { CartContext } from '../../hoc/Context/CartContext';
import { Link } from 'react-router-dom';

function Checkout() {

    const [cart,setCart] = useContext(CartContext);
     
    const products = cart.products.map((x,i) => {
                return <Cart name={x.name}
                    description={x.description}
                    cost={x.cost}
                    key={i}/>
                });
    return (
        <div className="p-2">
           <div className="table-responsive">
                <table className="table table-bordered w-75 mx-auto ">
                    <tbody>
                        {products}
                    </tbody>
                </table>
            </div>
            <div className="d-flex flex-row-reverse">
                <Link to="/">Continue shopping</Link>
            </div>
        </div>
    );
}

export default Checkout;