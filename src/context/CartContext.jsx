import { createContext, useContext, useState } from "react";

export const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);


const CartProvider = ({ children }) => {
    const [cart, setCart] = useState({ items: [], total: 0 })

    const addToCart = (product) => {
        if (cart.lenght > 0) {
        setCart((prevCart) => ({
            ...prevCart, items: [...prevCart.items, product],
            total: prevCart.total + product.price * product.quantity
        }))
    } else {
        setCart({ items: [products], total: product.price * product.quantity})
    }
    }

    return (
        <CartContext.Provider value={{ cart, addToCart }}>
            {children}
        </CartContext.Provider>
    )


}
export default CartProvider;