import {logging, PersistentVector} from "near-sdk-as";

import {saveClient, Client, saveProduct, Product, saveUser, User} from "../model"

import {setProduct, getAllProducts, deleteProduct, getProductsSize} from ".."

//AAtributs 
let name = 'Sombrero Palma';
let description = 'Sombrer hecho por manos Mexicanas 100% cultural';
let price = 50;

//Create a new Instance of Product
let produtExample=new Product(name, description,price);

//
describe("Producto Agregado Correctamente", () => {
    it('No se pudo agregar correctamente el producto', () => {
        expect(setProduct(name, description, price)).toStrictEqual
        (produtExample);
    })
  })


    let productInd = saveProduct.length;
    let data = new Array<Product>(productInd);
    for(let i=0; i < productInd; i++) {
      data[i] = saveProduct[i]
    }


    describe("Obtener Producto", () => {
        it('No se encontraron productos, o hay un error', () => {
            expect(getAllProducts()).toStrictEqual(data)
        })
      })