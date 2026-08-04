import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \Thanhnt\Atkeglobal\Controllers\DashboardController::sliverChart
* @see packages/thanhnt/atkeglobal/src/Controllers/DashboardController.php:20
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
* @see packages/thanhnt/atkeglobal/src/Controllers/DashboardController.php:20
* @route '/sliver-chart'
*/
sliverChart.url = (options?: RouteQueryOptions) => {
    return sliverChart.definition.url + queryParams(options)
}

/**
* @see \Thanhnt\Atkeglobal\Controllers\DashboardController::sliverChart
* @see packages/thanhnt/atkeglobal/src/Controllers/DashboardController.php:20
* @route '/sliver-chart'
*/
sliverChart.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: sliverChart.url(options),
    method: 'get',
})

/**
* @see \Thanhnt\Atkeglobal\Controllers\DashboardController::sliverChart
* @see packages/thanhnt/atkeglobal/src/Controllers/DashboardController.php:20
* @route '/sliver-chart'
*/
sliverChart.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: sliverChart.url(options),
    method: 'head',
})

/**
* @see \Thanhnt\Atkeglobal\Controllers\DashboardController::sliverChart
* @see packages/thanhnt/atkeglobal/src/Controllers/DashboardController.php:20
* @route '/sliver-chart'
*/
const sliverChartForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: sliverChart.url(options),
    method: 'get',
})

/**
* @see \Thanhnt\Atkeglobal\Controllers\DashboardController::sliverChart
* @see packages/thanhnt/atkeglobal/src/Controllers/DashboardController.php:20
* @route '/sliver-chart'
*/
sliverChartForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: sliverChart.url(options),
    method: 'get',
})

/**
* @see \Thanhnt\Atkeglobal\Controllers\DashboardController::sliverChart
* @see packages/thanhnt/atkeglobal/src/Controllers/DashboardController.php:20
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
* @see \Thanhnt\Atkeglobal\Controllers\DashboardController::activityTrans
* @see packages/thanhnt/atkeglobal/src/Controllers/DashboardController.php:55
* @route '/activity/transactions'
*/
export const activityTrans = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: activityTrans.url(options),
    method: 'get',
})

activityTrans.definition = {
    methods: ["get","head"],
    url: '/activity/transactions',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Thanhnt\Atkeglobal\Controllers\DashboardController::activityTrans
* @see packages/thanhnt/atkeglobal/src/Controllers/DashboardController.php:55
* @route '/activity/transactions'
*/
activityTrans.url = (options?: RouteQueryOptions) => {
    return activityTrans.definition.url + queryParams(options)
}

/**
* @see \Thanhnt\Atkeglobal\Controllers\DashboardController::activityTrans
* @see packages/thanhnt/atkeglobal/src/Controllers/DashboardController.php:55
* @route '/activity/transactions'
*/
activityTrans.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: activityTrans.url(options),
    method: 'get',
})

/**
* @see \Thanhnt\Atkeglobal\Controllers\DashboardController::activityTrans
* @see packages/thanhnt/atkeglobal/src/Controllers/DashboardController.php:55
* @route '/activity/transactions'
*/
activityTrans.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: activityTrans.url(options),
    method: 'head',
})

/**
* @see \Thanhnt\Atkeglobal\Controllers\DashboardController::activityTrans
* @see packages/thanhnt/atkeglobal/src/Controllers/DashboardController.php:55
* @route '/activity/transactions'
*/
const activityTransForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: activityTrans.url(options),
    method: 'get',
})

/**
* @see \Thanhnt\Atkeglobal\Controllers\DashboardController::activityTrans
* @see packages/thanhnt/atkeglobal/src/Controllers/DashboardController.php:55
* @route '/activity/transactions'
*/
activityTransForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: activityTrans.url(options),
    method: 'get',
})

/**
* @see \Thanhnt\Atkeglobal\Controllers\DashboardController::activityTrans
* @see packages/thanhnt/atkeglobal/src/Controllers/DashboardController.php:55
* @route '/activity/transactions'
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
* @see packages/thanhnt/atkeglobal/src/Controllers/DashboardController.php:63
* @route '/activity/tran-detail/{id}'
*/
export const transactionDetail = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: transactionDetail.url(args, options),
    method: 'get',
})

