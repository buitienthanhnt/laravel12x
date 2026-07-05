import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \Thanhnt\Atkeglobal\Controllers\DashboardController::sliverChart
* @see packages/thanhnt/atkeglobal/src/Controllers/DashboardController.php:14
* @route '/sliver-chart'
*/
export const sliverChart = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: sliverChart.url(options),
    method: 'get',
})

sliverChart.definition = {
    methods: ["get","head"],
    url: '/sliver-chart',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Thanhnt\Atkeglobal\Controllers\DashboardController::sliverChart
* @see packages/thanhnt/atkeglobal/src/Controllers/DashboardController.php:14
* @route '/sliver-chart'
*/
sliverChart.url = (options?: RouteQueryOptions) => {
    return sliverChart.definition.url + queryParams(options)
}

/**
* @see \Thanhnt\Atkeglobal\Controllers\DashboardController::sliverChart
* @see packages/thanhnt/atkeglobal/src/Controllers/DashboardController.php:14
* @route '/sliver-chart'
*/
sliverChart.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: sliverChart.url(options),
    method: 'get',
})

/**
* @see \Thanhnt\Atkeglobal\Controllers\DashboardController::sliverChart
* @see packages/thanhnt/atkeglobal/src/Controllers/DashboardController.php:14
* @route '/sliver-chart'
*/
sliverChart.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: sliverChart.url(options),
    method: 'head',
})

/**
* @see \Thanhnt\Atkeglobal\Controllers\DashboardController::sliverChart
* @see packages/thanhnt/atkeglobal/src/Controllers/DashboardController.php:14
* @route '/sliver-chart'
*/
const sliverChartForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: sliverChart.url(options),
    method: 'get',
})

/**
* @see \Thanhnt\Atkeglobal\Controllers\DashboardController::sliverChart
* @see packages/thanhnt/atkeglobal/src/Controllers/DashboardController.php:14
* @route '/sliver-chart'
*/
sliverChartForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: sliverChart.url(options),
    method: 'get',
})

/**
* @see \Thanhnt\Atkeglobal\Controllers\DashboardController::sliverChart
* @see packages/thanhnt/atkeglobal/src/Controllers/DashboardController.php:14
* @route '/sliver-chart'
*/
sliverChartForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: sliverChart.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

sliverChart.form = sliverChartForm

const DashboardController = { sliverChart }

export default DashboardController