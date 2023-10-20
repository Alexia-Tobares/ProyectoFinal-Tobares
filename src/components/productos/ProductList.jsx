import { CircularProgress, Typography, Grid } from "@mui/material"
import useAsyncMock from "../../hooks/useAsyncMock"
import productos from "../../mocks/productos.json"
import ProductDetail from "./ProductDetail"
import { useEffect, useState } from "react"
import { collection, getDocs, getFirestore, limit, query } from "firebase/firestore"


const ProductList= ()=>{
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const[error, setError] = useState("")
    useEffect(() => {
        const fetchData = async()=>{
            const db = getFirestore();
            const querySnapshot = await getDocs(collection(db, "productos"))
            const newData = querySnapshot.docs.map((doc)=>({id: doc.id, ...doc.data()}))
            setData(newData)
            setLoading(false)
        }
        fetchData()
    }, [] )


    
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