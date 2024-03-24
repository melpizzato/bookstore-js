const Product = require("./Product");

module.exports = class Poster extends Product {
    constructor(name, description, height, width, price, inStock = 0) {
        super(`Poster: ${name}`, description, price, inStock)
        this.height = height
        this.width = width
    }
}