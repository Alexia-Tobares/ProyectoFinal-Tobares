import { Card, CardContent, Grid, Typography } from "@mui/material";
import ProductInfo from "./ProductInfo";
import { useEffect, useState } from "react";
import { collection , getDocs, getFirestore, limit, query} from "firebase/firestore"

const ProductDetail = ({ producto, children }) => {
    const { id, image, tittle, price, category, itHadDues, isAnOffer, stock } = producto
    const [newProduct, setNewProduct] = useState()
    const [isSelected, setIsSelected] = useState(false);

    const handleClick = () => {
        setIsSelected((prev) => !prev)
    }

    return (<>
        <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card className="card-products-container" onClick={handleClick}>
                <img src={image} style={{width:"300px", padding:"7px"}}/>
                <CardContent className="card-products-content">
                    <Typography>{tittle}</Typography>
                    <Typography style={{color:"gray"}}>{category}</Typography>
                    <Typography>${price.toFixed(2)}</Typography>
                </CardContent>
            </Card>

        </Grid>
        {
            isSelected &&
            <ProductInfo producto={producto} open={isSelected} setOpen={setIsSelected} />
        }
    </>
    );
}

export default ProductDetail;