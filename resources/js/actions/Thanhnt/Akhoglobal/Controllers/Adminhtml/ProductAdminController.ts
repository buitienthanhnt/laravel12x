import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \Thanhnt\Akhoglobal\Controllers\Adminhtml\ProductAdminController::manage
* @see packages/thanhnt/akhoglobal/src/Controllers/Adminhtml/ProductAdminController.php:35
* @route '/adminhtml/product'
*/
export const manage = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: manage.url(options),
    method: 'get',
})

manage.definition = {
    methods: ["get","head"],
    url: '/adminhtml/product',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Thanhnt\Akhoglobal\Controllers\Adminhtml\ProductAdminController::manage
* @see packages/thanhnt/akhoglobal/src/Controllers/Adminhtml/ProductAdminController.php:35
* @route '/adminhtml/product'
*/
manage.url = (options?: RouteQueryOptions) => {
    return manage.definition.url + queryParams(options)
}

/**
* @see \Thanhnt\Akhoglobal\Controllers\Adminhtml\ProductAdminController::manage
* @see packages/thanhnt/akhoglobal/src/Controllers/Adminhtml/ProductAdminController.php:35
* @route '/adminhtml/product'
*/
manage.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: manage.url(options),
    method: 'get',
})

/**
* @see \Thanhnt\Akhoglobal\Controllers\Adminhtml\ProductAdminController::manage
* @see packages/thanhnt/akhoglobal/src/Controllers/Adminhtml/ProductAdminController.php:35
* @route '/adminhtml/product'
*/
manage.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: manage.url(options),
    method: 'head',
})

/**
* @see \Thanhnt\Akhoglobal\Controllers\Adminhtml\ProductAdminController::manage
* @see packages/thanhnt/akhoglobal/src/Controllers/Adminhtml/ProductAdminController.php:35
* @route '/adminhtml/product'
*/
const manageForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: manage.url(options),
    method: 'get',
})

/**
* @see \Thanhnt\Akhoglobal\Controllers\Adminhtml\ProductAdminController::manage
* @see packages/thanhnt/akhoglobal/src/Controllers/Adminhtml/ProductAdminController.php:35
* @route '/adminhtml/product'
*/
manageForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: manage.url(options),
    method: 'get',
})

/**
* @see \Thanhnt\Akhoglobal\Controllers\Adminhtml\ProductAdminController::manage
* @see packages/thanhnt/akhoglobal/src/Controllers/Adminhtml/ProductAdminController.php:35
* @route '/adminhtml/product'
*/
manageForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: manage.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

manage.form = manageForm

/**
* @see \Thanhnt\Akhoglobal\Controllers\Adminhtml\ProductAdminController::create
* @see packages/thanhnt/akhoglobal/src/Controllers/Adminhtml/ProductAdminController.php:47
* @route '/adminhtml/product/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/adminhtml/product/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Thanhnt\Akhoglobal\Controllers\Adminhtml\ProductAdminController::create
* @see packages/thanhnt/akhoglobal/src/Controllers/Adminhtml/ProductAdminController.php:47
* @route '/adminhtml/product/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \Thanhnt\Akhoglobal\Controllers\Adminhtml\ProductAdminController::create
* @see packages/thanhnt/akhoglobal/src/Controllers/Adminhtml/ProductAdminController.php:47
* @route '/adminhtml/product/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \Thanhnt\Akhoglobal\Controllers\Adminhtml\ProductAdminController::create
* @see packages/thanhnt/akhoglobal/src/Controllers/Adminhtml/ProductAdminController.php:47
* @route '/adminhtml/product/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \Thanhnt\Akhoglobal\Controllers\Adminhtml\ProductAdminController::create
* @see packages/thanhnt/akhoglobal/src/Controllers/Adminhtml/ProductAdminController.php:47
* @route '/adminhtml/product/create'
*/
const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \Thanhnt\Akhoglobal\Controllers\Adminhtml\ProductAdminController::create
* @see packages/thanhnt/akhoglobal/src/Controllers/Adminhtml/ProductAdminController.php:47
* @route '/adminhtml/product/create'
*/
createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \Thanhnt\Akhoglobal\Controllers\Adminhtml\ProductAdminController::create
* @see packages/thanhnt/akhoglobal/src/Controllers/Adminhtml/ProductAdminController.php:47
* @route '/adminhtml/product/create'
*/
createForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

create.form = createForm

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

const ProductAdminController = { manage, create, store }

export default ProductAdminController