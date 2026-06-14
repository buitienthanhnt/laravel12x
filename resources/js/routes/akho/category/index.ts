import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../wayfinder'
/**
* @see \Thanhnt\Akhoglobal\Controllers\Adminhtml\CategoryAdminController::create
 * @see packages/thanhnt/akhoglobal/src/Controllers/Adminhtml/CategoryAdminController.php:21
 * @route '/adminhtml/category/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/adminhtml/category/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Thanhnt\Akhoglobal\Controllers\Adminhtml\CategoryAdminController::create
 * @see packages/thanhnt/akhoglobal/src/Controllers/Adminhtml/CategoryAdminController.php:21
 * @route '/adminhtml/category/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \Thanhnt\Akhoglobal\Controllers\Adminhtml\CategoryAdminController::create
 * @see packages/thanhnt/akhoglobal/src/Controllers/Adminhtml/CategoryAdminController.php:21
 * @route '/adminhtml/category/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \Thanhnt\Akhoglobal\Controllers\Adminhtml\CategoryAdminController::create
 * @see packages/thanhnt/akhoglobal/src/Controllers/Adminhtml/CategoryAdminController.php:21
 * @route '/adminhtml/category/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

    /**
* @see \Thanhnt\Akhoglobal\Controllers\Adminhtml\CategoryAdminController::create
 * @see packages/thanhnt/akhoglobal/src/Controllers/Adminhtml/CategoryAdminController.php:21
 * @route '/adminhtml/category/create'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })

            /**
* @see \Thanhnt\Akhoglobal\Controllers\Adminhtml\CategoryAdminController::create
 * @see packages/thanhnt/akhoglobal/src/Controllers/Adminhtml/CategoryAdminController.php:21
 * @route '/adminhtml/category/create'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \Thanhnt\Akhoglobal\Controllers\Adminhtml\CategoryAdminController::create
 * @see packages/thanhnt/akhoglobal/src/Controllers/Adminhtml/CategoryAdminController.php:21
 * @route '/adminhtml/category/create'
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
const category = {
    create: Object.assign(create, create),
}

export default category