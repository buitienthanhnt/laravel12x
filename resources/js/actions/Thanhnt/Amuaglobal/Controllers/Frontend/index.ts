import HomeController from './HomeController'
import CategoryController from './CategoryController'
import ProductController from './ProductController'

const Frontend = {
    HomeController: Object.assign(HomeController, HomeController),
    CategoryController: Object.assign(CategoryController, CategoryController),
    ProductController: Object.assign(ProductController, ProductController),
}

export default Frontend