import React from "react";
import { Button, Typography, IconButton, Divider } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./Cart.css";

const CartPage = ({ cart, setCart }) => {
    const handleIncrement = (productId) => {
        setCart((prevCart) =>
            prevCart.map((item) =>
                item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
            )
        );
    };

    const handleDecrement = (productId) => {
        setCart((prevCart) =>
            prevCart
                .map((item) =>
                    item.id === productId
                        ? { ...item, quantity: Math.max(1, item.quantity - 1) }
                        : item
                )
                .filter((item) => item.quantity > 0) // Remove item if quantity becomes 0
        );
    };

    const handleRemoveItem = (productId) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
    };

    const handleClearCart = () => {
        setCart([]);
    };

    const calculateTotal = () => {
        return cart.reduce((acc, item) => acc + item.quantity * item.price, 0).toFixed(2);
    };

    return (
        <div className="cart-page-container">
            <div className="cart-title-container">
                <IconButton>
                    <ShoppingCartIcon fontSize="large" color="primary" />
                </IconButton>
                <Typography variant="h4" className="cart-title">
                    Your Cart
                </Typography>
            </div>
            {cart.length > 0 ? (
                <div className="cart-items-container">
                    {cart.map((item) => (
                        <div key={item.id} className="cart-item">
                            <div className="cart-item-details">
                                <img
                                    src={item.img}
                                    alt={item.orderItem}
                                    className="cart-item-image"
                                />
                                <div className="cart-item-info">
                                    <Typography variant="body1" className="item-name">
                                        {item.orderItem}
                                    </Typography>
                                    <Typography variant="body2" className="item-price">
                                        ₹{item.price}
                                    </Typography>
                                </div>
                            </div>

                            <div className="quantity-controls">
                                <Button
                                    size="small"
                                    variant="contained"
                                    color="secondary"
                                    onClick={() => handleDecrement(item.id)}
                                    className="quantity-btn"
                                >
                                    -
                                </Button>
                                <Typography>{item.quantity}</Typography>
                                <Button
                                    size="small"
                                    variant="contained"
                                    color="secondary"
                                    onClick={() => handleIncrement(item.id)}
                                    className="quantity-btn"
                                >
                                    +
                                </Button>
                            </div>

                            {/* Remove button */}
                            <IconButton
                                color="error"
                                onClick={() => handleRemoveItem(item.id)}
                                className="remove-btn"
                            >
                                Remove
                            </IconButton>
                        </div>
                    ))}
                </div>
            ) : (
                <Typography>Your cart is empty.</Typography>
            )}

            {/* All Clear Button */}
            {cart.length > 0 && (
                <div className="cart-summary">
                    <Divider />
                    <div className="cart-total">
                        <Typography variant="h6">Total: ₹{calculateTotal()}</Typography>
                    </div>
                    <Button variant="contained" color="secondary" onClick={handleClearCart} className="clear-cart-btn">
                        Clear Cart
                    </Button>
                </div>
            )}
        </div>
    );
};

export default CartPage;
