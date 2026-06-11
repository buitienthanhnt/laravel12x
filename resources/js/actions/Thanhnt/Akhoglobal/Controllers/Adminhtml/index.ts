import BlockAdminController from './BlockAdminController'
import ProductAdminController from './ProductAdminController'

const Adminhtml = {
    BlockAdminController: Object.assign(BlockAdminController, BlockAdminController),
    ProductAdminController: Object.assign(ProductAdminController, ProductAdminController),
}

export default Adminhtml