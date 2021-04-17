import React from 'react';

const Cart = (props) => {
    return (
        <tr>
            <td>{props.name}</td>
            <td>{props.description}</td>
            <td>${props.cost}</td>
            <td><button className="btn btn-sm text-primary" onClick={() => props.delete(props.id)}>Delete</button></td>
        </tr>
    );
}

export default Cart;