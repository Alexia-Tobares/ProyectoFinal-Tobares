import React from "react";
import {
    Button,
    Link,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
} from "@mui/material";
import { useCartContext } from "../../context/CartContext";

const Cart = () => {
    const {cart} = useCartContext()
    return (
        <div className="container" style={{margin:"150px"}}>
            <Paper elevation={3}>
                <Typography variant="h6" component="div" align="center" sx={{ p: 2 }}>
                    Tu carrito
                </Typography>
                {cart.items.length === 0 ? (
                    <Typography variant="body2" align="center" sx={{ p: 2 }}>
                        Carrito vacío
                    </Typography>
                ) : (
                    <TableContainer>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Imagen</TableCell>
                                    <TableCell>Producto</TableCell>
                                    <TableCell>Precio</TableCell>
                                    <TableCell>Total</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {cart.items.map((item) => (
                                    <TableRow key={item.id}>
                                        <TableCell><img style={{ width: "10%", height: "10%" }} src={item.image} alt={item.title} /></TableCell>
                                        <TableCell>{item.tittle}  x{item.quantity}</TableCell>
                                        <TableCell>${item.price}</TableCell>
                                        <TableCell>${item.price * item.quantity}</TableCell>
                                    </TableRow>
                                ))}
                                <TableRow>
                                    <TableCell colSpan={3}>Monto total:</TableCell>
                                    <TableCell>${cart.total.toFixed(2)}</TableCell>
                                </TableRow>
                                <Link to="/Cart/checkout" className='checkoutButton'>
                                    <Button sx={{ marginTop: '30px' }} variant="contained" color='secondary'>
                                        Finalizar Compra
                                    </Button>
                                </Link>
                            </TableBody>
                        </Table>
                    </TableContainer>
                )}
            </Paper>
        </div>
    );
};

export default Cart;