import './ItemListContainer.css'

const ItemListContainer = ({greeting}) =>{
    return(<>
        <div className='bienvenida'>
            <h1>{greeting}</h1>
            <h2>Estamos emocionados de recibirte en nuestra página, donde encontrarás todo lo que necesitas para llevar tu estilo de vida activo y saludable al siguiente nivel. En Stay Strong, estamos comprometidos en ofrecerte la mejor selección de productos de alta calidad que te ayudarán a alcanzar tus metas deportivas y lucir genial mientras lo haces</h2>
        </div>
        
    </>);
}

export default ItemListContainer;