import CategoryAdminController from './CategoryAdminController'
import ProductAdminController from './ProductAdminController'

const Adminhtml = {
    CategoryAdminController: Object.assign(CategoryAdminController, CategoryAdminController),
    ProductAdminController: Object.assign(ProductAdminController, ProductAdminController),
}

export default Adminhtml