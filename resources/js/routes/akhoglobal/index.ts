import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../wayfinder'
/**
* @see \Thanhnt\Akhoglobal\Controllers\Adminhtml\BlockAdminController::manage
* @see packages/thanhnt/akhoglobal/src/Controllers/Adminhtml/BlockAdminController.php:23
* @route '/adminhtml/block'
*/
export const manage = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: manage.url(options),
    method: 'get',
})

manage.definition = {
    methods: ["get","head"],
    url: '/adminhtml/block',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Thanhnt\Akhoglobal\Controllers\Adminhtml\BlockAdminController::manage
* @see packages/thanhnt/akhoglobal/src/Controllers/Adminhtml/BlockAdminController.php:23
* @route '/adminhtml/block'
*/
manage.url = (options?: RouteQueryOptions) => {
    return manage.definition.url + queryParams(options)
}

/**
* @see \Thanhnt\Akhoglobal\Controllers\Adminhtml\BlockAdminController::manage
* @see packages/thanhnt/akhoglobal/src/Controllers/Adminhtml/BlockAdminController.php:23
* @route '/adminhtml/block'
*/
manage.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: manage.url(options),
    method: 'get',
})

/**
* @see \Thanhnt\Akhoglobal\Controllers\Adminhtml\BlockAdminController::manage
* @see packages/thanhnt/akhoglobal/src/Controllers/Adminhtml/BlockAdminController.php:23
* @route '/adminhtml/block'
*/
manage.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: manage.url(options),
    method: 'head',
})

/**
* @see \Thanhnt\Akhoglobal\Controllers\Adminhtml\BlockAdminController::manage
* @see packages/thanhnt/akhoglobal/src/Controllers/Adminhtml/BlockAdminController.php:23
* @route '/adminhtml/block'
*/
const manageForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: manage.url(options),
    method: 'get',
})

/**
* @see \Thanhnt\Akhoglobal\Controllers\Adminhtml\BlockAdminController::manage
* @see packages/thanhnt/akhoglobal/src/Controllers/Adminhtml/BlockAdminController.php:23
* @route '/adminhtml/block'
*/
manageForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: manage.url(options),
    method: 'get',
})

/**
* @see \Thanhnt\Akhoglobal\Controllers\Adminhtml\BlockAdminController::manage
* @see packages/thanhnt/akhoglobal/src/Controllers/Adminhtml/BlockAdminController.php:23
* @route '/adminhtml/block'
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

const akhoglobal = {
    manage: Object.assign(manage, manage),
}

export default akhoglobal