import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Typography } from "@mui/material";
import { useCartContext } from "../../context/CartContext";
const CartWidget = () => {
    const { cart } = useCartContext();
    const getQuantityItems = () => {
        let quantity = 0
        if (cart.items.length > 0) {
            for (let index = 0; index < cart.items.length; index++) {
                quantity += cart.items[index].quantity;
            }
        }

        return quantity;
    }

    let quantity = getQuantityItems();

    console.log(cart)
    return (
        <div style={{ display: "flex", alignItems: "center" }}>
            <ShoppingCartIcon />
            <Typography>{quantity}</Typography>
        </div>


    );
}

export default CartWidget;