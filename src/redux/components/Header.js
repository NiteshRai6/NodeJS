import React from "react";

function Header(props) {
    console.log(props.data);
    return (
        <div>

            <div className="add-to-cart">
                <span className="cart-count"> {props.data.length} </span>
                <img src='./images/cart.jpeg' alt='Cart Pic' />
            </div>
        </div>
    )
}
export default Header;