transactionDetail.definition = {
    methods: ["get","head"],
    url: '/activity/tran-detail/{id}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Thanhnt\Atkeglobal\Controllers\DashboardController::transactionDetail
* @see packages/thanhnt/atkeglobal/src/Controllers/DashboardController.php:63
* @route '/activity/tran-detail/{id}'
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
* @see packages/thanhnt/atkeglobal/src/Controllers/DashboardController.php:63
* @route '/activity/tran-detail/{id}'
*/
transactionDetail.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: transactionDetail.url(args, options),
    method: 'get',
})

/**
* @see \Thanhnt\Atkeglobal\Controllers\DashboardController::transactionDetail
* @see packages/thanhnt/atkeglobal/src/Controllers/DashboardController.php:63
* @route '/activity/tran-detail/{id}'
*/
transactionDetail.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: transactionDetail.url(args, options),
    method: 'head',
})

/**
* @see \Thanhnt\Atkeglobal\Controllers\DashboardController::transactionDetail
* @see packages/thanhnt/atkeglobal/src/Controllers/DashboardController.php:63
* @route '/activity/tran-detail/{id}'
*/
const transactionDetailForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: transactionDetail.url(args, options),
    method: 'get',
})

/**
* @see \Thanhnt\Atkeglobal\Controllers\DashboardController::transactionDetail
* @see packages/thanhnt/atkeglobal/src/Controllers/DashboardController.php:63
* @route '/activity/tran-detail/{id}'
*/
transactionDetailForm.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: transactionDetail.url(args, options),
    method: 'get',
})

/**
* @see \Thanhnt\Atkeglobal\Controllers\DashboardController::transactionDetail
* @see packages/thanhnt/atkeglobal/src/Controllers/DashboardController.php:63
* @route '/activity/tran-detail/{id}'
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
* @see packages/thanhnt/atkeglobal/src/Controllers/DashboardController.php:71
* @route '/activity/add-transaction'
*/
export const addTransaction = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: addTransaction.url(options),
    method: 'post',
})

addTransaction.definition = {
    methods: ["post"],
    url: '/activity/add-transaction',
} satisfies RouteDefinition<["post"]>

/**
* @see \Thanhnt\Atkeglobal\Controllers\DashboardController::addTransaction
* @see packages/thanhnt/atkeglobal/src/Controllers/DashboardController.php:71
* @route '/activity/add-transaction'
*/
addTransaction.url = (options?: RouteQueryOptions) => {
    return addTransaction.definition.url + queryParams(options)
}

/**
* @see \Thanhnt\Atkeglobal\Controllers\DashboardController::addTransaction
* @see packages/thanhnt/atkeglobal/src/Controllers/DashboardController.php:71
* @route '/activity/add-transaction'
*/
addTransaction.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: addTransaction.url(options),
    method: 'post',
})

/**
* @see \Thanhnt\Atkeglobal\Controllers\DashboardController::addTransaction
* @see packages/thanhnt/atkeglobal/src/Controllers/DashboardController.php:71
* @route '/activity/add-transaction'
*/
const addTransactionForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: addTransaction.url(options),
    method: 'post',
})

/**
* @see \Thanhnt\Atkeglobal\Controllers\DashboardController::addTransaction
* @see packages/thanhnt/atkeglobal/src/Controllers/DashboardController.php:71
* @route '/activity/add-transaction'
*/
addTransactionForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: addTransaction.url(options),
    method: 'post',
})

addTransaction.form = addTransactionForm

/**
* @see \Thanhnt\Atkeglobal\Controllers\DashboardController::activities
* @see packages/thanhnt/atkeglobal/src/Controllers/DashboardController.php:83
* @route '/activity'
*/
export const activities = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: activities.url(options),
    method: 'get',
})

activities.definition = {
    methods: ["get","head"],
    url: '/activity',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Thanhnt\Atkeglobal\Controllers\DashboardController::activities
* @see packages/thanhnt/atkeglobal/src/Controllers/DashboardController.php:83
* @route '/activity'
*/
activities.url = (options?: RouteQueryOptions) => {
    return activities.definition.url + queryParams(options)
}

/**
* @see \Thanhnt\Atkeglobal\Controllers\DashboardController::activities
* @see packages/thanhnt/atkeglobal/src/Controllers/DashboardController.php:83
* @route '/activity'
*/
activities.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: activities.url(options),
    method: 'get',
})

/**
* @see \Thanhnt\Atkeglobal\Controllers\DashboardController::activities
* @see packages/thanhnt/atkeglobal/src/Controllers/DashboardController.php:83
* @route '/activity'
*/
activities.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: activities.url(options),
    method: 'head',
})

