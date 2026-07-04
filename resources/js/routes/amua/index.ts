import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../wayfinder'
import product from './product'
import category from './category'
/**
* @see \Thanhnt\Amuaglobal\Controllers\Frontend\HomeController::home
* @see packages/thanhnt/amuaglobal/src/Controllers/Frontend/HomeController.php:19
* @route '/'
*/
export const home = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: home.url(options),
    method: 'get',
})

home.definition = {
    methods: ["get","head"],
    url: '/',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Thanhnt\Amuaglobal\Controllers\Frontend\HomeController::home
* @see packages/thanhnt/amuaglobal/src/Controllers/Frontend/HomeController.php:19
* @route '/'
*/
home.url = (options?: RouteQueryOptions) => {
    return home.definition.url + queryParams(options)
}

/**
* @see \Thanhnt\Amuaglobal\Controllers\Frontend\HomeController::home
* @see packages/thanhnt/amuaglobal/src/Controllers/Frontend/HomeController.php:19
* @route '/'
*/
home.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: home.url(options),
    method: 'get',
})

/**
* @see \Thanhnt\Amuaglobal\Controllers\Frontend\HomeController::home
* @see packages/thanhnt/amuaglobal/src/Controllers/Frontend/HomeController.php:19
* @route '/'
*/
home.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: home.url(options),
    method: 'head',
})

/**
* @see \Thanhnt\Amuaglobal\Controllers\Frontend\HomeController::home
* @see packages/thanhnt/amuaglobal/src/Controllers/Frontend/HomeController.php:19
* @route '/'
*/
const homeForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: home.url(options),
    method: 'get',
})

/**
* @see \Thanhnt\Amuaglobal\Controllers\Frontend\HomeController::home
* @see packages/thanhnt/amuaglobal/src/Controllers/Frontend/HomeController.php:19
* @route '/'
*/
homeForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: home.url(options),
    method: 'get',
})

/**
* @see \Thanhnt\Amuaglobal\Controllers\Frontend\HomeController::home
* @see packages/thanhnt/amuaglobal/src/Controllers/Frontend/HomeController.php:19
* @route '/'
*/
homeForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: home.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

home.form = homeForm

/**
* @see \Thanhnt\Amuaglobal\Controllers\Adminhtml\ProductAdminController::register
* @see packages/thanhnt/amuaglobal/src/Controllers/Adminhtml/ProductAdminController.php:46
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
* @see \Thanhnt\Amuaglobal\Controllers\Adminhtml\ProductAdminController::register
* @see packages/thanhnt/amuaglobal/src/Controllers/Adminhtml/ProductAdminController.php:46
* @route '/adminhtml/product/create'
*/
register.url = (options?: RouteQueryOptions) => {
    return register.definition.url + queryParams(options)
}

/**
* @see \Thanhnt\Amuaglobal\Controllers\Adminhtml\ProductAdminController::register
* @see packages/thanhnt/amuaglobal/src/Controllers/Adminhtml/ProductAdminController.php:46
* @route '/adminhtml/product/create'
*/
register.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: register.url(options),
    method: 'get',
})

/**
* @see \Thanhnt\Amuaglobal\Controllers\Adminhtml\ProductAdminController::register
* @see packages/thanhnt/amuaglobal/src/Controllers/Adminhtml/ProductAdminController.php:46
* @route '/adminhtml/product/create'
*/
register.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: register.url(options),
    method: 'head',
})

/**
* @see \Thanhnt\Amuaglobal\Controllers\Adminhtml\ProductAdminController::register
* @see packages/thanhnt/amuaglobal/src/Controllers/Adminhtml/ProductAdminController.php:46
* @route '/adminhtml/product/create'
*/
const registerForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: register.url(options),
    method: 'get',
})

/**
* @see \Thanhnt\Amuaglobal\Controllers\Adminhtml\ProductAdminController::register
* @see packages/thanhnt/amuaglobal/src/Controllers/Adminhtml/ProductAdminController.php:46
* @route '/adminhtml/product/create'
*/
registerForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: register.url(options),
    method: 'get',
})

/**
* @see \Thanhnt\Amuaglobal\Controllers\Adminhtml\ProductAdminController::register
* @see packages/thanhnt/amuaglobal/src/Controllers/Adminhtml/ProductAdminController.php:46
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
* @see \Thanhnt\Amuaglobal\Controllers\Adminhtml\ProductAdminController::store
* @see packages/thanhnt/amuaglobal/src/Controllers/Adminhtml/ProductAdminController.php:61
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
* @see \Thanhnt\Amuaglobal\Controllers\Adminhtml\ProductAdminController::store
* @see packages/thanhnt/amuaglobal/src/Controllers/Adminhtml/ProductAdminController.php:61
* @route '/adminhtml/product/store'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \Thanhnt\Amuaglobal\Controllers\Adminhtml\ProductAdminController::store
* @see packages/thanhnt/amuaglobal/src/Controllers/Adminhtml/ProductAdminController.php:61
* @route '/adminhtml/product/store'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \Thanhnt\Amuaglobal\Controllers\Adminhtml\ProductAdminController::store
* @see packages/thanhnt/amuaglobal/src/Controllers/Adminhtml/ProductAdminController.php:61
* @route '/adminhtml/product/store'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \Thanhnt\Amuaglobal\Controllers\Adminhtml\ProductAdminController::store
* @see packages/thanhnt/amuaglobal/src/Controllers/Adminhtml/ProductAdminController.php:61
* @route '/adminhtml/product/store'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

const amua = {
    home: Object.assign(home, home),
    product: Object.assign(product, product),
    category: Object.assign(category, category),
    register: Object.assign(register, register),
    store: Object.assign(store, store),
}

export default amua