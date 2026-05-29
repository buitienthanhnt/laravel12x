import ProductAdminController from './ProductAdminController'
import BlockAdminController from './BlockAdminController'

const Adminhtml = {
    ProductAdminController: Object.assign(ProductAdminController, ProductAdminController),
    BlockAdminController: Object.assign(BlockAdminController, BlockAdminController),
}

export default Adminhtml