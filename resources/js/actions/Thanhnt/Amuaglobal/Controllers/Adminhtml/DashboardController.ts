import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \Thanhnt\Amuaglobal\Controllers\Adminhtml\DashboardController::index
* @see packages/thanhnt/amuaglobal/src/Controllers/Adminhtml/DashboardController.php:16
* @route '/adminhtml'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/adminhtml',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Thanhnt\Amuaglobal\Controllers\Adminhtml\DashboardController::index
* @see packages/thanhnt/amuaglobal/src/Controllers/Adminhtml/DashboardController.php:16
* @route '/adminhtml'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Thanhnt\Amuaglobal\Controllers\Adminhtml\DashboardController::index
* @see packages/thanhnt/amuaglobal/src/Controllers/Adminhtml/DashboardController.php:16
* @route '/adminhtml'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \Thanhnt\Amuaglobal\Controllers\Adminhtml\DashboardController::index
* @see packages/thanhnt/amuaglobal/src/Controllers/Adminhtml/DashboardController.php:16
* @route '/adminhtml'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \Thanhnt\Amuaglobal\Controllers\Adminhtml\DashboardController::index
* @see packages/thanhnt/amuaglobal/src/Controllers/Adminhtml/DashboardController.php:16
* @route '/adminhtml'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Thanhnt\Amuaglobal\Controllers\Adminhtml\DashboardController::index
* @see packages/thanhnt/amuaglobal/src/Controllers/Adminhtml/DashboardController.php:16
* @route '/adminhtml'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Thanhnt\Amuaglobal\Controllers\Adminhtml\DashboardController::index
* @see packages/thanhnt/amuaglobal/src/Controllers/Adminhtml/DashboardController.php:16
* @route '/adminhtml'
*/
indexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

index.form = indexForm

const DashboardController = { index }

export default DashboardController