import BlockAdminController from './BlockAdminController'
import ProductAdminController from './ProductAdminController'
import CategoryAdminController from './CategoryAdminController'
const Adminhtml = {
    BlockAdminController: Object.assign(BlockAdminController, BlockAdminController),
ProductAdminController: Object.assign(ProductAdminController, ProductAdminController),
CategoryAdminController: Object.assign(CategoryAdminController, CategoryAdminController),
}

export default Adminhtml