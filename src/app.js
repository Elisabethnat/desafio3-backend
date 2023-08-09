import express from 'express' 
import { ProductManager } from './productManager.js' 
import { Product } from './product.js' 

const app = express()

const PORT = 4000

app.use(express.urlencoded({ extended: true }))
