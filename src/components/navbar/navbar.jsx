import './navbar.css'
import {AppBar, Toolbar} from '@mui/material';
import SS from '../img/SS.jpg' 
import CartWidget from '../CartWidget/CartWidget.jsx';
import { NavLink } from 'react-router-dom';


const Navbar = () =>{

    return(<AppBar>
        <Toolbar className='navbar'  sx={{display: 'flex', justifyContent: 'space-around'}}>
            <a href="/"><img src={SS}></img> </a>
            <NavLink sx={{color: '#FDF0D5'}} to="/">
                Home
            </NavLink>
            <NavLink sx={{color: '#FDF0D5'}} to="/productos">
                Productos
            </NavLink>
            <NavLink sx={{color: '#FDF0D5'}} to="/categorias">
                Categorias
            </NavLink>
            <NavLink sx={{color:'#FDF0D5'}} to="/categoria/ropa">
                Ropa
            </NavLink>
            <NavLink sx={{color:'#FDF0D5'}} to="/categoria/calzado">
                Calzado
            </NavLink>
            <NavLink sx={{color:'#FDF0D5'}} to="/categoria/suplementos">
               Suplementos
            </NavLink>
            <NavLink to="/Cart">
                <CartWidget className='cart' />
            </NavLink>
            
            
        </Toolbar>
    </AppBar>);
}

export default Navbar;