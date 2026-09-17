import DashboardController from './DashboardController'
import CategoryAdminController from './CategoryAdminController'
import ProductAdminController from './ProductAdminController'

const Adminhtml = {
    DashboardController: Object.assign(DashboardController, DashboardController),
    CategoryAdminController: Object.assign(CategoryAdminController, CategoryAdminController),
    ProductAdminController: Object.assign(ProductAdminController, ProductAdminController),
}

export default Adminhtml