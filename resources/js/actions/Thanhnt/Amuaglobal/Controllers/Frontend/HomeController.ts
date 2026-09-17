import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \Thanhnt\Amuaglobal\Controllers\Frontend\HomeController::index
* @see packages/thanhnt/amuaglobal/src/Controllers/Frontend/HomeController.php:19
* @route '/'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Thanhnt\Amuaglobal\Controllers\Frontend\HomeController::index
* @see packages/thanhnt/amuaglobal/src/Controllers/Frontend/HomeController.php:19
* @route '/'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Thanhnt\Amuaglobal\Controllers\Frontend\HomeController::index
* @see packages/thanhnt/amuaglobal/src/Controllers/Frontend/HomeController.php:19
* @route '/'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \Thanhnt\Amuaglobal\Controllers\Frontend\HomeController::index
* @see packages/thanhnt/amuaglobal/src/Controllers/Frontend/HomeController.php:19
* @route '/'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \Thanhnt\Amuaglobal\Controllers\Frontend\HomeController::index
* @see packages/thanhnt/amuaglobal/src/Controllers/Frontend/HomeController.php:19
* @route '/'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Thanhnt\Amuaglobal\Controllers\Frontend\HomeController::index
* @see packages/thanhnt/amuaglobal/src/Controllers/Frontend/HomeController.php:19
* @route '/'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Thanhnt\Amuaglobal\Controllers\Frontend\HomeController::index
* @see packages/thanhnt/amuaglobal/src/Controllers/Frontend/HomeController.php:19
* @route '/'
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

const HomeController = { index }

export default HomeController