/**
* @see \Thanhnt\Atkeglobal\Controllers\DashboardController::activities
* @see packages/thanhnt/atkeglobal/src/Controllers/DashboardController.php:83
* @route '/activity'
*/
const activitiesForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: activities.url(options),
    method: 'get',
})

/**
* @see \Thanhnt\Atkeglobal\Controllers\DashboardController::activities
* @see packages/thanhnt/atkeglobal/src/Controllers/DashboardController.php:83
* @route '/activity'
*/
activitiesForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: activities.url(options),
    method: 'get',
})

/**
* @see \Thanhnt\Atkeglobal\Controllers\DashboardController::activities
* @see packages/thanhnt/atkeglobal/src/Controllers/DashboardController.php:83
* @route '/activity'
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
* @see packages/thanhnt/atkeglobal/src/Controllers/DashboardController.php:100
* @route '/activity/add-activity'
*/
export const addActivity = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: addActivity.url(options),
    method: 'post',
})

addActivity.definition = {
    methods: ["post"],
    url: '/activity/add-activity',
} satisfies RouteDefinition<["post"]>

/**
* @see \Thanhnt\Atkeglobal\Controllers\DashboardController::addActivity
* @see packages/thanhnt/atkeglobal/src/Controllers/DashboardController.php:100
* @route '/activity/add-activity'
*/
addActivity.url = (options?: RouteQueryOptions) => {
    return addActivity.definition.url + queryParams(options)
}

/**
* @see \Thanhnt\Atkeglobal\Controllers\DashboardController::addActivity
* @see packages/thanhnt/atkeglobal/src/Controllers/DashboardController.php:100
* @route '/activity/add-activity'
*/
addActivity.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: addActivity.url(options),
    method: 'post',
})

/**
* @see \Thanhnt\Atkeglobal\Controllers\DashboardController::addActivity
* @see packages/thanhnt/atkeglobal/src/Controllers/DashboardController.php:100
* @route '/activity/add-activity'
*/
const addActivityForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: addActivity.url(options),
    method: 'post',
})

/**
* @see \Thanhnt\Atkeglobal\Controllers\DashboardController::addActivity
* @see packages/thanhnt/atkeglobal/src/Controllers/DashboardController.php:100
* @route '/activity/add-activity'
*/
addActivityForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: addActivity.url(options),
    method: 'post',
})

addActivity.form = addActivityForm

/**
* @see \Thanhnt\Atkeglobal\Controllers\DashboardController::activityDetail
* @see packages/thanhnt/atkeglobal/src/Controllers/DashboardController.php:91
* @route '/activity/detail/{id}'
*/
export const activityDetail = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: activityDetail.url(args, options),
    method: 'get',
})

activityDetail.definition = {
    methods: ["get","head"],
    url: '/activity/detail/{id}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Thanhnt\Atkeglobal\Controllers\DashboardController::activityDetail
* @see packages/thanhnt/atkeglobal/src/Controllers/DashboardController.php:91
* @route '/activity/detail/{id}'
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
* @see packages/thanhnt/atkeglobal/src/Controllers/DashboardController.php:91
* @route '/activity/detail/{id}'
*/
activityDetail.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: activityDetail.url(args, options),
    method: 'get',
})

/**
* @see \Thanhnt\Atkeglobal\Controllers\DashboardController::activityDetail
* @see packages/thanhnt/atkeglobal/src/Controllers/DashboardController.php:91
* @route '/activity/detail/{id}'
*/
activityDetail.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: activityDetail.url(args, options),
    method: 'head',
})

/**
* @see \Thanhnt\Atkeglobal\Controllers\DashboardController::activityDetail
* @see packages/thanhnt/atkeglobal/src/Controllers/DashboardController.php:91
* @route '/activity/detail/{id}'
*/
const activityDetailForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: activityDetail.url(args, options),
    method: 'get',
})

/**
* @see \Thanhnt\Atkeglobal\Controllers\DashboardController::activityDetail
* @see packages/thanhnt/atkeglobal/src/Controllers/DashboardController.php:91
* @route '/activity/detail/{id}'
*/
activityDetailForm.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: activityDetail.url(args, options),
    method: 'get',
})

/**
* @see \Thanhnt\Atkeglobal\Controllers\DashboardController::activityDetail
* @see packages/thanhnt/atkeglobal/src/Controllers/DashboardController.php:91
* @route '/activity/detail/{id}'
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

const DashboardController = { sliverChart, activityTrans, transactionDetail, addTransaction, activities, addActivity, activityDetail }

export default DashboardController