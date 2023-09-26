import {Card, CardContent, Grid, Typography} from "@mui/material"


const ProductDetail = ({producto, children})=>{
    const{id, image, tittle, price, category, itHasDues, isAnOffer} = producto
    return(<Grid item xs={12} sm={6} md={4} lg={3} >
        <Card className="card-products-container">
            <img src={image} style={{width:"300px", padding:"7px"}}/>
            <CardContent>
                <Typography style={{fontWeight:"bold"}}>{tittle}</Typography>
                <Typography style={{color:"gray"}}>{category}</Typography>
                <Typography>${price.toFixed(2)}</Typography>
            </CardContent>
        </Card>
    </Grid>)
}
export default ProductDetail