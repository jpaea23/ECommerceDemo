import React from 'react';

const Cart = (props) => {
    return (
        <tr>
            <td>{props.name}</td>
            <td>{props.description}</td>
            <td>${props.cost}</td>
        </tr>
    );
}

export default Cart;