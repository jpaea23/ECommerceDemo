import React from 'react';
import {Link} from 'react-router-dom';

const Layout = (props) => {
    return (
        <div>
            <main>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark justify-content-between sticky-top">
                    <h2 className="navbar-brand">Products Shop</h2>
                    <Link to="/checkout" className="btn btn-sm btn-light">
                        Cart <span className="badge badge-primary">2</span>
                    </Link>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navData" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
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