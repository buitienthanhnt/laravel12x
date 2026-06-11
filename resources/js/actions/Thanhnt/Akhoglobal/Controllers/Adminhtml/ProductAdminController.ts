import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \Thanhnt\Akhoglobal\Controllers\Adminhtml\ProductAdminController::registerProduct
* @see packages/thanhnt/akhoglobal/src/Controllers/Adminhtml/ProductAdminController.php:26
* @route '/adminhtml/product/register'
*/
export const registerProduct = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: registerProduct.url(options),
    method: 'get',
})

registerProduct.definition = {
    methods: ["get","head"],
    url: '/adminhtml/product/register',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Thanhnt\Akhoglobal\Controllers\Adminhtml\ProductAdminController::registerProduct
* @see packages/thanhnt/akhoglobal/src/Controllers/Adminhtml/ProductAdminController.php:26
* @route '/adminhtml/product/register'
*/
registerProduct.url = (options?: RouteQueryOptions) => {
    return registerProduct.definition.url + queryParams(options)
}

/**
* @see \Thanhnt\Akhoglobal\Controllers\Adminhtml\ProductAdminController::registerProduct
* @see packages/thanhnt/akhoglobal/src/Controllers/Adminhtml/ProductAdminController.php:26
* @route '/adminhtml/product/register'
*/
registerProduct.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: registerProduct.url(options),
    method: 'get',
})

/**
* @see \Thanhnt\Akhoglobal\Controllers\Adminhtml\ProductAdminController::registerProduct
* @see packages/thanhnt/akhoglobal/src/Controllers/Adminhtml/ProductAdminController.php:26
* @route '/adminhtml/product/register'
*/
registerProduct.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: registerProduct.url(options),
    method: 'head',
})

/**
* @see \Thanhnt\Akhoglobal\Controllers\Adminhtml\ProductAdminController::registerProduct
* @see packages/thanhnt/akhoglobal/src/Controllers/Adminhtml/ProductAdminController.php:26
* @route '/adminhtml/product/register'
*/
const registerProductForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: registerProduct.url(options),
    method: 'get',
})

/**
* @see \Thanhnt\Akhoglobal\Controllers\Adminhtml\ProductAdminController::registerProduct
* @see packages/thanhnt/akhoglobal/src/Controllers/Adminhtml/ProductAdminController.php:26
* @route '/adminhtml/product/register'
*/
registerProductForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: registerProduct.url(options),
    method: 'get',
})

/**
* @see \Thanhnt\Akhoglobal\Controllers\Adminhtml\ProductAdminController::registerProduct
* @see packages/thanhnt/akhoglobal/src/Controllers/Adminhtml/ProductAdminController.php:26
* @route '/adminhtml/product/register'
*/
registerProductForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: registerProduct.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

registerProduct.form = registerProductForm

/**
* @see \Thanhnt\Akhoglobal\Controllers\Adminhtml\ProductAdminController::createProduct
* @see packages/thanhnt/akhoglobal/src/Controllers/Adminhtml/ProductAdminController.php:19
* @route '/adminhtml/product/create'
*/
export const createProduct = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: createProduct.url(options),
    method: 'get',
})

createProduct.definition = {
    methods: ["get","head"],
    url: '/adminhtml/product/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Thanhnt\Akhoglobal\Controllers\Adminhtml\ProductAdminController::createProduct
* @see packages/thanhnt/akhoglobal/src/Controllers/Adminhtml/ProductAdminController.php:19
* @route '/adminhtml/product/create'
*/
createProduct.url = (options?: RouteQueryOptions) => {
    return createProduct.definition.url + queryParams(options)
}

/**
* @see \Thanhnt\Akhoglobal\Controllers\Adminhtml\ProductAdminController::createProduct
* @see packages/thanhnt/akhoglobal/src/Controllers/Adminhtml/ProductAdminController.php:19
* @route '/adminhtml/product/create'
*/
createProduct.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: createProduct.url(options),
    method: 'get',
})

/**
* @see \Thanhnt\Akhoglobal\Controllers\Adminhtml\ProductAdminController::createProduct
* @see packages/thanhnt/akhoglobal/src/Controllers/Adminhtml/ProductAdminController.php:19
* @route '/adminhtml/product/create'
*/
createProduct.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: createProduct.url(options),
    method: 'head',
})

/**
* @see \Thanhnt\Akhoglobal\Controllers\Adminhtml\ProductAdminController::createProduct
* @see packages/thanhnt/akhoglobal/src/Controllers/Adminhtml/ProductAdminController.php:19
* @route '/adminhtml/product/create'
*/
const createProductForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: createProduct.url(options),
    method: 'get',
})

/**
* @see \Thanhnt\Akhoglobal\Controllers\Adminhtml\ProductAdminController::createProduct
* @see packages/thanhnt/akhoglobal/src/Controllers/Adminhtml/ProductAdminController.php:19
* @route '/adminhtml/product/create'
*/
createProductForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: createProduct.url(options),
    method: 'get',
})

/**
* @see \Thanhnt\Akhoglobal\Controllers\Adminhtml\ProductAdminController::createProduct
* @see packages/thanhnt/akhoglobal/src/Controllers/Adminhtml/ProductAdminController.php:19
* @route '/adminhtml/product/create'
*/
createProductForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: createProduct.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

createProduct.form = createProductForm

const ProductAdminController = { registerProduct, createProduct }

export default ProductAdminController