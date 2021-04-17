import axios from 'axios';
import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../Context/CartContext';

const Layout = (props) => {

    useEffect(() => {
        getCart();
    },[])

    const getCart = async () => {
        try {
            const response = await axios.get(`https://localhost:44397/api/Cart`)
            setCart(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    const [cart,setCart] = useContext(CartContext);
    const count = cart.products.length;

    return (
        <div>
            <main>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark justify-content-between sticky-top">
                    <Link to="/" className="navbar-brand">Products Shop</Link>
                    <Link to="/checkout" className="btn btn-sm btn-light">
                        CART <span className="badge badge-primary">{count}</span>
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navData" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </nav>
                {props.children}
                <footer className="bg-dark fixed-bottom">
                    <span className="text-white">Footer</span>
                </footer>
            </main>
        </div>
    );
}

export default Layout;