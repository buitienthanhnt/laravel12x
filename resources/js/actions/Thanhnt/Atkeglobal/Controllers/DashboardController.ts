import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \Thanhnt\Atkeglobal\Controllers\DashboardController::sliverChart
* @see packages/thanhnt/atkeglobal/src/Controllers/DashboardController.php:23
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
* @see packages/thanhnt/atkeglobal/src/Controllers/DashboardController.php:23
* @route '/sliver-chart'
*/
sliverChart.url = (options?: RouteQueryOptions) => {
    return sliverChart.definition.url + queryParams(options)
}

/**
* @see \Thanhnt\Atkeglobal\Controllers\DashboardController::sliverChart
* @see packages/thanhnt/atkeglobal/src/Controllers/DashboardController.php:23
* @route '/sliver-chart'
*/
sliverChart.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: sliverChart.url(options),
    method: 'get',
})

/**
* @see \Thanhnt\Atkeglobal\Controllers\DashboardController::sliverChart
* @see packages/thanhnt/atkeglobal/src/Controllers/DashboardController.php:23
* @route '/sliver-chart'
*/
sliverChart.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: sliverChart.url(options),
    method: 'head',
})

/**
* @see \Thanhnt\Atkeglobal\Controllers\DashboardController::sliverChart
* @see packages/thanhnt/atkeglobal/src/Controllers/DashboardController.php:23
* @route '/sliver-chart'
*/
const sliverChartForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: sliverChart.url(options),
    method: 'get',
})

/**
* @see \Thanhnt\Atkeglobal\Controllers\DashboardController::sliverChart
* @see packages/thanhnt/atkeglobal/src/Controllers/DashboardController.php:23
* @route '/sliver-chart'
*/
sliverChartForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: sliverChart.url(options),
    method: 'get',
})

/**
* @see \Thanhnt\Atkeglobal\Controllers\DashboardController::sliverChart
* @see packages/thanhnt/atkeglobal/src/Controllers/DashboardController.php:23
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

/**
* @see \Thanhnt\Atkeglobal\Controllers\DashboardController::loDe
* @see packages/thanhnt/atkeglobal/src/Controllers/DashboardController.php:129
* @route '/lo-de'
*/
export const loDe = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: loDe.url(options),
    method: 'get',
})

loDe.definition = {
    methods: ["get","head"],
    url: '/lo-de',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Thanhnt\Atkeglobal\Controllers\DashboardController::loDe
* @see packages/thanhnt/atkeglobal/src/Controllers/DashboardController.php:129
* @route '/lo-de'
*/
loDe.url = (options?: RouteQueryOptions) => {
    return loDe.definition.url + queryParams(options)
}

/**
* @see \Thanhnt\Atkeglobal\Controllers\DashboardController::loDe
* @see packages/thanhnt/atkeglobal/src/Controllers/DashboardController.php:129
* @route '/lo-de'
*/
loDe.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: loDe.url(options),
    method: 'get',
})

/**
* @see \Thanhnt\Atkeglobal\Controllers\DashboardController::loDe
* @see packages/thanhnt/atkeglobal/src/Controllers/DashboardController.php:129
* @route '/lo-de'
*/
loDe.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: loDe.url(options),
    method: 'head',
})

/**
* @see \Thanhnt\Atkeglobal\Controllers\DashboardController::loDe
* @see packages/thanhnt/atkeglobal/src/Controllers/DashboardController.php:129
* @route '/lo-de'
*/
const loDeForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: loDe.url(options),
    method: 'get',
})

/**
* @see \Thanhnt\Atkeglobal\Controllers\DashboardController::loDe
* @see packages/thanhnt/atkeglobal/src/Controllers/DashboardController.php:129
* @route '/lo-de'
*/
loDeForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: loDe.url(options),
    method: 'get',
})

/**
* @see \Thanhnt\Atkeglobal\Controllers\DashboardController::loDe
* @see packages/thanhnt/atkeglobal/src/Controllers/DashboardController.php:129
* @route '/lo-de'
*/
loDeForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: loDe.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

loDe.form = loDeForm

