
import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (item, tickets) => {
        setCart(prev => {
            const existingItemIndex = prev.findIndex(cartItem => cartItem.mid === item.mid);
            if (existingItemIndex !== -1) {
                // Update quantity of existing item
                const updatedCart = [...prev];
                updatedCart[existingItemIndex].tickets = tickets; // Set to latest tickets count
                return updatedCart;
            } else {
                // Add new item
                return [...prev, { ...item, tickets }];
            }
        });
    };

    const totalAmount = cart.reduce((sum, item) => sum + item.mcost * item.tickets, 0);

    return (
        <CartContext.Provider value={{ cart, addToCart, totalAmount }}>
            {children}
        </CartContext.Provider>
    );
};





















