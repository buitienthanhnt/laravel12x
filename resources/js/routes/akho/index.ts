import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../wayfinder'
/**
* @see \Thanhnt\Akhoglobal\Controllers\Adminhtml\BlockAdminController::block
 * @see packages/thanhnt/akhoglobal/src/Controllers/Adminhtml/BlockAdminController.php:23
 * @route '/adminhtml/block'
 */
export const block = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: block.url(options),
    method: 'get',
})

block.definition = {
    methods: ["get","head"],
    url: '/adminhtml/block',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Thanhnt\Akhoglobal\Controllers\Adminhtml\BlockAdminController::block
 * @see packages/thanhnt/akhoglobal/src/Controllers/Adminhtml/BlockAdminController.php:23
 * @route '/adminhtml/block'
 */
block.url = (options?: RouteQueryOptions) => {
    return block.definition.url + queryParams(options)
}

/**
* @see \Thanhnt\Akhoglobal\Controllers\Adminhtml\BlockAdminController::block
 * @see packages/thanhnt/akhoglobal/src/Controllers/Adminhtml/BlockAdminController.php:23
 * @route '/adminhtml/block'
 */
block.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: block.url(options),
    method: 'get',
})
/**
* @see \Thanhnt\Akhoglobal\Controllers\Adminhtml\BlockAdminController::block
 * @see packages/thanhnt/akhoglobal/src/Controllers/Adminhtml/BlockAdminController.php:23
 * @route '/adminhtml/block'
 */
block.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: block.url(options),
    method: 'head',
})

    /**
* @see \Thanhnt\Akhoglobal\Controllers\Adminhtml\BlockAdminController::block
 * @see packages/thanhnt/akhoglobal/src/Controllers/Adminhtml/BlockAdminController.php:23
 * @route '/adminhtml/block'
 */
    const blockForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: block.url(options),
        method: 'get',
    })

            /**
* @see \Thanhnt\Akhoglobal\Controllers\Adminhtml\BlockAdminController::block
 * @see packages/thanhnt/akhoglobal/src/Controllers/Adminhtml/BlockAdminController.php:23
 * @route '/adminhtml/block'
 */
        blockForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: block.url(options),
            method: 'get',
        })
            /**
* @see \Thanhnt\Akhoglobal\Controllers\Adminhtml\BlockAdminController::block
 * @see packages/thanhnt/akhoglobal/src/Controllers/Adminhtml/BlockAdminController.php:23
 * @route '/adminhtml/block'
 */
        blockForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: block.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    block.form = blockForm
const akho = {
    block: Object.assign(block, block),
}

export default akho