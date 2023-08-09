import { promises as fs } from 'fs' 

export class ProductManager {
    constructor(path) {
        this.path = path;
    }

    async getProducts() {
        let products = JSON.parse(await fs.readFile(this.path, 'utf-8'));
        //this.products = JSON.parse(this.path, 'utf-8)
        //console.log(products);
        return products;
    }

    async addProduct(product) {
        let products = JSON.parse(await fs.readFile(this.path, 'utf-8'));

        //consultar si mi producto ya existe en el txt
        if(products.find(producto => producto.id == product.id)) {
            return "Producto ya agregado"
        }
        //Lo agrego al array porque no existe
        products.push(product)
   
    //Parsearlo y guardar el array modificado
    await fs.writeFile(this.path, JSON.stringify(products))
    return ("/n", products)
}
async getProductById(id) {
    let products = JSON.parse(await fs.readFile(this.path, 'utf-8'));
    const buscado = products.find(producto => producto.id === id)
    if (buscado) {

    } else {
        console.log("Producto no existe")
    }
}

async updateProduct (id, { title, description, price, thumbnail, code, stock, }) {

    let products = JSON.parse(await fs.readFile(this.path, 'utf-8'));

    const indice = products.findIndex(prod => prod.id === id)

    if (indice != -1) {
        //modifico todos los atributos de mi objeto
        products[indice].title = title
        products[indice].description = description
        products[indice].price = price
        products[indice].thumbnail = thumbnail
        products[indice].code = code
        products[indice].stock = stock

        await fs.writeFile(this.path, JSON.stringify(products))
        console.log("producto no encontrado")
    }
}

async deleteProduct (id) {

    let products = JSON.parse(await fs.readFile(this.path, 'utf-8'));
    const buscado = products.find(item => item.id === id);
    if (!buscado) {
        console.log ("error: not found");
    }
    const prods = products.filter(prod => prod.id != id)
    products = prods;
    await fs.writeFile(this.path, JSON.stringify(products))
   }
}

export class Product {
    constructor(title, descrption, preice, thumbnail, code, stock) {
        this.title = title
        this.description = description
        this.price = price
        this.thumbnail = thumbnail
        this.code = code
        this.stock = stock
        this.id = Product.incrementarID()
    }

    static incrementarID() {
        if (this.idIncrement) {
            this.idIncrement++
        } else {
            this.idIncrement = 1 
        }
        return this.idIncrement
    }


}

//const ProductManager = new ProductManager('./prueba.json')
//const Product1 = new Product("producto prueba", "Este es un producto prueba", 200, "sin imagen", "abc123", 25)
//productManager.addProduct(product1) 
const ProductManager = new ProductManager('./prueba.json')
const ProductManager = new ProductManager('./prueba.json')
const ProductManager = new ProductManager('./prueba.json')
const ProductManager = new ProductManager('./prueba.json')
const ProductManager = new ProductManager('./prueba.json')
const ProductManager = new ProductManager('./prueba.json')
const ProductManager = new ProductManager('./prueba.json')
const ProductManager = new ProductManager('./prueba.json')
const ProductManager = new ProductManager('./prueba.json')
const ProductManager = new ProductManager('./prueba.json')
const ProductManager = new ProductManager('./prueba.json')
const ProductManager = new ProductManager('./prueba.json')
const ProductManager = new ProductManager('./prueba.json')
const ProductManager = new ProductManager('./prueba.json')
const ProductManager = new ProductManager('./prueba.json')
const ProductManager = new ProductManager('./prueba.json')
const ProductManager = new ProductManager('./prueba.json')
const ProductManager = new ProductManager('./prueba.json')