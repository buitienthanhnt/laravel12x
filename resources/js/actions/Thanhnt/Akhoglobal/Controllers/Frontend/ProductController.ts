import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
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

const ProductController = { detail }

export default ProductController