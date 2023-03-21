class ProductManager {
    constructor() {
        this.products = [];
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
        };

        if (this.products.length === 0 && title && description && price && thumbnail && code && stock) {
            this.products.push(product);
            product.id = 1;
        } else if (this.products.some(product => product.code === code)) {
            console.log('El código ya existe');
        } else {
            product.id = this.products[this.products.length - 1].id + 1;

            this.products.push(product);
        }
    };

    getProducts() {
        return this.products;
    }

    getProductById(id) {
        const product = this.products.find(product => product.id === id);
        if (product) {
            return product;
        } else {
            console.log('NotFound');
        }
    }
}

const productManager = new ProductManager();
productManager.addProduct('producto prueba 1', 'Este es un producto de prueba', 200, 'Sin imagen', 'abc123', 25);
productManager.addProduct('producto prueba 2', 'Este es un producto de prueba', 200, 'Sin imagen', 'abc13', 25);
productManager.addProduct('producto prueba 3', 'Este es un producto de prueba', 200, 'Sin imagen', 'abc23', 25);
productManager.addProduct('producto prueba 4', 'Este es un producto de prueba', 200, 'Sin imagen', 'abc3', 26);
productManager.addProduct('producto prueba 5', 'Este es un producto de prueba', 200, 'Sin imagen', 'abc123', 26);
console.log(productManager.getProducts());
console.log(productManager.getProductById(0));