/**
* @see \Thanhnt\Atkeglobal\Controllers\DashboardController::activityTrans
* @see packages/thanhnt/atkeglobal/src/Controllers/DashboardController.php:78
* @route '/transaction'
*/
export const activityTrans = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: activityTrans.url(options),
    method: 'get',
})

activityTrans.definition = {
    methods: ["get","head"],
    url: '/transaction',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Thanhnt\Atkeglobal\Controllers\DashboardController::activityTrans
* @see packages/thanhnt/atkeglobal/src/Controllers/DashboardController.php:78
* @route '/transaction'
*/
activityTrans.url = (options?: RouteQueryOptions) => {
    return activityTrans.definition.url + queryParams(options)
}

/**
* @see \Thanhnt\Atkeglobal\Controllers\DashboardController::activityTrans
* @see packages/thanhnt/atkeglobal/src/Controllers/DashboardController.php:78
* @route '/transaction'
*/
activityTrans.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: activityTrans.url(options),
    method: 'get',
})

/**
* @see \Thanhnt\Atkeglobal\Controllers\DashboardController::activityTrans
* @see packages/thanhnt/atkeglobal/src/Controllers/DashboardController.php:78
* @route '/transaction'
*/
activityTrans.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: activityTrans.url(options),
    method: 'head',
})

/**
* @see \Thanhnt\Atkeglobal\Controllers\DashboardController::activityTrans
* @see packages/thanhnt/atkeglobal/src/Controllers/DashboardController.php:78
* @route '/transaction'
*/
const activityTransForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: activityTrans.url(options),
    method: 'get',
})

/**
* @see \Thanhnt\Atkeglobal\Controllers\DashboardController::activityTrans
* @see packages/thanhnt/atkeglobal/src/Controllers/DashboardController.php:78
* @route '/transaction'
*/
activityTransForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: activityTrans.url(options),
    method: 'get',
})

/**
* @see \Thanhnt\Atkeglobal\Controllers\DashboardController::activityTrans
* @see packages/thanhnt/atkeglobal/src/Controllers/DashboardController.php:78
* @route '/transaction'
*/
activityTransForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: activityTrans.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

activityTrans.form = activityTransForm

/**
* @see \Thanhnt\Atkeglobal\Controllers\DashboardController::transactionDetail
* @see packages/thanhnt/atkeglobal/src/Controllers/DashboardController.php:87
* @route '/transaction/detail/{id}'
*/
export const transactionDetail = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: transactionDetail.url(args, options),
    method: 'get',
})

transactionDetail.definition = {
    methods: ["get","head"],
    url: '/transaction/detail/{id}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Thanhnt\Atkeglobal\Controllers\DashboardController::transactionDetail
* @see packages/thanhnt/atkeglobal/src/Controllers/DashboardController.php:87
* @route '/transaction/detail/{id}'
*/
transactionDetail.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return transactionDetail.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Thanhnt\Atkeglobal\Controllers\DashboardController::transactionDetail
* @see packages/thanhnt/atkeglobal/src/Controllers/DashboardController.php:87
* @route '/transaction/detail/{id}'
*/
transactionDetail.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: transactionDetail.url(args, options),
    method: 'get',
})

/**
* @see \Thanhnt\Atkeglobal\Controllers\DashboardController::transactionDetail
* @see packages/thanhnt/atkeglobal/src/Controllers/DashboardController.php:87
* @route '/transaction/detail/{id}'
*/
transactionDetail.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: transactionDetail.url(args, options),
    method: 'head',
})

/**
* @see \Thanhnt\Atkeglobal\Controllers\DashboardController::transactionDetail
* @see packages/thanhnt/atkeglobal/src/Controllers/DashboardController.php:87
* @route '/transaction/detail/{id}'
*/
const transactionDetailForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: transactionDetail.url(args, options),
    method: 'get',
})

/**
* @see \Thanhnt\Atkeglobal\Controllers\DashboardController::transactionDetail
* @see packages/thanhnt/atkeglobal/src/Controllers/DashboardController.php:87
* @route '/transaction/detail/{id}'
*/
transactionDetailForm.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: transactionDetail.url(args, options),
    method: 'get',
})

