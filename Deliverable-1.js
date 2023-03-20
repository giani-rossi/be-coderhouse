class ProductManager {
    constructor() {
        this.products = []
    }

    addProduct = (title, description, price, thumbnail, code, stock, id) => {
        const product = {
            title,
            description,
            price,
            thumbnail,
            code,
            stock,
            id,
        }

        if (this.products.length === 0 && title && description && price && thumbnail && code && stock) {
            this.products.push(product)
            product.id = 1
        } else for (let i = 0; i < this.products.length; i++) {
            if (this.products[i].code === !code) {
                return this.products.push(product)
                product.id = this.products[this.products.length - 2].id + 1
            }

            console.log('El código ya existe')
        }

    }

    getProducts() {
        return this.products
    }

    getProductById(id) {
        if (this.products.find(product => product.id === id)) {
            return this.products.id
        } else return console.log('NotFound')
    }


}

const productManager = new ProductManager()
const manejadorProductManager = new ProductManager()
manejadorProductManager.addProduct('producto prueba 1', 'Este es un producto de prueba', 200, 'Sin imagen', 'abc123', 25)
manejadorProductManager.addProduct('producto prueba 2', 'Este es un producto de prueba', 200, 'Sin imagen', 'abc13', 25)
manejadorProductManager.addProduct('producto prueba 3', 'Este es un producto de prueba', 200, 'Sin imagen', 'abc23', 25)
manejadorProductManager.addProduct('producto prueba 4', 'Este es un producto de prueba', 200, 'Sin imagen', 'abc', 26)
manejadorProductManager.addProduct('producto prueba 5', 'Este es un producto de prueba', 200, 'Sin imagen', 'abc123', 26)
//manejadorProductManager.getProductById(4)
console.log(manejadorProductManager.getProducts())

//
// Debe contar con un método “addProduct” el cual agregará un producto al arreglo de productos inicial.
// Validar que no se repita el campo “code” y que todos los campos sean obligatorios
//  Al agregarlo, debe crearse con un id autoincrementable
//  Debe contar con un método “getProducts” el cual debe devolver el arreglo con todos los productos creados hasta ese momento
// Debe contar con un método “getProductById” el cual debe buscar en el arreglo el producto que coincida con el id
// En caso de no coincidir ningún id, mostrar en consola un error “Not found”
// Se creará una instancia de la clase “ProductManager”
// Se llamará “getProducts” recién creada la instancia, debe devolver un arreglo vacío []
// Se llamará al método “addProduct” con los campos:
//     title: “producto prueba”
// description:”Este es un producto prueba”
// price:200,
//     thumbnail:”Sin imagen”
// code:”abc123”,
// stock:25
// El objeto debe agregarse satisfactoriamente con un id generado automáticamente SIN REPETIRSE
// Se llamará el método “getProducts” nuevamente, esta vez debe aparecer el producto recién agregado
// Se llamará al método “addProduct” con los mismos campos de arriba, debe arrojar un error porque el código estará repetido.
//     Se evaluará que getProductById devuelva error si no encuentra el producto o el producto en caso de encontrarlo

