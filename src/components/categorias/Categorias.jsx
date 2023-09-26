import { Card, CardContent, CircularProgress, Typography } from "@mui/material";
import useAsyncMock from "../../hooks/useAsyncMock";
import categorias from "../../mocks/categorias.json"
import { Link } from "react-router-dom";

const Categorias = () => {
    const{data, loading} = useAsyncMock(categorias)
    if(loading){
        return <CircularProgress style={{margin:"300px", marginLeft:"650px"}}/>
    }
    return(<div className="container" style={{display:"flex", flexDirection:"column", marginTop:"130px", marginLeft:"200px", marginRight:"200px", backgroundColor:"#fdf0d5"}}>
        <Typography variant = 'h2' style = {{color:'#360a14', marginBottom:"10px", textAlign:"center"}}>
            Categorias
        </Typography>
        {
            data.map((categoria) => {
                return (
                    <Card key={categoria.id}>
                        <CardContent component={Link} to={`/categoria/${categoria.category}`} style={{textAlign:"center", color:"#829399"}}>
                            <Typography>{categoria.category}</Typography>
                        </CardContent>
                    </Card>
                )
            })
        }
    </div>);
    
}

export default Categorias;