import { CircularProgress, Typography, Grid } from "@mui/material"
import useAsyncMock from "../../hooks/useAsyncMock"
import productos from "../../mocks/productos.json"
import ProductDetail from "./ProductDetail"

const ProductList= ()=>{
    const{data, loading} = useAsyncMock(productos)
    if(loading) return <CircularProgress/>
    return(<div className="container" style={{backgroundColor:"#fdf0d5"}}>
        <Typography variant="h2" style={{color:"#360a14", paddingTop:"150px", textAlign:"center", paddingBottom:"50px"}}>
            Productos
        </Typography>
        <Grid container spacing={3}>
            {
                data.map((producto) =>{
                    return(
                        <ProductDetail key={producto.id} producto={producto}>

                        </ProductDetail>
                    )
                })
            }
        </Grid>
    </div>)
}
export default ProductList