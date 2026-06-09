import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \Thanhnt\Akhoglobal\Controllers\Frontend\ProductController::manage
 * @see packages/thanhnt/akhoglobal/src/Controllers/Frontend/ProductController.php:15
 * @route '/akhoglobal'
 */
export const manage = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: manage.url(options),
    method: 'get',
})

manage.definition = {
    methods: ["get","head"],
    url: '/akhoglobal',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Thanhnt\Akhoglobal\Controllers\Frontend\ProductController::manage
 * @see packages/thanhnt/akhoglobal/src/Controllers/Frontend/ProductController.php:15
 * @route '/akhoglobal'
 */
manage.url = (options?: RouteQueryOptions) => {
    return manage.definition.url + queryParams(options)
}

/**
* @see \Thanhnt\Akhoglobal\Controllers\Frontend\ProductController::manage
 * @see packages/thanhnt/akhoglobal/src/Controllers/Frontend/ProductController.php:15
 * @route '/akhoglobal'
 */
manage.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: manage.url(options),
    method: 'get',
})
/**
* @see \Thanhnt\Akhoglobal\Controllers\Frontend\ProductController::manage
 * @see packages/thanhnt/akhoglobal/src/Controllers/Frontend/ProductController.php:15
 * @route '/akhoglobal'
 */
manage.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: manage.url(options),
    method: 'head',
})

    /**
* @see \Thanhnt\Akhoglobal\Controllers\Frontend\ProductController::manage
 * @see packages/thanhnt/akhoglobal/src/Controllers/Frontend/ProductController.php:15
 * @route '/akhoglobal'
 */
    const manageForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: manage.url(options),
        method: 'get',
    })

            /**
* @see \Thanhnt\Akhoglobal\Controllers\Frontend\ProductController::manage
 * @see packages/thanhnt/akhoglobal/src/Controllers/Frontend/ProductController.php:15
 * @route '/akhoglobal'
 */
        manageForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: manage.url(options),
            method: 'get',
        })
            /**
* @see \Thanhnt\Akhoglobal\Controllers\Frontend\ProductController::manage
 * @see packages/thanhnt/akhoglobal/src/Controllers/Frontend/ProductController.php:15
 * @route '/akhoglobal'
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
* @see \Thanhnt\Akhoglobal\Controllers\Frontend\ProductController::create
 * @see packages/thanhnt/akhoglobal/src/Controllers/Frontend/ProductController.php:20
 * @route '/akhoglobal/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/akhoglobal/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Thanhnt\Akhoglobal\Controllers\Frontend\ProductController::create
 * @see packages/thanhnt/akhoglobal/src/Controllers/Frontend/ProductController.php:20
 * @route '/akhoglobal/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \Thanhnt\Akhoglobal\Controllers\Frontend\ProductController::create
 * @see packages/thanhnt/akhoglobal/src/Controllers/Frontend/ProductController.php:20
 * @route '/akhoglobal/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \Thanhnt\Akhoglobal\Controllers\Frontend\ProductController::create
 * @see packages/thanhnt/akhoglobal/src/Controllers/Frontend/ProductController.php:20
 * @route '/akhoglobal/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

    /**
* @see \Thanhnt\Akhoglobal\Controllers\Frontend\ProductController::create
 * @see packages/thanhnt/akhoglobal/src/Controllers/Frontend/ProductController.php:20
 * @route '/akhoglobal/create'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })

            /**
* @see \Thanhnt\Akhoglobal\Controllers\Frontend\ProductController::create
 * @see packages/thanhnt/akhoglobal/src/Controllers/Frontend/ProductController.php:20
 * @route '/akhoglobal/create'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \Thanhnt\Akhoglobal\Controllers\Frontend\ProductController::create
 * @see packages/thanhnt/akhoglobal/src/Controllers/Frontend/ProductController.php:20
 * @route '/akhoglobal/create'
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
const ProductController = { manage, create }

export default ProductController