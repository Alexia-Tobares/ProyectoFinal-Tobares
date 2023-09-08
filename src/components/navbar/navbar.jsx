import './navbar.css'
import {AppBar, Button, Toolbar} from '@mui/material';
import SS from '../img/SS.jpg' 
import CartWidget from '../CartWidget/CartWidget.jsx';

const Navbar = () =>{
    return(<AppBar>
        <Toolbar className='navbar'  sx={{display: 'flex', justifyContent: 'space-around'}}>
            <img src={SS}></img> 
            <Button sx={{color: '#FDF0D5'}}>
                Home
            </Button>
            <Button sx={{color: '#FDF0D5'}}>
                Ropa
            </Button>
            <Button sx={{color: '#FDF0D5'}}>
                Suplementos
            </Button>
            <Button sx={{color: '#FDF0D5'}}>
                Conocenos
            </Button>
            <CartWidget className='cart' />
        </Toolbar>
    </AppBar>);
}

export default Navbar;