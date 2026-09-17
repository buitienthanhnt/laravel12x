import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../wayfinder'
/**
* @see \Thanhnt\Amuaglobal\Controllers\Adminhtml\CategoryAdminController::list
* @see packages/thanhnt/amuaglobal/src/Controllers/Adminhtml/CategoryAdminController.php:23
* @route '/adminhtml/category'
*/
export const list = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: list.url(options),
    method: 'get',
})

list.definition = {
    methods: ["get","head"],
    url: '/adminhtml/category',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Thanhnt\Amuaglobal\Controllers\Adminhtml\CategoryAdminController::list
* @see packages/thanhnt/amuaglobal/src/Controllers/Adminhtml/CategoryAdminController.php:23
* @route '/adminhtml/category'
*/
list.url = (options?: RouteQueryOptions) => {
    return list.definition.url + queryParams(options)
}

/**
* @see \Thanhnt\Amuaglobal\Controllers\Adminhtml\CategoryAdminController::list
* @see packages/thanhnt/amuaglobal/src/Controllers/Adminhtml/CategoryAdminController.php:23
* @route '/adminhtml/category'
*/
list.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: list.url(options),
    method: 'get',
})

/**
* @see \Thanhnt\Amuaglobal\Controllers\Adminhtml\CategoryAdminController::list
* @see packages/thanhnt/amuaglobal/src/Controllers/Adminhtml/CategoryAdminController.php:23
* @route '/adminhtml/category'
*/
list.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: list.url(options),
    method: 'head',
})

/**
* @see \Thanhnt\Amuaglobal\Controllers\Adminhtml\CategoryAdminController::list
* @see packages/thanhnt/amuaglobal/src/Controllers/Adminhtml/CategoryAdminController.php:23
* @route '/adminhtml/category'
*/
const listForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: list.url(options),
    method: 'get',
})

/**
* @see \Thanhnt\Amuaglobal\Controllers\Adminhtml\CategoryAdminController::list
* @see packages/thanhnt/amuaglobal/src/Controllers/Adminhtml/CategoryAdminController.php:23
* @route '/adminhtml/category'
*/
listForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: list.url(options),
    method: 'get',
})

/**
* @see \Thanhnt\Amuaglobal\Controllers\Adminhtml\CategoryAdminController::list
* @see packages/thanhnt/amuaglobal/src/Controllers/Adminhtml/CategoryAdminController.php:23
* @route '/adminhtml/category'
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

const category = {
    list: Object.assign(list, list),
}

export default category