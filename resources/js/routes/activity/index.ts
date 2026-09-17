import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \Thanhnt\Atkeglobal\Controllers\DashboardController::trans
* @see packages/thanhnt/atkeglobal/src/Controllers/DashboardController.php:78
* @route '/transaction'
*/
export const trans = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: trans.url(options),
    method: 'get',
})

trans.definition = {
    methods: ["get","head"],
    url: '/transaction',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Thanhnt\Atkeglobal\Controllers\DashboardController::trans
* @see packages/thanhnt/atkeglobal/src/Controllers/DashboardController.php:78
* @route '/transaction'
*/
trans.url = (options?: RouteQueryOptions) => {
    return trans.definition.url + queryParams(options)
}

/**
* @see \Thanhnt\Atkeglobal\Controllers\DashboardController::trans
* @see packages/thanhnt/atkeglobal/src/Controllers/DashboardController.php:78
* @route '/transaction'
*/
trans.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: trans.url(options),
    method: 'get',
})

/**
* @see \Thanhnt\Atkeglobal\Controllers\DashboardController::trans
* @see packages/thanhnt/atkeglobal/src/Controllers/DashboardController.php:78
* @route '/transaction'
*/
trans.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: trans.url(options),
    method: 'head',
})

/**
* @see \Thanhnt\Atkeglobal\Controllers\DashboardController::trans
* @see packages/thanhnt/atkeglobal/src/Controllers/DashboardController.php:78
* @route '/transaction'
*/
const transForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: trans.url(options),
    method: 'get',
})

/**
* @see \Thanhnt\Atkeglobal\Controllers\DashboardController::trans
* @see packages/thanhnt/atkeglobal/src/Controllers/DashboardController.php:78
* @route '/transaction'
*/
transForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: trans.url(options),
    method: 'get',
})

/**
* @see \Thanhnt\Atkeglobal\Controllers\DashboardController::trans
* @see packages/thanhnt/atkeglobal/src/Controllers/DashboardController.php:78
* @route '/transaction'
*/
transForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: trans.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

trans.form = transForm

/**
* @see \Thanhnt\Atkeglobal\Controllers\DashboardController::dashboard
* @see packages/thanhnt/atkeglobal/src/Controllers/DashboardController.php:105
* @route '/transaction/activity'
*/
export const dashboard = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})

dashboard.definition = {
    methods: ["get","head"],
    url: '/transaction/activity',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Thanhnt\Atkeglobal\Controllers\DashboardController::dashboard
* @see packages/thanhnt/atkeglobal/src/Controllers/DashboardController.php:105
* @route '/transaction/activity'
*/
dashboard.url = (options?: RouteQueryOptions) => {
    return dashboard.definition.url + queryParams(options)
}

/**
* @see \Thanhnt\Atkeglobal\Controllers\DashboardController::dashboard
* @see packages/thanhnt/atkeglobal/src/Controllers/DashboardController.php:105
* @route '/transaction/activity'
*/
dashboard.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})

/**
* @see \Thanhnt\Atkeglobal\Controllers\DashboardController::dashboard
* @see packages/thanhnt/atkeglobal/src/Controllers/DashboardController.php:105
* @route '/transaction/activity'
*/
dashboard.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: dashboard.url(options),
    method: 'head',
})

/**
* @see \Thanhnt\Atkeglobal\Controllers\DashboardController::dashboard
* @see packages/thanhnt/atkeglobal/src/Controllers/DashboardController.php:105
* @route '/transaction/activity'
*/
const dashboardForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: dashboard.url(options),
    method: 'get',
})

/**
* @see \Thanhnt\Atkeglobal\Controllers\DashboardController::dashboard
* @see packages/thanhnt/atkeglobal/src/Controllers/DashboardController.php:105
* @route '/transaction/activity'
*/
dashboardForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: dashboard.url(options),
    method: 'get',
})

/**
* @see \Thanhnt\Atkeglobal\Controllers\DashboardController::dashboard
* @see packages/thanhnt/atkeglobal/src/Controllers/DashboardController.php:105
* @route '/transaction/activity'
*/
dashboardForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: dashboard.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

dashboard.form = dashboardForm

/**
* @see \Thanhnt\Atkeglobal\Controllers\DashboardController::detail
* @see packages/thanhnt/atkeglobal/src/Controllers/DashboardController.php:113
* @route '/transaction/activity/detail/{id}'
*/
export const detail = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: detail.url(args, options),
    method: 'get',
})

detail.definition = {
    methods: ["get","head"],
    url: '/transaction/activity/detail/{id}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Thanhnt\Atkeglobal\Controllers\DashboardController::detail
* @see packages/thanhnt/atkeglobal/src/Controllers/DashboardController.php:113
* @route '/transaction/activity/detail/{id}'
*/
detail.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { id: args }
    }

    if (Array.isArray(args)) {
        args = {
            id: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        id: args.id,
    }

    return detail.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Thanhnt\Atkeglobal\Controllers\DashboardController::detail
* @see packages/thanhnt/atkeglobal/src/Controllers/DashboardController.php:113
* @route '/transaction/activity/detail/{id}'
*/
detail.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: detail.url(args, options),
    method: 'get',
})

/**
* @see \Thanhnt\Atkeglobal\Controllers\DashboardController::detail
* @see packages/thanhnt/atkeglobal/src/Controllers/DashboardController.php:113
* @route '/transaction/activity/detail/{id}'
*/
detail.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: detail.url(args, options),
    method: 'head',
})

/**
* @see \Thanhnt\Atkeglobal\Controllers\DashboardController::detail
* @see packages/thanhnt/atkeglobal/src/Controllers/DashboardController.php:113
* @route '/transaction/activity/detail/{id}'
*/
const detailForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: detail.url(args, options),
    method: 'get',
})

/**
* @see \Thanhnt\Atkeglobal\Controllers\DashboardController::detail
* @see packages/thanhnt/atkeglobal/src/Controllers/DashboardController.php:113
* @route '/transaction/activity/detail/{id}'
*/
detailForm.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: detail.url(args, options),
    method: 'get',
})

/**
* @see \Thanhnt\Atkeglobal\Controllers\DashboardController::detail
* @see packages/thanhnt/atkeglobal/src/Controllers/DashboardController.php:113
* @route '/transaction/activity/detail/{id}'
*/
detailForm.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: detail.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

detail.form = detailForm

const activity = {
    trans: Object.assign(trans, trans),
    dashboard: Object.assign(dashboard, dashboard),
    detail: Object.assign(detail, detail),
}

export default activity