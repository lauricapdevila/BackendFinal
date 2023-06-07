import express from "express"
import cors from "cors"
import {sequelize} from "./src/models/models.js"
import CategoriaRouter from "./src/routes/categoriaRouter.js"
import ProductosRouter from "./src/routes/productosRouter.js"
import CabeceraRouter from "./src/routes/cabeceraRouter.js"

await sequelize.sync()

const app = express()

app.use(cors({
    origin: '*'
}));

app.use(express.json())

app.get("/", (req,res) => {
    res.send("Gestion de Productos")
})

app.use("/Categoria", CategoriaRouter)
app.use("/Productos", ProductosRouter)
app.use("/Cabecera", CabeceraRouter)


const PORT = 3000
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})
 