/**
* @see \Thanhnt\Atkeglobal\Controllers\DashboardController::transactionDetail
* @see packages/thanhnt/atkeglobal/src/Controllers/DashboardController.php:87
* @route '/transaction/detail/{id}'
*/
transactionDetailForm.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: transactionDetail.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

transactionDetail.form = transactionDetailForm

/**
* @see \Thanhnt\Atkeglobal\Controllers\DashboardController::addTransaction
* @see packages/thanhnt/atkeglobal/src/Controllers/DashboardController.php:95
* @route '/transaction/add'
*/
export const addTransaction = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: addTransaction.url(options),
    method: 'post',
})

addTransaction.definition = {
    methods: ["post"],
    url: '/transaction/add',
} satisfies RouteDefinition<["post"]>

/**
* @see \Thanhnt\Atkeglobal\Controllers\DashboardController::addTransaction
* @see packages/thanhnt/atkeglobal/src/Controllers/DashboardController.php:95
* @route '/transaction/add'
*/
addTransaction.url = (options?: RouteQueryOptions) => {
    return addTransaction.definition.url + queryParams(options)
}

/**
* @see \Thanhnt\Atkeglobal\Controllers\DashboardController::addTransaction
* @see packages/thanhnt/atkeglobal/src/Controllers/DashboardController.php:95
* @route '/transaction/add'
*/
addTransaction.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: addTransaction.url(options),
    method: 'post',
})

/**
* @see \Thanhnt\Atkeglobal\Controllers\DashboardController::addTransaction
* @see packages/thanhnt/atkeglobal/src/Controllers/DashboardController.php:95
* @route '/transaction/add'
*/
const addTransactionForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: addTransaction.url(options),
    method: 'post',
})

/**
* @see \Thanhnt\Atkeglobal\Controllers\DashboardController::addTransaction
* @see packages/thanhnt/atkeglobal/src/Controllers/DashboardController.php:95
* @route '/transaction/add'
*/
addTransactionForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: addTransaction.url(options),
    method: 'post',
})

addTransaction.form = addTransactionForm

/**
* @see \Thanhnt\Atkeglobal\Controllers\DashboardController::activities
* @see packages/thanhnt/atkeglobal/src/Controllers/DashboardController.php:105
* @route '/transaction/activity'
*/
export const activities = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: activities.url(options),
    method: 'get',
})

activities.definition = {
    methods: ["get","head"],
    url: '/transaction/activity',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Thanhnt\Atkeglobal\Controllers\DashboardController::activities
* @see packages/thanhnt/atkeglobal/src/Controllers/DashboardController.php:105
* @route '/transaction/activity'
*/
activities.url = (options?: RouteQueryOptions) => {
    return activities.definition.url + queryParams(options)
}

/**
* @see \Thanhnt\Atkeglobal\Controllers\DashboardController::activities
* @see packages/thanhnt/atkeglobal/src/Controllers/DashboardController.php:105
* @route '/transaction/activity'
*/
activities.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: activities.url(options),
    method: 'get',
})

/**
* @see \Thanhnt\Atkeglobal\Controllers\DashboardController::activities
* @see packages/thanhnt/atkeglobal/src/Controllers/DashboardController.php:105
* @route '/transaction/activity'
*/
activities.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: activities.url(options),
    method: 'head',
})

/**
* @see \Thanhnt\Atkeglobal\Controllers\DashboardController::activities
* @see packages/thanhnt/atkeglobal/src/Controllers/DashboardController.php:105
* @route '/transaction/activity'
*/
const activitiesForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: activities.url(options),
    method: 'get',
})

/**
* @see \Thanhnt\Atkeglobal\Controllers\DashboardController::activities
* @see packages/thanhnt/atkeglobal/src/Controllers/DashboardController.php:105
* @route '/transaction/activity'
*/
activitiesForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: activities.url(options),
    method: 'get',
})

/**
* @see \Thanhnt\Atkeglobal\Controllers\DashboardController::activities
* @see packages/thanhnt/atkeglobal/src/Controllers/DashboardController.php:105
* @route '/transaction/activity'
*/
activitiesForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: activities.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

activities.form = activitiesForm

