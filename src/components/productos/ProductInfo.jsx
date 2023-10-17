import { Modal, Typography } from "@mui/material";
import PaymentIcon from "@mui/icons-material/Payment"
import ItemCount from "../common/ItemCount";
import { useContext, useState } from "react";
import { useCartContext } from "../../context/CartContext";

const ProductInfo = ({ producto, open, setOpen }) => {
    const { id, image, title, price, isAnOffer, itHasDues, stock } = producto
    const { addToCart } = useCartContext()
    const [quantityInCart, setQuantityInCart] = useState(0);


    const handleClose = () => {
        setOpen(prev => !prev)
    }

    const handleAddToCart = (count) => {

        setQuantityInCart(count);
        console.log('agregado', count)
        if (count > 0) {
            addToCart({
                id, title, image, price, quantity: count
            })
        }
    };


    return (<>
        <Modal open={true} onClose={handleClose}>
            <div className="modal-content">
                <img style={{ width: "70%" }} src={image} />
                <Typography variant="h4">{title}</Typography>
                <Typography variant="h6" color="primary"> ${price.toFixed(2)}</Typography>
                <Typography>stock: {stock}</Typography>
                <div className="modal-scroll-content">
                    <Typography variant="body2" color="textSecondary">
                        {
                            itHasDues && (<>
                                <PaymentIcon /> Hasta tres cuotas sin interés </>)
                        }
                    </Typography>
                    <ItemCount stock={stock} initial={quantityInCart} onAdd={handleAddToCart} />
                </div>
            </div>
        </Modal>
    </>);
}
export default ProductInfo;