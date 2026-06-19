import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \Thanhnt\Amuaglobal\Controllers\AmuaController::clearCache
* @see packages/thanhnt/amuaglobal/src/Controllers/AmuaController.php:18
* @route '/adminhtml/clear-cache'
*/
export const clearCache = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: clearCache.url(options),
    method: 'get',
})

clearCache.definition = {
    methods: ["get","head"],
    url: '/adminhtml/clear-cache',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Thanhnt\Amuaglobal\Controllers\AmuaController::clearCache
* @see packages/thanhnt/amuaglobal/src/Controllers/AmuaController.php:18
* @route '/adminhtml/clear-cache'
*/
clearCache.url = (options?: RouteQueryOptions) => {
    return clearCache.definition.url + queryParams(options)
}

/**
* @see \Thanhnt\Amuaglobal\Controllers\AmuaController::clearCache
* @see packages/thanhnt/amuaglobal/src/Controllers/AmuaController.php:18
* @route '/adminhtml/clear-cache'
*/
clearCache.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: clearCache.url(options),
    method: 'get',
})

/**
* @see \Thanhnt\Amuaglobal\Controllers\AmuaController::clearCache
* @see packages/thanhnt/amuaglobal/src/Controllers/AmuaController.php:18
* @route '/adminhtml/clear-cache'
*/
clearCache.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: clearCache.url(options),
    method: 'head',
})

/**
* @see \Thanhnt\Amuaglobal\Controllers\AmuaController::clearCache
* @see packages/thanhnt/amuaglobal/src/Controllers/AmuaController.php:18
* @route '/adminhtml/clear-cache'
*/
const clearCacheForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: clearCache.url(options),
    method: 'get',
})

/**
* @see \Thanhnt\Amuaglobal\Controllers\AmuaController::clearCache
* @see packages/thanhnt/amuaglobal/src/Controllers/AmuaController.php:18
* @route '/adminhtml/clear-cache'
*/
clearCacheForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: clearCache.url(options),
    method: 'get',
})

/**
* @see \Thanhnt\Amuaglobal\Controllers\AmuaController::clearCache
* @see packages/thanhnt/amuaglobal/src/Controllers/AmuaController.php:18
* @route '/adminhtml/clear-cache'
*/
clearCacheForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: clearCache.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

clearCache.form = clearCacheForm

const AmuaController = { clearCache }

export default AmuaController