/**
* @see \Thanhnt\Atkeglobal\Controllers\DashboardController::addActivity
* @see packages/thanhnt/atkeglobal/src/Controllers/DashboardController.php:121
* @route '/transaction/add-activity'
*/
export const addActivity = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: addActivity.url(options),
    method: 'post',
})

addActivity.definition = {
    methods: ["post"],
    url: '/transaction/add-activity',
} satisfies RouteDefinition<["post"]>

/**
* @see \Thanhnt\Atkeglobal\Controllers\DashboardController::addActivity
* @see packages/thanhnt/atkeglobal/src/Controllers/DashboardController.php:121
* @route '/transaction/add-activity'
*/
addActivity.url = (options?: RouteQueryOptions) => {
    return addActivity.definition.url + queryParams(options)
}

/**
* @see \Thanhnt\Atkeglobal\Controllers\DashboardController::addActivity
* @see packages/thanhnt/atkeglobal/src/Controllers/DashboardController.php:121
* @route '/transaction/add-activity'
*/
addActivity.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: addActivity.url(options),
    method: 'post',
})

/**
* @see \Thanhnt\Atkeglobal\Controllers\DashboardController::addActivity
* @see packages/thanhnt/atkeglobal/src/Controllers/DashboardController.php:121
* @route '/transaction/add-activity'
*/
const addActivityForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: addActivity.url(options),
    method: 'post',
})

/**
* @see \Thanhnt\Atkeglobal\Controllers\DashboardController::addActivity
* @see packages/thanhnt/atkeglobal/src/Controllers/DashboardController.php:121
* @route '/transaction/add-activity'
*/
addActivityForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: addActivity.url(options),
    method: 'post',
})

addActivity.form = addActivityForm

/**
* @see \Thanhnt\Atkeglobal\Controllers\DashboardController::activityDetail
* @see packages/thanhnt/atkeglobal/src/Controllers/DashboardController.php:113
* @route '/transaction/activity/detail/{id}'
*/
export const activityDetail = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: activityDetail.url(args, options),
    method: 'get',
})

activityDetail.definition = {
    methods: ["get","head"],
    url: '/transaction/activity/detail/{id}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Thanhnt\Atkeglobal\Controllers\DashboardController::activityDetail
* @see packages/thanhnt/atkeglobal/src/Controllers/DashboardController.php:113
* @route '/transaction/activity/detail/{id}'
*/
activityDetail.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return activityDetail.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Thanhnt\Atkeglobal\Controllers\DashboardController::activityDetail
* @see packages/thanhnt/atkeglobal/src/Controllers/DashboardController.php:113
* @route '/transaction/activity/detail/{id}'
*/
activityDetail.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: activityDetail.url(args, options),
    method: 'get',
})

/**
* @see \Thanhnt\Atkeglobal\Controllers\DashboardController::activityDetail
* @see packages/thanhnt/atkeglobal/src/Controllers/DashboardController.php:113
* @route '/transaction/activity/detail/{id}'
*/
activityDetail.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: activityDetail.url(args, options),
    method: 'head',
})

/**
* @see \Thanhnt\Atkeglobal\Controllers\DashboardController::activityDetail
* @see packages/thanhnt/atkeglobal/src/Controllers/DashboardController.php:113
* @route '/transaction/activity/detail/{id}'
*/
const activityDetailForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: activityDetail.url(args, options),
    method: 'get',
})

/**
* @see \Thanhnt\Atkeglobal\Controllers\DashboardController::activityDetail
* @see packages/thanhnt/atkeglobal/src/Controllers/DashboardController.php:113
* @route '/transaction/activity/detail/{id}'
*/
activityDetailForm.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: activityDetail.url(args, options),
    method: 'get',
})

/**
* @see \Thanhnt\Atkeglobal\Controllers\DashboardController::activityDetail
* @see packages/thanhnt/atkeglobal/src/Controllers/DashboardController.php:113
* @route '/transaction/activity/detail/{id}'
*/
activityDetailForm.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: activityDetail.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

activityDetail.form = activityDetailForm

const DashboardController = { sliverChart, loDe, activityTrans, transactionDetail, addTransaction, activities, addActivity, activityDetail }

export default DashboardController