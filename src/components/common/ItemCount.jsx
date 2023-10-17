import { useState } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {
    const [count, setCount] = useState(initial);

    const handleIncrement = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    };

    const handleDecrement = () => {
        if (count > initial) {
            setCount(count - 1);
        }
    };

    //agrego al carrito
    const handleAddToCart = () => {
        if (count > 0) {
            onAdd(count);
        }
    };

    return (
        <div>
            <button onClick={handleDecrement} disabled={count <= initial}>-</button>
            <span>{count}</span>
            <button onClick={handleIncrement} disabled={count >= stock}>+</button>
            <button onClick={handleAddToCart} disabled={count === 0}>Agregar al carrito</button>
        </div>
    );
}

export default ItemCount;