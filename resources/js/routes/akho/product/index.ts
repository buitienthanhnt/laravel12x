import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \Thanhnt\Akhoglobal\Controllers\Frontend\ProductController::detail
* @see packages/thanhnt/akhoglobal/src/Controllers/Frontend/ProductController.php:21
* @route '/akho/product/{alias}.html'
*/
export const detail = (args: { alias: string | number } | [alias: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: detail.url(args, options),
    method: 'get',
})

detail.definition = {
    methods: ["get","head"],
    url: '/akho/product/{alias}.html',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Thanhnt\Akhoglobal\Controllers\Frontend\ProductController::detail
* @see packages/thanhnt/akhoglobal/src/Controllers/Frontend/ProductController.php:21
* @route '/akho/product/{alias}.html'
*/
detail.url = (args: { alias: string | number } | [alias: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { alias: args }
    }

    if (Array.isArray(args)) {
        args = {
            alias: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        alias: args.alias,
    }

    return detail.definition.url
            .replace('{alias}', parsedArgs.alias.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Thanhnt\Akhoglobal\Controllers\Frontend\ProductController::detail
* @see packages/thanhnt/akhoglobal/src/Controllers/Frontend/ProductController.php:21
* @route '/akho/product/{alias}.html'
*/
detail.get = (args: { alias: string | number } | [alias: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: detail.url(args, options),
    method: 'get',
})

/**
* @see \Thanhnt\Akhoglobal\Controllers\Frontend\ProductController::detail
* @see packages/thanhnt/akhoglobal/src/Controllers/Frontend/ProductController.php:21
* @route '/akho/product/{alias}.html'
*/
detail.head = (args: { alias: string | number } | [alias: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: detail.url(args, options),
    method: 'head',
})

/**
* @see \Thanhnt\Akhoglobal\Controllers\Frontend\ProductController::detail
* @see packages/thanhnt/akhoglobal/src/Controllers/Frontend/ProductController.php:21
* @route '/akho/product/{alias}.html'
*/
const detailForm = (args: { alias: string | number } | [alias: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: detail.url(args, options),
    method: 'get',
})

/**
* @see \Thanhnt\Akhoglobal\Controllers\Frontend\ProductController::detail
* @see packages/thanhnt/akhoglobal/src/Controllers/Frontend/ProductController.php:21
* @route '/akho/product/{alias}.html'
*/
detailForm.get = (args: { alias: string | number } | [alias: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: detail.url(args, options),
    method: 'get',
})

/**
* @see \Thanhnt\Akhoglobal\Controllers\Frontend\ProductController::detail
* @see packages/thanhnt/akhoglobal/src/Controllers/Frontend/ProductController.php:21
* @route '/akho/product/{alias}.html'
*/
detailForm.head = (args: { alias: string | number } | [alias: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: detail.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

detail.form = detailForm

/**
* @see \Thanhnt\Akhoglobal\Controllers\Adminhtml\ProductAdminController::list
* @see packages/thanhnt/akhoglobal/src/Controllers/Adminhtml/ProductAdminController.php:35
* @route '/adminhtml/product'
*/
export const list = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: list.url(options),
    method: 'get',
})

list.definition = {
    methods: ["get","head"],
    url: '/adminhtml/product',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Thanhnt\Akhoglobal\Controllers\Adminhtml\ProductAdminController::list
* @see packages/thanhnt/akhoglobal/src/Controllers/Adminhtml/ProductAdminController.php:35
* @route '/adminhtml/product'
*/
list.url = (options?: RouteQueryOptions) => {
    return list.definition.url + queryParams(options)
}

/**
* @see \Thanhnt\Akhoglobal\Controllers\Adminhtml\ProductAdminController::list
* @see packages/thanhnt/akhoglobal/src/Controllers/Adminhtml/ProductAdminController.php:35
* @route '/adminhtml/product'
*/
list.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: list.url(options),
    method: 'get',
})

/**
* @see \Thanhnt\Akhoglobal\Controllers\Adminhtml\ProductAdminController::list
* @see packages/thanhnt/akhoglobal/src/Controllers/Adminhtml/ProductAdminController.php:35
* @route '/adminhtml/product'
*/
list.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: list.url(options),
    method: 'head',
})

/**
* @see \Thanhnt\Akhoglobal\Controllers\Adminhtml\ProductAdminController::list
* @see packages/thanhnt/akhoglobal/src/Controllers/Adminhtml/ProductAdminController.php:35
* @route '/adminhtml/product'
*/
const listForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: list.url(options),
    method: 'get',
})

/**
* @see \Thanhnt\Akhoglobal\Controllers\Adminhtml\ProductAdminController::list
* @see packages/thanhnt/akhoglobal/src/Controllers/Adminhtml/ProductAdminController.php:35
* @route '/adminhtml/product'
*/
listForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: list.url(options),
    method: 'get',
})

/**
* @see \Thanhnt\Akhoglobal\Controllers\Adminhtml\ProductAdminController::list
* @see packages/thanhnt/akhoglobal/src/Controllers/Adminhtml/ProductAdminController.php:35
* @route '/adminhtml/product'
*/
listForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: list.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

list.form = listForm

const product = {
    detail: Object.assign(detail, detail),
    list: Object.assign(list, list),
}

export default product