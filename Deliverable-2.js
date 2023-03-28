const fs = require('fs');

class ProductManager {
    constructor() {
        this.products = [];
        this.path = './products.json';
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
            this.products.push(product);
            product.id = 1;
        } else if (this.products.some(product => product.code === code)) {
            console.log('El código ya existe');
        } else {
            product.id = this.products[this.products.length - 1].id + 1;
            this.products.push(product);
        }
        const operations = async () => {
            await fs.promises.writeFile(this.path, JSON.stringify(this.products, null, 2));
        }
        operations()
    };


    async getProduct() {
        try {
            const products = await fs.promises.readFile(this.path, 'utf-8');
            return JSON.parse(products);
        } catch (error) {
            console.error(error);
            return [];
        }
    }

    async getProductById(id) {
        try {
            const products = await fs.promises.readFile(this.path, 'utf-8');
            const parsedProducts = JSON.parse(products);
            const product = parsedProducts.find((p) => p.id === id);
            return product ? product : null;
        } catch (error) {
            console.error(error);
            return null;
        }
    }

    updateProduct = async (id, updatedFields) => {
        try {
            const products = await fs.promises.readFile(this.path, 'utf-8');
            const parsedProducts = JSON.parse(products);
            const index = parsedProducts.findIndex((p) => p.id === id);
            if (index !== -1) {
                parsedProducts[index] = {...parsedProducts[index], ...updatedFields};

                await fs.promises.writeFile(this.path, JSON.stringify(parsedProducts, null, 2));
                return parsedProducts[index];
            } else {
                console.log(`No existe ningún producto con el id ${id}`);
                return null;
            }
        } catch (error) {
            console.error(error);
        }
    };


    async saveProducts(products) {
        try {
            await fs.promises.writeFile(this.path, JSON.stringify(products, null, 2));
            console.log('Archivo de productos actualizado con éxito');
        } catch (error) {
            console.error(error);
        }
    }

    async deleteProduct(id) {
        try {
            const products = await this.getProduct();


            const productIndex = products.findIndex(product => product.id === id);


            if (productIndex !== -1) {
                products.splice(productIndex, 1);
                await this.saveProducts(products);
            } else {
                console.log(`No existe ningun producto con el id ${id}`);
            }
        } catch (error) {
            console.error(error);
        }
    }


}

//
// const productManager = new ProductManager();
// (async () => {
//     const products = await productManager.deleteProduct(2)
//     console.log(products);
// })();
