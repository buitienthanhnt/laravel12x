import CategoryController from './CategoryController'
import ProductController from './ProductController'
const Frontend = {
    CategoryController: Object.assign(CategoryController, CategoryController),
ProductController: Object.assign(ProductController, ProductController),
}

export default Frontend