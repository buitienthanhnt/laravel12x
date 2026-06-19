import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../wayfinder'
import product from './product'
/**
* @see \Thanhnt\Akhoglobal\Controllers\Adminhtml\BlockAdminController::block
* @see packages/thanhnt/akhoglobal/src/Controllers/Adminhtml/BlockAdminController.php:23
* @route '/adminhtml/block'
*/
export const block = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: block.url(options),
    method: 'get',
})

block.definition = {
    methods: ["get","head"],
    url: '/adminhtml/block',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Thanhnt\Akhoglobal\Controllers\Adminhtml\BlockAdminController::block
* @see packages/thanhnt/akhoglobal/src/Controllers/Adminhtml/BlockAdminController.php:23
* @route '/adminhtml/block'
*/
block.url = (options?: RouteQueryOptions) => {
    return block.definition.url + queryParams(options)
}

/**
* @see \Thanhnt\Akhoglobal\Controllers\Adminhtml\BlockAdminController::block
* @see packages/thanhnt/akhoglobal/src/Controllers/Adminhtml/BlockAdminController.php:23
* @route '/adminhtml/block'
*/
block.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: block.url(options),
    method: 'get',
})

/**
* @see \Thanhnt\Akhoglobal\Controllers\Adminhtml\BlockAdminController::block
* @see packages/thanhnt/akhoglobal/src/Controllers/Adminhtml/BlockAdminController.php:23
* @route '/adminhtml/block'
*/
block.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: block.url(options),
    method: 'head',
})

/**
* @see \Thanhnt\Akhoglobal\Controllers\Adminhtml\BlockAdminController::block
* @see packages/thanhnt/akhoglobal/src/Controllers/Adminhtml/BlockAdminController.php:23
* @route '/adminhtml/block'
*/
const blockForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: block.url(options),
    method: 'get',
})

/**
* @see \Thanhnt\Akhoglobal\Controllers\Adminhtml\BlockAdminController::block
* @see packages/thanhnt/akhoglobal/src/Controllers/Adminhtml/BlockAdminController.php:23
* @route '/adminhtml/block'
*/
blockForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: block.url(options),
    method: 'get',
})

/**
* @see \Thanhnt\Akhoglobal\Controllers\Adminhtml\BlockAdminController::block
* @see packages/thanhnt/akhoglobal/src/Controllers/Adminhtml/BlockAdminController.php:23
* @route '/adminhtml/block'
*/
blockForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: block.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

block.form = blockForm

/**
* @see \Thanhnt\Akhoglobal\Controllers\Adminhtml\ProductAdminController::register
* @see packages/thanhnt/akhoglobal/src/Controllers/Adminhtml/ProductAdminController.php:47
* @route '/adminhtml/product/create'
*/
export const register = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: register.url(options),
    method: 'get',
})

register.definition = {
    methods: ["get","head"],
    url: '/adminhtml/product/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Thanhnt\Akhoglobal\Controllers\Adminhtml\ProductAdminController::register
* @see packages/thanhnt/akhoglobal/src/Controllers/Adminhtml/ProductAdminController.php:47
* @route '/adminhtml/product/create'
*/
register.url = (options?: RouteQueryOptions) => {
    return register.definition.url + queryParams(options)
}

/**
* @see \Thanhnt\Akhoglobal\Controllers\Adminhtml\ProductAdminController::register
* @see packages/thanhnt/akhoglobal/src/Controllers/Adminhtml/ProductAdminController.php:47
* @route '/adminhtml/product/create'
*/
register.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: register.url(options),
    method: 'get',
})

/**
* @see \Thanhnt\Akhoglobal\Controllers\Adminhtml\ProductAdminController::register
* @see packages/thanhnt/akhoglobal/src/Controllers/Adminhtml/ProductAdminController.php:47
* @route '/adminhtml/product/create'
*/
register.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: register.url(options),
    method: 'head',
})

/**
* @see \Thanhnt\Akhoglobal\Controllers\Adminhtml\ProductAdminController::register
* @see packages/thanhnt/akhoglobal/src/Controllers/Adminhtml/ProductAdminController.php:47
* @route '/adminhtml/product/create'
*/
const registerForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: register.url(options),
    method: 'get',
})

/**
* @see \Thanhnt\Akhoglobal\Controllers\Adminhtml\ProductAdminController::register
* @see packages/thanhnt/akhoglobal/src/Controllers/Adminhtml/ProductAdminController.php:47
* @route '/adminhtml/product/create'
*/
registerForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: register.url(options),
    method: 'get',
})

/**
* @see \Thanhnt\Akhoglobal\Controllers\Adminhtml\ProductAdminController::register
* @see packages/thanhnt/akhoglobal/src/Controllers/Adminhtml/ProductAdminController.php:47
* @route '/adminhtml/product/create'
*/
registerForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: register.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

register.form = registerForm

/**
* @see \Thanhnt\Akhoglobal\Controllers\Adminhtml\ProductAdminController::store
* @see packages/thanhnt/akhoglobal/src/Controllers/Adminhtml/ProductAdminController.php:62
* @route '/adminhtml/product/store'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/adminhtml/product/store',
} satisfies RouteDefinition<["post"]>

/**
* @see \Thanhnt\Akhoglobal\Controllers\Adminhtml\ProductAdminController::store
* @see packages/thanhnt/akhoglobal/src/Controllers/Adminhtml/ProductAdminController.php:62
* @route '/adminhtml/product/store'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \Thanhnt\Akhoglobal\Controllers\Adminhtml\ProductAdminController::store
* @see packages/thanhnt/akhoglobal/src/Controllers/Adminhtml/ProductAdminController.php:62
* @route '/adminhtml/product/store'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \Thanhnt\Akhoglobal\Controllers\Adminhtml\ProductAdminController::store
* @see packages/thanhnt/akhoglobal/src/Controllers/Adminhtml/ProductAdminController.php:62
* @route '/adminhtml/product/store'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \Thanhnt\Akhoglobal\Controllers\Adminhtml\ProductAdminController::store
* @see packages/thanhnt/akhoglobal/src/Controllers/Adminhtml/ProductAdminController.php:62
* @route '/adminhtml/product/store'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

const akho = {
    product: Object.assign(product, product),
    block: Object.assign(block, block),
    register: Object.assign(register, register),
    store: Object.assign(store, store),
}

export default akho