import React, { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext'
import { useForm } from 'react-hook-form'
import { collection, addDoc } from 'firebase/firestore'
import { Button } from '@mui/material'
import {db} from "../../main"

const CheckOut = () => {

    const [pedidosID, setPedidosId] = useState("");

    const { carrito, precioTotalCarrito, eliminarCarrito } = useContext(CartContext)

    const { register, handleSubmit, getValues, formState: { errors } } = useForm();



    const comprar = (data) => {
        const pedido = {
            pedido: data,
            productos: carrito,
            total: precioTotalCarrito(),
        }
        console.log(pedido)

        const pedidosRef = collection(db, "pedidos");

        addDoc(pedidosRef, pedido)
            .then((doc) => {
                setPedidosId(doc.id)
                eliminarCarrito()
            })
        console.log(pedidosRef)
    }



    if (pedidosID) {
        return (
            <div className='pedidosContainer'>
                <h1>Gracias por tu compra</h1>
                <p className='pedidoId'>Tu pedido es: {pedidosID}</p>
            </div>
        )
    }
    console.log(pedidosID)

    return (
        <div className='checkoutContainer'>

            <h1 className='checkoutTitle'>Finalizar Compra</h1>

            <form className='checkoutForm' onSubmit={handleSubmit(comprar)}>



                <input className='checkoutName' type='text' placeholder='Ingresa tu nombre' {...register('nombre', { required: true, minLength: 2, })} />

                {errors?.nombre?.type === 'required' && (<p>Es necesario ingresar tu nombre</p>)}
                {errors?.nombre?.type === 'minLength' && (<p>El nombre debe superar los 2 caracteres</p>)}

                <input className='checkoutName' type='text' placeholder='Ingresa nuevamente tu nombre' {...register('nombre', { required: true, minLength: 2, })} />

                {errors?.nombre?.type === 'required' && (<p>Es necesario ingresar tu nombre</p>)}
                {errors?.nombre?.type === 'minLength' && (<p>El nombre debe superar los 2 caracteres</p>)}



                <input className='checkoutMail' type='email' placeholder='Ingresa tu mail'   {...register('email1', { minLength: 3, required: true })} />

                {errors?.email1?.type === 'minLength' && (<p>La dirección de mail no es valida</p>)}
                {errors?.email1?.type === 'required' && (<p>Es necesario ingresar tu email</p>)}



                <input className="checkoutMail" type="email" placeholder='Ingresa nuevamente tu mail'  {...register('email2', {
                    minLength: 3, required: true,
                    validate: { equalMails: (mail2) => mail2 === getValues().email1 },
                })} />

                {errors?.email2?.type === 'minLength' && (<p>La dirección de mail no es valida</p>)}

                {errors?.email2?.type === 'required' && (<p>Es necesario ingresar tu email</p>)}

                {errors?.email2?.type === 'equalMails' && (<p>Los mails deben ser iguales</p>)}



                <input className='checkoutTel' type='tel' placeholder='Ingresa tu telefono' {...register('phone', { minLength: 10, required: true, })} />

                {errors?.phone?.type === 'minLength' && (<p>El teléfono debe tener 10 digitos</p>)}

                {errors?.phone?.type === 'required' && (<p>Es necesario ingresar tu teléfono</p>)}




                <Button className='checkOutEnviar' size='small' variant="contained" type='submit'>Comprar</Button>

            </form>



        </div>
    )
}

export default CheckOut