import cart from '../img/cart.png'

const CartWidget = () =>{
    return(
        <>
            <div>
                <img src={cart}></img><span>(7)</span>
            </div>
            
        </>
    );
}

export default CartWidget;