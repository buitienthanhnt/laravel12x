import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../wayfinder'
/**
* @see \Thanhnt\Akhoglobal\Controllers\Adminhtml\BlockAdminController::manage
* @see packages/thanhnt/akhoglobal/src/Controllers/Adminhtml/BlockAdminController.php:22
* @route '/'
*/
export const manage = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: manage.url(options),
    method: 'get',
})

manage.definition = {
    methods: ["get","head"],
    url: '/',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Thanhnt\Akhoglobal\Controllers\Adminhtml\BlockAdminController::manage
* @see packages/thanhnt/akhoglobal/src/Controllers/Adminhtml/BlockAdminController.php:22
* @route '/'
*/
manage.url = (options?: RouteQueryOptions) => {
    return manage.definition.url + queryParams(options)
}

/**
* @see \Thanhnt\Akhoglobal\Controllers\Adminhtml\BlockAdminController::manage
* @see packages/thanhnt/akhoglobal/src/Controllers/Adminhtml/BlockAdminController.php:22
* @route '/'
*/
manage.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: manage.url(options),
    method: 'get',
})

/**
* @see \Thanhnt\Akhoglobal\Controllers\Adminhtml\BlockAdminController::manage
* @see packages/thanhnt/akhoglobal/src/Controllers/Adminhtml/BlockAdminController.php:22
* @route '/'
*/
manage.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: manage.url(options),
    method: 'head',
})

/**
* @see \Thanhnt\Akhoglobal\Controllers\Adminhtml\BlockAdminController::manage
* @see packages/thanhnt/akhoglobal/src/Controllers/Adminhtml/BlockAdminController.php:22
* @route '/'
*/
const manageForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: manage.url(options),
    method: 'get',
})

/**
* @see \Thanhnt\Akhoglobal\Controllers\Adminhtml\BlockAdminController::manage
* @see packages/thanhnt/akhoglobal/src/Controllers/Adminhtml/BlockAdminController.php:22
* @route '/'
*/
manageForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: manage.url(options),
    method: 'get',
})

/**
* @see \Thanhnt\Akhoglobal\Controllers\Adminhtml\BlockAdminController::manage
* @see packages/thanhnt/akhoglobal/src/Controllers/Adminhtml/BlockAdminController.php:22
* @route '/'
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