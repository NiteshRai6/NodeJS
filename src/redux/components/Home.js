import React from "react";

function Home(props) {

    return (
        <div>
            <h1>Home Component</h1>

            <div className="cart-wrapper">

                <div className="image-wrapper item">
                    <img src='./images/iPhone14ProMax.jpeg' alt='iPhone' />
                </div>

                <div className="text-wrapper item">
                    <span>iPhone 14 Pro Max</span>
                    <span> Price: 160000 Rs</span>
                </div>

                <div className="btn-wrapper item">
                    <button onClick={() =>
                        props.addToCartHandler({ name: 'iPhone', price: 90000 })}>
                        Add To Cart</button>

                    <button className="remove-cart-btn" onClick={() =>
                        props.removeToCartHandler({ name: 'iPhone', price: 90000 })}>
                        Remove To Cart</button>
                </div>

            </div>
        </div>
    );
}
export default Home;