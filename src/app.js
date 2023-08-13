import express from 'express' 
import { ProductManager } from './productManager.js' 
import { Product } from './product.js' 

const app = express()

const PORT = 4000

app.use(express.urlencoded({ extended: true }))
const productManager = new ProductManager('./src/prueba.json')
//const product = new Product ("Leche", "Entera", 1000, "sin imagen", "lac100", 20)
//productManager.addProduct(product)
//product.cargar()

app.get('/', (req res) => {
    res.send("Hola desde el sur")
})

app.get('/productos', async (req, res) => {
    const{ limite } = req.query
    const products = await productManager.getProducts();
    if (limite){
        res.send(products.slice(0, limite))
    } else 
    res.send(products);
})

app.get('/productos/:id', async (req, res) => {

    const prod = await productManager.getProductById(parseInt(req.params.id))
    //const prod = products.find(prod => prod.id === parseInt(req.params.id))
    if (prod){
        res.send(prod)
    }else
    res.send("Producto no encontrado")
})

//ruta 404 
app.get('*', (req, res) => {
    res.send("Error 404")
})

app.listen(PORT, () => {
    console.log(`Server on port ${PORT}`)
})
