import { useParams } from "react-router-dom"
import useAsyncMock from "../../hooks/useAsyncMock"
import productos from "../../mocks/productos.json"
import { CircularProgress, Grid } from "@mui/material"
import ProductDetail from "../productos/ProductDetail"

const CategoriesProductList = ()=>{
    const{categoriaId} = useParams()
    const{data, loading} = useAsyncMock(productos)
    if(loading){
        return <CircularProgress style={{margin:"300px", marginLeft:"650px"}}/>
    }
    const categorySelected = data.filter(category => category.category.toLowerCase() === categoriaId.toLowerCase())
    return(<div style={{backgroundColor:"#fdf0d5"}}>
        <Grid container spacing={3} style={{paddingTop:"150px"}}>
            {categorySelected.map((producto)=>{
                return <ProductDetail key={producto.id} producto={producto}/>
            })}
        </Grid>
    </div>)
}
export default CategoriesProductList